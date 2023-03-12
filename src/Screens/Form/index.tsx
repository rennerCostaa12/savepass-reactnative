import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import { useState } from 'react';

import Input from "../../components/Input";
import Button from '../../components/Button';
import HeaderForm from '../../components/HeaderForm';

import { styles } from './styles';

export default function Form() {

    const [nameService, setNameService] = useState<string>('');
    const [emailUser, setEmailUser] = useState<string>('');
    const [passwordUser, setPasswordUser] = useState<string>('');

    const handleNew = async () => {
        try {
            if (!nameService || !emailUser || !passwordUser) {
                Toast.show({
                    type: 'info',
                    text1: 'Preencha os campos!',
                });

                return;
            }

            const newData = {
                id: uuid.v4(),
                name: nameService,
                user: emailUser,
                password: passwordUser
            };

            const responseData = await AsyncStorage.getItem('@savepass:password');

            const previousData = responseData ? JSON.parse(responseData) : [];

            const data = [...previousData, newData]

            await AsyncStorage.setItem('@savepass:password', JSON.stringify(data))
            Toast.show({
                type: 'success',
                text1: "Cadastro com sucesso!",
            });

        } catch (error) {
            console.log(error);
            
            Toast.show({
                type: 'error',
                text1: "Não foi possível cadastrar!",
            });
        }

        setNameService('');
        setEmailUser('');
        setPasswordUser('');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.content}>
                <ScrollView>
                    <HeaderForm />

                    <View style={styles.form}>
                        <Input
                            label='Nome do serviço'
                            onChangeText={setNameService}
                            value={nameService}
                        />

                        <Input
                            label='Email ou usuário'
                            autoCapitalize='none'
                            onChangeText={setEmailUser}
                            value={emailUser}
                        />

                        <Input
                            label='Senha'
                            secureTextEntry
                            onChangeText={setPasswordUser}
                            value={passwordUser}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Button
                            onPress={handleNew}
                            title="Salvar"
                        />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
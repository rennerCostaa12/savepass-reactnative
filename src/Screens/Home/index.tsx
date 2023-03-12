import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { useState, useCallback } from "react";

import HeaderHome from "../../components/HeaderHome";
import Card from "../../components/Card";
import Button from "../../components/Button";

import { Cards } from "../../components/Card";

import { styles } from "./styles";

export default function Home() {

    const [data, setData] = useState<Cards[]>([]);

    const handleFetchData = async () => {
        const response = await AsyncStorage.getItem('@savepass:password');
        if (response) {
            const responseJson = JSON.parse(response);
            setData(responseJson);
        }
    }

    const handleDeleteItem = async (id: string) => {
        const response = await AsyncStorage.getItem('@savepass:password');
        const previousData = response ? JSON.parse(response) : [];

        const data = previousData.filter((item: Cards) => item.id !== id);

        AsyncStorage.setItem('@savepass:password', JSON.stringify(data));
        setData(data);
    }

    const handleClearList = async () => {
        try {
            await AsyncStorage.removeItem('@savepass:password');
            setData([]);
        } catch (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'Erro ao limpar lista!',
            });
        }
    }

    useFocusEffect(useCallback(() => {
        handleFetchData();
    }, []));

    return (
        <View style={styles.container}>
            <HeaderHome />

            <View style={styles.listHeader}>
                <Text style={styles.title}>Sua senhas</Text>
                <Text style={styles.listCount}>{`${data.length} ao total`}</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) =>
                    <Card
                        data={item}
                        onPress={() => handleDeleteItem(item.id)}
                    />
                }
            />

            <View style={styles.footer}>
                <Button
                    onPress={handleClearList}
                    title="Limpar lista"
                />
            </View>
        </View>
    )
}
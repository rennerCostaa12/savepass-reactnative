import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";

export default function HeaderForm() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={35} color="#1967FB" />
            </TouchableOpacity>
            <Text style={styles.title}>
                Cadastro
            </Text>
        </View>
    )
}
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useState } from "react";

import { styles } from "./styles";

export interface Cards {
    id: string;
    name: string;
    user: string;
    password: string;
}

interface CardProps {
    data: Cards;
    onPress: () => void;
}

export default function Card({ data, onPress }: CardProps) {

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleToggleVisiblePassword = () => {
        if (passwordVisible) {
            setPasswordVisible(false);
        } else {
            setPasswordVisible(true);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleVisiblePassword}>
                <Ionicons name={passwordVisible ? 'alarm' : 'alarm-outline'} size={25} color="#888D97" />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                {passwordVisible ?
                    <Text style={styles.password}>
                        {data.password}
                    </Text>

                    :
                    <Text style={styles.email}>
                        {data.user}
                    </Text>
                }
            </View>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Ionicons name="trash" size={25} color="#888D97" />
            </TouchableOpacity>
        </View>
    )
}
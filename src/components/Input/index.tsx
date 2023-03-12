import { View, Text, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type InputProps = TextInputProps & {
    label: string;
}

export default function Input({ label, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

export default function HeaderHome() {

    const navigation = useNavigation();

    const handleAdd = () => {
        navigation.navigate("Form", {});
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentPefil}>
                <Image
                    style={styles.iconPerfil}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg' }}
                />
                <View>
                    <Text style={styles.title}>
                        Olá, Renner
                    </Text>
                    <Text style={styles.subtitle}>
                        Sinta-se seguro aqui
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Ionicons name='add' size={25} color={'#f1f1f1f1'} />
            </TouchableOpacity>
        </View>
    )
}
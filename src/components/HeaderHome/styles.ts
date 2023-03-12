import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        height: 170,
        backgroundColor: '#1967FB',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentPefil: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#f1f1f1f1',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#f1f1f1f1'
    },
    button: {
        borderColor: '#f1f1f1f1',
        borderWidth: 1,
        borderRadius: 4,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconPerfil: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    }
})
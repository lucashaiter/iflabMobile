import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

export function BottomSheet() {
    return(
        <View styles={styles.container}>
            <Text styles={styles.title} >Opções</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
    },

    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 24,
    }
})
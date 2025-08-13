import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function Calendar() {
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <View styles={styles.header}>
                <Image
                    style={styles.cabecalho}
                    source={require('../../assets/icons/UI/left.png')}
                />
                <text>aaaa</text>
            </View>
            <text>aaa</text>
        </View>,
        <text> aaaa</text>
    );
}

const styles = StyleSheet.create({
    header:{
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,

    },

    cabecalho:{
        marginleft: 10
    }

});
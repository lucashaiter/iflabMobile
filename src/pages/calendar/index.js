import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DataSelection } from '../../components/cards/DataSelection';

export function Calendar() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View styles={styles.header}>
                <Image
                    style={styles.cabecalho}
                    resizeMode="center"
                    source={require('../../assets/icons/UI/left.png')}
                />
                <Text style={styles.titleFree}>Calendário do laboratório <Text style={{fontWeight: 'bold'}}>A108</Text> </Text>
            </View>
            <View>
                <DataSelection />
            </View>
        </View>
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
        marginleft: 10,
        width: 50,
        tintColor: 'black',
    },

    titleFree: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'Inter',
    }
});
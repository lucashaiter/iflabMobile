import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DataSelection } from '../../components/cards/DataSelection';
import { Sections } from '../../components/cards/Sections';

export function Calendar() {
    return (
        <View style={{flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Image
                    style={styles.cabecalho}
                    resizeMode="center"
                    source={require('../../assets/icons/UI/left.png')}
                />
                <Text style={styles.titleFree}>
                    Calendário do laboratório <Text style={{fontWeight: 'bold'}}>A108</Text>
                </Text>
            </View>
            
            <View style={{zIndex: 1}}>
                <DataSelection />
            </View>
            <View>
                <View style={{marginBottom: 5, marginLeft: 20, marginRight: 20, flex: 1, zIndex: -1}}>
                    <Text style={[styles.TextFont, {marginBottom: 10}]}>Sessões em andamento:</Text>
                    <Sections />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-center",
        margin: 10,

    },

    cabecalho:{
        marginLeft: 5,
        width: '10%',
        height: undefined,
        aspectRatio: 1,
        tintColor: 'black',
    },

    titleFree: {
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Inter',
        flex: 1,
        textAlign: 'center',
    },

    TextFont: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'Inter',
    }
});
import { TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';

export function LabCardFree() {
    // Numero laboratorio
    // Status
    // Responsável	
    // Data de sessão

    return ( 
        <View>
            <TouchableOpacity style={styles.cardFree}>
                <View style={styles.header}>
                    <Text style={styles.titleFree}>Laboratório <Text style={{fontWeight: 'bold'}}>A108</Text> </Text>
                    <View style={{gap: 7, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icons/UI/check.png')} style={{width: 16, height: 16, tintColor: 'white'}} />
                        <Text style={styles.titleFree}>Livre para reservar</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.textFree}>Informações da sessão atual:</Text>
                    <Text style={styles.textFree}>Responsável: <Text style={{fontWeight: 'bold'}}>--</Text> </Text>
                    <Text style={styles.textFree}>Data da sessão: <Text style={{fontWeight: 'bold'}}>--</Text> </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 10,
        fontFamily: 'Inter-Regular'
    },

    body: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0,
    },
    
//---------------------------------------------------------------------------------------------------

    cardFree:{
        flex: 1,
        backgroundColor: "#224411",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
    },

    titleFree: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
    },

    textFree: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'normal',
    },
});

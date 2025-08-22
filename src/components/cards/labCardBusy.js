import { TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';

export function LabCardBusy() {
    // Numero laboratorio
    // Status
    // Responsável	
    // Data de sessão

    return ( 
        <View>
            <TouchableOpacity style={styles.cardBusy}>
                <View style={styles.header}>
                    <Text style={styles.titleBusy}>Laboratório <Text style={{fontWeight: 'bold'}}>A109</Text> </Text>
                    <View style={{gap: 7, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icons/UI/alert2.png')} style={{width: 16, height: 16, tintColor: 'black'}} />
                        <Text style={styles.titleBusy}>Ocupado no momento</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.textBusy}>Informações da sessão atual:</Text>
                    <Text style={styles.textBusy}>Responsável: <Text style={{fontWeight: 'bold'}}>Márcio André Miranda</Text> </Text>
                    <Text style={styles.textBusy}>Data da sessão: <Text style={{fontWeight: 'bold'}}>11/03/2025  11:30-12:20</Text> </Text>
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

    cardBusy:{
        flex: 1,
        backgroundColor: "#EAEAEA",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 15,
    },

    titleBusy: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#555555',
    },

    textBusy: {
        fontSize: 16,
        color: '#555555',
        fontWeight: 'normal',
    },

});
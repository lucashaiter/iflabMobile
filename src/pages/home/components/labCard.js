import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export function LabCard() {
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
                        <Ionicons name="checkmark-circle" size={20} color="white" />
                        <Text style={styles.titleFree}>Livre para reservar</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.textFree}>Informações da sessão atual:</Text>
                    <Text style={styles.textFree}>Responsável: <Text style={{fontWeight: 'bold'}}>--</Text> </Text>
                    <Text style={styles.textFree}>Data da sessão: <Text style={{fontWeight: 'bold'}}>--</Text> </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardBusy}>
                <View style={styles.header}>
                    <Text style={styles.titleBusy}>Laboratório <Text style={{fontWeight: 'bold'}}>A109</Text> </Text>
                    <View style={{gap: 7, flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="alert-circle" size={20} color="black" />
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
    },

    body: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
    },
    
    cardFree:{
        flex: 1,
        backgroundColor: "#224411",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 15,
    },

    titleFree: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'white',
    },

    textFree: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'normal',
    },

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
        fontSize: 20,
        fontWeight: 'normal',
        color: '#555555',
    },

    textBusy: {
        fontSize: 16,
        color: '#555555',
        fontWeight: 'normal',
    },

});
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export function LabCard() {
    // Numero laboratorio
    // Status
    // Responsável	
    // Data de sessão
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.header}>
                <Text>Laboratório NUMERO</Text>
                <Text>STATUS</Text>
            </View>
            <View style={styles.body}>
                <Text>Informações da sessão atual:</Text>
                <Text>Responsável: NOME</Text>
                <Text>Data da sessão: DATA</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        width:"90%"
    },


});
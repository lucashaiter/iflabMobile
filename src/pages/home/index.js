import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { LabCard } from './components/labCard';

export function Home() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../../assets/Logo.png')}
                />
                <TouchableOpacity onPress={() => alert('Profile clicked!')} style={{padding: 10}}>
                    <Image
                        style={styles.profile}
                        resizeMode="contain"
                        source={require('../../assets/Profile.png')}    
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addLab}>
                <Ionicons name='add' size={25}/>
                <Text style={{fontSize: 20, color: '#224411'}}>Adicionar Laboratório</Text>
            </TouchableOpacity>

            <View>
                <LabCard />
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

    logo:{
        width: 120,
        marginLeft: 10,
    },

    profile:{
        height: 70,
        width: 70,
        border: '1px solid gray',
        borderRadius: 50,

    },

    addLab:{
        margin:40,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 8
    }


});
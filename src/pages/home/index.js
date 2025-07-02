import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LabCard } from '../../components/cards/labCard';

export function Home() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../../assets/images/logo.png')}
                />
                <TouchableOpacity onPress={() => alert('Profile clicked!')} style={{padding: 10}}>
                    <Image
                        style={styles.profile}
                        resizeMode="contain"
                        source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEoIDDTF3gIBblJPNp26fKhznRioZ-nK_5JCNwQjmNnZ3AzBJFdoO2lEgNSYuEAF1mh0&usqp=CAU"}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addLab}>
                <Text style={{fontSize: 18, color: '#224411'}}><Text style={{textAlign: 'center', fontSize: 21}}>+</Text> Adicionar Laboratório</Text>
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
        width: 100,
        marginLeft: 10,
    },

    profile:{
        height: 50,
        width: 50,
        borderRadius: 50,
        filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))'

    },

    addLab:{
        marginRight:15,
        marginTop: 30,
        marginBottom: 40,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 8
    }


});
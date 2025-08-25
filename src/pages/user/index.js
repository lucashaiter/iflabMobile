import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BottomSheet } from '../../components/sheet/bottomSheet';

export function User() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    function toogleSheet(){
        setIsSheetOpen((prevState) => !prevState)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={toogleSheet}>
                <Image source={require('../../assets/icons/UI/user.png')} style={styles.image}/>
            </TouchableOpacity>
            
            {isSheetOpen && <BottomSheet onClose={toogleSheet}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    button:{
        marginTop: 74,
        marginRight: 32,
        alignSelf: 'flex-end',
    },

    image:{
        width: 32,
        height: 32,
        tintColor: '#022',
    }


});


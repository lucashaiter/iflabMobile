import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useState } from 'react';

export function Sections() {
    return (
        <View style={styles.container}>
            <Text>Sections Component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(245,245,245,0.8)',
        padding: 15,
    },
});
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import Animated, { 
    useSharedValue, 
    withSpring, 
    withTiming, 
    runOnJS, 
    useAnimatedStyle, 
    SlideInDown,
    SlideOutDown
} from 'react-native-reanimated';

export function BottomSheet({onClose}) {
    const offset = useSharedValue(0);

    function close(){
        offset.value = withSpring(0)
        if(onClose) onClose()
    }

    const pan = Gesture.Pan().onChange((event) => {
        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(-20, offsetDelta)

        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    })
    .onFinalize(() => {
    if (offset.value > 420 / 2) {
        offset.value = withTiming(420, {}, () => {
            runOnJS(close)()
        })
    } else {
        offset.value = withSpring(0)
    }
})

    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }]
    }))

    return(
        <GestureDetector gesture={pan}>
            <Animated.View 
            style={[styles.container, translateY]}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
            >
                <Image source={require('../../assets/icons/UI/drag-horizontal.png')} style={styles.dragIcon} />
                <Text style={styles.title}>Opções</Text>
            </Animated.View>
        </GestureDetector> 
    )
}


const DIMENSIONS = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        height: 420,
        width: DIMENSIONS.width,  
        position: 'absolute',
        bottom: -(20) * 1.6,
        backgroundColor: '#022',
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 24,
    },

    dragIcon:{
        marginTop: 8,
        alignSelf: 'center',
        tintColor: 'white',
        width: 100,
    }
})
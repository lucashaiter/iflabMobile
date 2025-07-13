import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image } from 'react-native'

import { Home } from './pages/home'
import { Calendar } from './pages/calendar'
import { User } from './pages/user'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: "F2F2F2",
                    justifyContent: "space-between",
                    height: 60,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    position: "absolute",
                    paddingBottom: 15
            
                }
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <Image source={require('../src/assets/icons/UI/home.png')} style={{width: 30, height: 30, marginTop: 20}}/>
                        }
                        return <Image source={require('../src/assets/icons/UI/home.png')} style={{width: 30, height: 30, marginTop: 20, opacity: 0.75}}/>

                        
                    }
                }}
            />
            <Tab.Screen
                name="calendar"
                component={Calendar}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <Image source={require('../src/assets/icons/UI/schedule.png')} style={{width: 30, height: 30, marginTop: 20}}/>
                        }
                        return <Image source={require('../src/assets/icons/UI/schedule.png')} style={{width: 30, height: 30, marginTop: 20, opacity: 0.75}}/>
                }}}
            />
            <Tab.Screen
                name="user"
                component={User}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        if(focused){
                            return <Image source={require('../src/assets/icons/UI/user.png')} style={{width: 30, height: 30, marginTop: 20}}/>
                        }
                        return <Image source={require('../src/assets/icons/UI/user.png')} style={{width: 30, height: 30, marginTop: 20, opacity: 0.75}}/>
                }}}
            />
        </Tab.Navigator>
    )
}

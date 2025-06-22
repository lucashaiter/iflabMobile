import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

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
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "absolute",
            
                }
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size}) => {
                        if(focused){
                            return <Ionicons style={{color: "black"}} size={size} name="home"/>
                        }

                        return <Ionicons size={size} name="home-outline"/>
                    }
                }}
            />
            <Tab.Screen
                name="calendar"
                component={Calendar}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size }) => {
                        if(focused){
                            return <Ionicons style={{color: "black"}} size={size} name="calendar-clear"/>
                        }

                        return <Ionicons size={size} name="calendar-clear-outline"/>
                    }
                }}
            />
            <Tab.Screen
                name="user"
                component={User}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size }) => {
                        if(focused){
                            return <Ionicons style={{color: "black"}} size={size} name="person"/>
                        }

                        return <Ionicons size={size} name="person-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

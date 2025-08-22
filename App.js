import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import LoginScreen from './src/pages/login';
import { BottomSheet } from './src/components/sheet/bottomSheet';

/*export default function App() {
  return <LoginScreen />;
}*/

export default function App(){
  return(
    <NavigationContainer>
      <BottomSheet/>
    </NavigationContainer>
  )
}

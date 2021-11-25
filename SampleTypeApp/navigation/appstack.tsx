import  React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, DashBoard } from '../screens'

const Stack = createNativeStackNavigator()

const AppStack: React.FC = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='dashboard' component={DashBoard}/>  
        </Stack.Navigator>
    )
}

export default AppStack


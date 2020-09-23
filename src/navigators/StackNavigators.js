import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notification from '../screens/Notification'
import FullImage from '../screens/FullImage'

const Stack = createStackNavigator()

export const StackNavigator = (params) => {
    return <Stack.Navigator mode={"card"} initialRouteName={"Notification"}>
        <Stack.Screen component={Notification} name={"Notification"} />
        <Stack.Screen component={FullImage} name={"FullImage"} />
    </Stack.Navigator>
}
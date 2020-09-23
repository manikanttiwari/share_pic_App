import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './StackNavigators'

export default function Navigator() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
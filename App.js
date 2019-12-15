import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import mainIndex from './mainIndex';
import Login from './Login';

const App = createStackNavigator({
    Login:{screen:Login},
    mainIndex:{screen:mainIndex},

},{
    headerMode:'none'
});

export default createAppContainer(App);

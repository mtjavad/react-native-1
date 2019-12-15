import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeIndex from './main/HomeIndex';
import SearchIndex from './main/SearchIndex';
import ActivitiesIndex from './main/ActivitiesIndex';
import AddPostIndex from './main/AddPostIndex';
import ProfileIndex from './main/ProfileIndex';
import {Icon} from "native-base";

const BottomTabNavigation = createBottomTabNavigator({
    HomeIndex:{screen:HomeIndex,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Icon name='home' style={{color:tintColor}}/>
        }},
    ProfileIndex:{screen:ProfileIndex,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Icon name='person' style={{color:tintColor}}/>
        }},
    SearchIndex:{screen:SearchIndex,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Icon name='search' style={{color:tintColor}}/>
        }},
    ActivitiesIndex:{screen:ActivitiesIndex,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Icon name='heart' style={{color:tintColor}}/>
        }},


},{
    tabBarOptions:{
        showLabel:false,
        showIcon:true,
        activeTintColor:'#6A1B9A',
        inactiveTintColor:'#CE93D8',
        style:{backgroundColor:'#81D4FA'},
        tabStyle:{borderRightWidth:1,borderRightColor:'#cccccc'}
    }
});

export default createAppContainer(BottomTabNavigation);

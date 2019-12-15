import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import {Container,Tabs,Tab,TabHeading,} from "native-base";
import FollowingActivity from './component/followingActivity'
import YourActivity from './component/yourActivity'

export default class Activity extends Component{
    render(){
        return(
            <Container>
                <Tabs tabBarUnderlineStyle={{height:2,backgroundColor:'#6A1B9A'}} tabContainerStyle={{height:40}}>
                    <Tab heading={<TabHeading style={{backgroundColor:'#81D4FA',borderRightColor:'#aaa9',borderRightWidth:1}}><Text style={{color:'#6200EA', fontFamily: 'IRANSansWeb', fontSize: 12}}>فعالیت های شما</Text></TabHeading>}>
                        <YourActivity/>
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'#81D4FA',borderRightColor:'#aaa9',borderRightWidth:1}}><Text style={{color:'#6200EA', fontFamily: 'IRANSansWeb', fontSize: 12}}>فعالیت های دیگران</Text></TabHeading>}>
                        <FollowingActivity />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#aad',
        justifyContent:'center',

    },

})
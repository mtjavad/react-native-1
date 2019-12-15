import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class SendChat extends Component{
    render(){
        return(
            <View style={{width:'100%'}}>
                <View style={{alignItems:'flex-end',padding:5}}>
                <Text style={{fontFamily: 'IRANSansWeb',backgroundColor:'#ddffdd',maxWidth:'70%',minWidth:'30%',padding:5, minHeight:50,fontSize: 10,borderRadius:10}}>{this.props.chattxt}</Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({

})
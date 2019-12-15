import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class Story extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let x=this.props.value;

        return(
            <View style={{height:16,padding:7,backgroundColor:'#4fc3f7'}}>
                <View style={{height:2,flexDirection:'row'}}>
                    <View  style={{height:'100%',backgroundColor:'#6200ea',flex:x}}/>
                    <View  style={{height:'100%',backgroundColor:'#aaa',flex:(100-x)}}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({

})
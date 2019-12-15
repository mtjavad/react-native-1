import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity,StatusBar} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";
import MySlider from './MySlider'

export default class Story extends Component{
    constructor(props){
        super(props);
        setTimeout(()=>{this.props.navigation.goBack()},13000);
        this.state={
            sliderValue:0
        };
        let interval=setInterval(()=>{
            if (this.state.sliderValue>100) clearInterval(interval);
            else this.setState({sliderValue:this.state.sliderValue+1})
        },100);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <MySlider value={this.state.sliderValue}/>
                <Image style={{width:'100%', height:'100%'}} resizeMode={'stretch'} source={this.props.navigation.getParam('nav',require('../../../images/3.jpg'))}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({

})
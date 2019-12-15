import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class Story extends Component{
    constructor(props){
        super(props);
        this.state={
            seen:props.seen
        };
    }
    onClick(){
        this.props.navigation.navigate('ShowStory');
        if (!this.state.seen){
        this.setState({
            seen:true,
        })
    }}
    render(){
        let color='';
        if (this.state.seen)
            color='#ea0';
        else color='#ccc';
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowStory',{nav:this.props.source})}>
                <Thumbnail style={{margin:2.5,borderWidth:2,borderColor:color}} source={this.props.source}/>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({

})
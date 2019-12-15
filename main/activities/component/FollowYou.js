import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class FollowYou extends Component{
    render(){
        return(
                <CardItem  style={{justifyContent:'flex-end'}} bordered>
                    <Text   style={styles.touchableText}> {this.props.follower} شما را دنبال کرد  </Text>
                    <TouchableOpacity>
                    <Thumbnail source={this.props.followerImg} small/>
                    </TouchableOpacity>
                </CardItem>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
    },
    person:{
        fontFamily: 'IRANSansWeb',
        fontSize: 10
    },
    touchableText:{fontFamily:'IRANSansWeb',fontSize: 10},
})
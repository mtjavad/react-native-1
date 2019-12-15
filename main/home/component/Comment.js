import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class Comment extends Component{
    render(){
        return(
                <CardItem  style={{justifyContent:'flex-end'}} bordered>
                    <View style={{marginRight:10}}>
                    <Text  style={styles.touchableText}> {this.props.commentName} </Text>
                    <Text  style={styles.touchableText}> {this.props.commentDescription} </Text>
                    </View>
                    <TouchableOpacity onPress={this.props.navigation.navigate('OtherProfile')}>
                    <Thumbnail source={this.props.commentImg} small/>
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
    comment:{
        fontFamily: 'IRANSansWeb',
        fontSize: 8
    },
    touchableText:{fontFamily:'IRANSansWeb',fontSize: 10},
})
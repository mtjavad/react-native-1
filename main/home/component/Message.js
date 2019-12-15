import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class Message extends Component{
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chats')}>
                <CardItem  style={{justifyContent:'flex-end'}} bordered>
                    <View style={{marginRight:10,width:'90%'}}>
                        <View style={{flexDirection: 'row',justifyContent:'space-between',width:'100%'}}>
                    <Text  style={[styles.touchableText,{color:'#999'}]}> {this.props.commentTime} </Text>
                    <Text  style={[styles.touchableText,{color:'#999'}]}> {this.props.commentName} </Text>
                        </View>
                    <Text  style={styles.touchableText}> {this.props.commentDescription} </Text>
                    </View>
                    <TouchableOpacity>
                    <Thumbnail source={this.props.commentImg} small/>
                    </TouchableOpacity>

                </CardItem>
            </TouchableOpacity>
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
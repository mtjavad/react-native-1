import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';

export default class AddPost extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text >AddPost</Text>
            </View>
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
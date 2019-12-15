import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Card} from "native-base";
import Post from "../../home/component/Post";


export default class Posts extends Component{
    render(){
        const data=[{key:'a',authorName:'سعید حیرانی' , time:'2 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
            , commentCount:12, likeCount:2, authorImg:require('../../../images/2.jpg'),postImg:require('../../../images/3.jpg')},
            {key:'b',authorName:'مجتبی نباتی' , time:'5 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
                , commentCount:8, likeCount:3, authorImg:require('../../../images/1.jpg'),postImg:require('../../../images/2.jpg')},
            {key:'c',authorName:'بشری نبوی' , time:'3 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
                , commentCount:6, likeCount:5, authorImg:require('../../../images/3.jpg'),postImg:require('../../../images/1.jpg')},
        ];
        return(
            <FlatList data={data}  renderItem={({item})=>
                <Post authorName={item.authorName} time={item.time} description={item.description}
                      commentCount={item.commentCount} likeCount={item.likeCount} authorImg={item.authorImg}
                      postImg={item.postImg} navigation={this.props.navigation}/>
            } />
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#aad',
        justifyContent:'center',

    },
    header:{
        backgroundColor: '#81D4FA',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerTilte:{
        color:'#6A1B9A',
        fontFamily: 'IRANSansWeb',
        fontSize: 14
    },

})
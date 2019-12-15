import React,{Component} from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Thumbnail,Badge} from "native-base";
import Post from './component/Post'
import Story from './component/Story'
import InvertibleScrollView from 'react-native-invertible-scroll-view';

export default class Home extends Component{
    render(){
        const data=[{key:'a',authorName:'سعید حیرانی' , time:'2 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
            , commentCount:12, likeCount:2, authorImg:require('../../images/2.jpg'),postImg:require('../../images/3.jpg')},
            {key:'b',authorName:'مجتبی نباتی' , time:'5 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
                , commentCount:8, likeCount:3, authorImg:require('../../images/1.jpg'),postImg:require('../../images/2.jpg')},
            {key:'c',authorName:'بشری نبوی' , time:'3 ساعت پیش',description:'موفقیت از آن توست. از همین امروز شروع کن!'
                , commentCount:6, likeCount:5, authorImg:require('../../images/3.jpg'),postImg:require('../../images/1.jpg')},
        ];
        const story=[{key:'a',img:require('../../images/1.jpg')},
            {key:'b',img:require('../../images/2.jpg'),seen:false},
            {key:'c',img:require('../../images/3.jpg'),seen:true},
            {key:'d',img:require('../../images/1.jpg'),seen:true},
            {key:'e',img:require('../../images/2.jpg'),seen:false},
            {key:'f',img:require('../../images/3.jpg'),seen:false},
            {key:'g',img:require('../../images/1.jpg'),seen:true},
        ];

        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>

                    <Icon name='camera' style={{color:'#6200EA'}}/>
                    <Title style={styles.headerTilte}>برنامه من</Title>
                    <View>
                        <Icon name='paper-plane' style={{color:'#6200EA',marginTop:-5}} onPress={()=>{this.props.navigation.navigate('Messages')}}/>
                        <View style={{width:18,height:18,marginTop:-35,borderRadius:9,alignItems: 'center',justifyContent:'center',backgroundColor:'#f00'}}>
                            <Text style={{fontFamily:'IRANSansWeb', fontSize: 8 }}>8</Text>
                        </View>

                    </View>
                </Header>
                <Content>
                    <FlatList horizontal
                              renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
                              data={story} renderItem={({item})=>
                        <Story source={item.img} seen={item.seen} navigation={this.props.navigation}/>
                    }/>
                    <FlatList data={data}  renderItem={({item})=>
                        <Post authorName={item.authorName} time={item.time} description={item.description}
                              commentCount={item.commentCount} likeCount={item.likeCount} authorImg={item.authorImg}
                              postImg={item.postImg}/>
                    } />
                </Content>
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
    header:{
        backgroundColor: '#81D4FA',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerTilte:{
        color:'#6A1B9A',
        fontFamily: 'IRANSansWeb',
        fontSize: 20
    },

})
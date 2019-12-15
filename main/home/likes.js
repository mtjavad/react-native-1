import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Card} from "native-base";
import Like from './component/Like'
import PersonSearch from "../search/component/PersonSearch";

export default class Likes extends Component{
    render(){
        const data=[{key:'a', likeName:'سعید حیرانی', likeImg:require('../../images/2.jpg')},
            {key:'b', likeName:'مجتبی نباتی', likeImg:require('../../images/1.jpg')},
            {key:'c', likeName:'بشری نبوی', likeImg:require('../../images/3.jpg')},
        ];

         return(
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>افرادی که این پست را پسندیده اند</Title>
                </Header>
                <Content>
                    <Card>

                    <FlatList data={data}  renderItem={({item})=>
                        <Like likeName={item.likeName} likeImg={item.likeImg} navigation={this.props.navigation} />
                    } />
                    </Card>
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
        fontSize: 14
    },

})
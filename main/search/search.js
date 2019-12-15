import React,{Component} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {Container, Content, Header, Title, Item, Input, Icon, Card} from "native-base";
import PersonSearch from "./component/PersonSearch";


export default class Search extends Component{
    constructor(){
        super();
        this.state={
            data:[{key:'a', likeName:'سعید حیرانی', likeImg:require('../../images/2.jpg')},
                {key:'b', likeName:'مجتبی نباتی', likeImg:require('../../images/1.jpg')},
                {key:'c', likeName:'بشری نبوی', likeImg:require('../../images/3.jpg')},
            ]
        }
    }

    render(){
        return(
            <Container>
                <Header  androidStatusBarColor={'#4FC3F7'} style={{backgroundColor: '#81D4FA', justifyContent:'center', alignItems:'center'}}>
                    <Item regular >
                        <Icon name='ios-search'/>
                        <Input placeholder='نام فرد مورد نظرتان را اینجا بنویسید' style={{fontFamily: 'IRANSansWeb', fontSize: 10}}/>
                        <Icon name='ios-people'/>
                    </Item>
                </Header>
                <Content>
                    <Card>

                        <FlatList data={this.state.data}  renderItem={({item})=>
                            <PersonSearch personName={item.likeName} personImg={item.likeImg} />
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

})
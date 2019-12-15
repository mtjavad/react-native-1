import React,{Component} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {Container, Tabs, Tab, TabHeading, Card, Content,} from "native-base";
import FollowThem from './FollowThem';

export default class YourActivity extends Component{
    constructor(){
        super();
        this.state={
            data:[{key:'a',following:'سعید حیرانی',  followingImg:require('../../../images/1.jpg')},
                {key:'b',following:'مجتبی نباتی',  followingImg:require('../../../images/2.jpg')},
                {key:'c',following:'بشری نبوی', followingImg:require('../../../images/3.jpg')},
            ]
        }
    }
    render(){
        return(
            <Container>
                <Content>
                    <Card>

                        <FlatList data={this.state.data}  renderItem={({item})=>
                            <FollowThem following={item.following} followingImg={item.followingImg}  />
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
import React,{Component} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {Container, Tabs, Tab, TabHeading, Card, Content,} from "native-base";
import FollowYou from './FollowYou'

export default class FollowingActivity extends Component{
    constructor(){
        super();
        this.state={
            data:[{key:'a',follower:'سعید حیرانی',  followerImg:require('../../../images/1.jpg')},
                {key:'b',follower:'مجتبی نباتی',  followerImg:require('../../../images/2.jpg')},
                {key:'c',follower:'بشری نبوی', followerImg:require('../../../images/3.jpg')},
            ]
        }
    }
    render(){
        return(
            <Container>
                <Content>
                    <Card>

                        <FlatList data={this.state.data}  renderItem={({item})=>
                            <FollowYou follower={item.follower} followerImg={item.followerImg}  />
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
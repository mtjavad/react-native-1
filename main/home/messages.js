import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Card,Footer,Textarea} from "native-base";
import Message from './component/Message'

export default class Messages extends Component{
    render(){
        const data=[{key:'a',commentName:'سعید حیرانی', commentDescription:'این آخرین پیام 1 است', commentImg:require('../../images/1.jpg'),commentTime:'2 ساعت قبل' },
            {key:'b',commentName:'مجتبی نباتی', commentDescription:'این آخرین پیام 2 است', commentImg:require('../../images/2.jpg'),commentTime:'1 ساعت قبل'},
            {key:'c',commentName:'بشری نبوی', commentDescription:'این آخرین پیام 3 است', commentImg:require('../../images/3.jpg'),commentTime:'3 ساعت قبل'},
        ]
        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>پیام ها</Title>
                </Header>
                <Content>
                    <Card>

                        <FlatList data={data}  renderItem={({item})=>
                            <Message commentName={item.commentName} commentDescription={item.commentDescription} commentImg={item.commentImg} commentTime={item.commentTime} navigation={this.props.navigation}/>
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
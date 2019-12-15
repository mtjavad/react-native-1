import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View,FlatList} from 'react-native';
import {Container, Content, Footer, Header, Icon, Text, Textarea, Title} from "native-base";
import SendChat from './component/SendChat';
import RecieveChat from './component/RecieveChat';

export default class Chats extends Component {
    constructor() {
        super();
        this.state = {
            txtvalue: '',
            btnDisabled: true,
            chatData:[{key:'a',chattxt:'سلام چه طوری ؟', user_id:1},
                {key:'b',chattxt:'من خوبم. تو چه طوری ؟', user_id:2},
                {key:'c',chattxt:'چه خبرا ؟', user_id:2},
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color: '#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>سعید حیرانی</Title>
                    <View/>
                </Header>
                <Content ref={r=>this.chat=r}>
                    <FlatList data={this.state.chatData} renderItem={({item})=>{
                        if (item.user_id===1)
                            return <SendChat chattxt={item.chattxt}/>
                        else if (item.user_id===2)
                            return <RecieveChat chattxt={item.chattxt}/>
                    }} />
                </Content>
                <Footer style={{height: 70,  flexDirection: 'row',backgroundColor: '#fff',}}>
                    <Textarea value={this.state.txtvalue} onChangeText={txt => {
                        this.setState({txtvalue: txt});
                        if (txt.length > 0) this.setState({btnDisabled: false})
                    }} style={{flex: 9, fontFamily: 'IRANSansWeb', fontSize: 10,borderColor:'#000',borderWidth:1,height:70}}
                              placeholder={'پیام خود را اینجا بنویسید'}/>
                    <TouchableOpacity style={{flex: 1,height:70, marginLeft:5, justifyContent:'center',backgroundColor:'#a000ff',borderColor:'#00f',borderWidth:1}}
                                      disabled={this.state.btnDisabled}
                                      onPress={() => {
                                          const y={key:'f',chattxt: this.state.txtvalue, user_id:1};
                                          this.setState(prevState=>{
                                              return {
                                                  chatData: [...prevState.chatData, y],
                                                  txtvalue: '',
                                                  btnDisabled: true,
                                              }
                                          });
                                          setTimeout(()=>{this.chat._root.scrollToEnd()},300)
                                      }}

                    >
                        <Text style={{fontFamily: 'IRANSansWeb', fontSize: 10, alignSelf:'center',textAlign:'center'}}>ارسال پیام</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aad',
        justifyContent: 'center',

    },
    header: {
        backgroundColor: '#81D4FA',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTilte: {
        color: '#6A1B9A',
        fontFamily: 'IRANSansWeb',
        fontSize: 14
    },

})
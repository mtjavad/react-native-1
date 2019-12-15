import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Card,Footer,Textarea,List,ListItem,CheckBox} from "native-base";

export default class Settings extends Component{
    constructor(){
        super();
        this.state={
            check:false,
        }
    }
    toggle(){
        this.setState({
            check:!this.state.check,
        })
    }
    render(){
        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>تنظیمات</Title>
                </Header>
                <Content>
                    <List >
                        <ListItem itemDivider style={styles.listitem}>
                            <Text style={styles.listtxtDivider}> عمومی</Text>
                        </ListItem>
                        <ListItem style={styles.listitem} onPress={()=>this.toggle()}>
                            <Text style={[styles.listtxt,{marginLeft:10}]}> نوتیفیکیشن </Text>
                            <CheckBox checked={this.state.check} onPress={()=>this.toggle()}/>
                        </ListItem>
                        <ListItem itemDivider style={styles.listitem}>
                            <Text style={styles.listtxtDivider}>حساب کاربری</Text>
                        </ListItem>
                        <ListItem style={styles.listitem}>
                            <Text style={styles.listtxt}>خروج از حساب کاربری</Text>
                        </ListItem>
                    </List>
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
    listitem:{justifyContent:'flex-end',alignItems: 'center',marginLeft: 0},
    listtxt:{
        fontFamily: 'IRANSansWeb',
        fontSize: 10,
    },
    listtxtDivider:{fontFamily: 'IRANSansWeb', fontSize: 8,}

})
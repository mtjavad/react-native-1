import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Card,Footer,Textarea} from "native-base";
import Comment from './component/Comment'
import PersonSearch from "../search/component/PersonSearch";

export default class Comments extends Component{
    constructor(){
        super();
        this.state={txtarea:'',
            data:[{key:'a',commentName:'سعید حیرانی', commentDescription:'این کامنت مربوط به پست می باشد', commentImg:require('../../images/1.jpg')},
                {key:'b',commentName:'مجتبی نباتی', commentDescription:'این کامنت مربوط به پست می باشد', commentImg:require('../../images/2.jpg')},
                {key:'c',commentName:'بشری نبوی', commentDescription:'این کامنت مربوط به پست می باشد', commentImg:require('../../images/3.jpg')},
            ]
        }
    }
    addComment(){
        const x=this.state.txtarea;
        const y={key:'f',commentName:'مجتبی نباتی', commentDescription:x, commentImg:require('../../images/3.jpg')};
        this.setState(prevState=>{return{
            data:[...prevState.data,y],
            txtarea:''
        }})
    };
    render(){
        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>نظرات</Title>
                </Header>
                <Content>
                    <Card>

                        <FlatList data={this.state.data}  renderItem={({item})=>
                            <Comment commentName={item.commentName} commentDescription={item.commentDescription} commentImg={item.commentImg} navigation={this.props.navigation} />
                        } />
                    </Card>
                </Content>
                <Footer style={styles.footer}>
                    <Textarea rowSpan={3} placeholder={'لطفا نظر خود را اینجا بنویسید'} style={styles.txtarea} value={this.state.txtarea} onChangeText={(txt)=>{this.setState({txtarea:txt})}}/>
                    <Button bordered block small style={styles.btn} onPress={this.addComment.bind(this)}>
                        <Text style={styles.btntxt}>ثبت نظر</Text>
                    </Button>
                </Footer>
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
    btntxt:{fontFamily: 'IRANSansWeb', fontSize: 10},
    btn:{borderColor:'#00f',marginTop:5},
    txtarea:{borderWidth:2,borderColor:'#111',fontFamily: 'IRANSansWeb', fontSize: 10},
    footer:{flexDirection:'column',height:100,backgroundColor:'#fff'},

})
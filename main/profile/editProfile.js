import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text,Textarea,Thumbnail,Item,Input,Toast,Root} from "native-base";

export default class EditProfile extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            oldpassword:'',
            newpassword:'',
            renewpassword:'',
        }
    }

    render(){
        return(
            <Root>
            <Container>
                <Header  androidStatusBarColor={'#4FC3F7'} style={styles.header} androidStatusBarColor={'#4FC3F7'}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={styles.headerTilte}>ویرایش پروفایل</Title>
                </Header>
                <Content>
                    <View style={{flex:1,marginTop:10}}>
                        <View  style={{flex:2,flexDirection: 'row'}}>
                            <View  style={{flex:2}}>
                                <View  style={{flex:2,marginLeft:5}}>
                                    <Textarea  style={styles.btntxt} rowSpan={3} placeholder='بیو این جا بنویسید' bordered/>
                                </View>
                                <View  style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',marginTop:10}}>
                                    <Button style={{justifyContent:'center',alignItems: 'center'}} bordered small block>
                                        <Text style={styles.btntxt}>ویرایش بیوگرافی</Text>
                                    </Button>
                                </View>

                            </View>
                            <View  style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
                                <Thumbnail large source={require('../../images/2.jpg')}/>
                                <Button style={{justifyContent:'center',alignItems: 'center',alignSelf:'center', marginTop:10}} bordered small>
                                    <Text  style={styles.btntxt}>تغییر عکس پروفایل</Text>
                                </Button>
                            </View>
                        </View>
                        <View  style={{flex:1,flexDirection:'row-reverse',marginLeft:'10%',marginTop:'5%'}}>
                            <Item regular style={{height:40,width:'60%',}} >
                                <Input  style={{fontFamily: 'IRANSansWeb', fontSize: 10,textAlign: 'right'}} placeholder='نام و نام خانوادگی' value={this.state.name} onChangeText={txt=>this.setState({name:txt})}/>
                            </Item>
                            <Button style={{justifyContent:'center',alignItems: 'center',marginRight:'5%',alignSelf:'center'}} small bordered onPress={()=> {
                                if (this.state.name.length === 0){ Toast.show({
                                    type: "danger",
                                    duration: 3000,
                                    text: 'نام نمی تواند خالی بماند',
                                    textStyle: {fontFamily: 'IRANSansWeb', fontSize: 12}
                                })
                            }
                            }}>
                                <Text  style={styles.btntxt}> تغییر  نام</Text>
                            </Button>
                        </View>
                        <View  style={{flex:5,width:'80%',marginHorizontal:'10%',marginVertical:'2%',justifyContent:'center',alignItems: 'center'}}>
                            <Item regular style={{marginVertical:'1%',height:40}}>
                                <Input placeholder='رمز عبور قبلی' style={{fontFamily: 'IRANSansWeb', fontSize: 10,textAlign: 'right'}} value={this.state.oldpassword} onChangeText={txt=>this.setState({oldpassword:txt})} secureTextEntry={true}/>
                            </Item>
                            <Item regular  style={{marginVertical:'1%',height:40}}>
                                <Input placeholder='رمز عبور جدید' style={{fontFamily: 'IRANSansWeb', fontSize: 10,textAlign: 'right'}}   value={this.state.newpassword} onChangeText={txt=>this.setState({newpassword:txt})} secureTextEntry={true}/>
                            </Item>
                            <Item regular style={{marginVertical:'1%',height:40}}>
                                <Input placeholder='رمز عبور جدید' style={{fontFamily: 'IRANSansWeb', fontSize: 10,textAlign: 'right'}}   value={this.state.renewpassword} onChangeText={txt=>this.setState({renewpassword:txt})} secureTextEntry={true}/>
                            </Item>
                            <Button style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',marginBottom:10}} small bordered onPress={()=>{
                                if (this.state.newpassword!==this.state.renewpassword)
                                Toast.show({
                                type:"danger",
                                duration:3000,
                                text:'رمزهای عبور مطابقت ندارند',
                                textStyle:{fontFamily: 'IRANSansWeb', fontSize: 12}
                            });
                                if (this.state.oldpassword.length===0)
                                    Toast.show({
                                        type:"danger",
                                        duration:3000,
                                        text:'رمز عبور قبلی نمی تواند خالی بماند',
                                        textStyle:{fontFamily: 'IRANSansWeb', fontSize: 12}
                                    })
                            }}>
                                <Text  style={styles.btntxt}>تغییر رمز</Text>
                            </Button>
                        </View>
                    </View>
                </Content>

            </Container>
            </Root>
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
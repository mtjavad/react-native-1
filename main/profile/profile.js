import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {Container,Header,Content,Thumbnail,Text,Button,Icon,Title} from "native-base";
import Posts from "./component/posts";
import GridPost from "./component/gridPost";

export default class Profile extends Component{
    constructor(){
        super();
        this.state={
            showGridPost:false,
        }
    }
    render(){
        return(
            <Container>
                <Header  androidStatusBarColor={'#4FC3F7'} style={{backgroundColor: '#81D4FA', justifyContent:'center', alignItems:'center'}}>
                    <Title style={{ color:'#6A1B9A', fontFamily: 'IRANSansWeb', fontSize: 14}}>برنامه من</Title>
                </Header>
                <Content style={{flex:1}}>
                        <View  style={{flex:10,borderBottomColor:'#aaa', borderBottomWidth:1,}}>
                            <View   style={{flex:2,flexDirection:'row'}}>
                                <View   style={{flex:3,}}>
                                    <View   style={{flexDirection:'row-reverse',padding:10,flex:2,justifyContent:'space-between',alignItems:'center'}}>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>پست ها</Text>
                                        <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>10</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>دنبال کننده ها</Text>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>100</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>دنبال شوندگان</Text>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>150</Text>
                                        </View>
                                    </View>
                                    <View   style={{flexDirection:'row',flex:1,padding:5}}>
                                        <Button bordered small style={{marginRight:5,flex:1,justifyContent:'center',alignItems:'center',borderRadius:5}} onPress={()=>{this.props.navigation.navigate('Settings')}}>
                                            <Icon name='settings'/>
                                        </Button>
                                        <Button bordered  small style={{flex:3,justifyContent:'center',alignItems:'center',borderRadius:5}} onPress={()=>{this.props.navigation.navigate('EditProfile')}}>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>ویرایش پروفایل</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View   style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Thumbnail large source={require('../../images/2.jpg')}/>
                                </View>
                            </View>
                            <View   style={{flex:1,padding:10}}>
                                <Text style={{fontFamily:'IRANSansWeb',fontSize:12,lineHeight:40}}>سعید حیرانی</Text>
                                <Text style={{fontFamily:'IRANSansWeb',fontSize:10}}>موفقیت از آن توست از امروز تلاش کن.</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'column',flex:1}}>
                            <View style={{flex:1,flexDirection:'row',}}>
                            <Button small style={{width:'50%',justifyContent:'center',alignItems:'center',borderRightWidth:1,borderRightColor:'#111'}} onPress={()=>{this.setState({showGridPost:true})}}>
                                <Icon name='apps'  style={(this.state.showGridPost)?{color:'#f00'}:{}}/>
                            </Button>
                            <Button small style={{width:'50%',justifyContent:'center',alignItems:'center'}} onPress={()=>{this.setState({showGridPost:false})}}>
                                <Icon name='menu' style={(this.state.showGridPost)?{}:{color:'#f00'}}/>
                            </Button>
                            </View>
                            <View  style={{}}>
                                {(this.state.showGridPost)?(<GridPost/>):(<Posts navigation={this.props.navigation}/>)}
                            </View>
                        </View>

                </Content>
            </Container>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#aad',
    },

})
import React,{Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container,Header,Content,Thumbnail,Text,Button,Icon,Title} from "native-base";
import Posts from "./component/posts";
import GridPost from "./component/gridPost";

export default class OtherProfile extends Component{
    constructor(){
        super();
        this.state={
            showGridPost:false,
            follow:false,
        }
    }
    render(){
        return(
            <Container>
                <Header  androidStatusBarColor={'#4FC3F7'} style={{backgroundColor: '#81D4FA', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-round-back' style={{color:'#6200EA'}}/>
                    </TouchableOpacity>
                    <Title style={{ color:'#6A1B9A', fontFamily: 'IRANSansWeb', fontSize: 14}}>برنامه من</Title>
                    <View/>
                </Header>
                <Content style={{flex:1}}>
                        <View  style={{flex:10,backgroundColor: '#f00',borderBottomColor:'#aaa', borderBottomWidth:1,}}>
                            <View   style={{flex:2,backgroundColor: '#00f',flexDirection:'row'}}>
                                <View   style={{flex:3,backgroundColor: '#faa'}}>
                                    <View   style={{flexDirection:'row-reverse',padding:10,flex:2,backgroundColor: '#1a1',justifyContent:'space-between',alignItems:'center'}}>
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
                                    <View   style={{flexDirection:'row',flex:1,backgroundColor: '#9af',padding:5}}>
                                        <Button bordered  small style={[this.state.follow ? {backgroundColor:'green',color:'white'}:{},{flex:3,justifyContent:'center',alignItems:'center',borderRadius:5}]} onPress={()=>{this.setState({follow:! this.state.follow})}}>
                                            <Text style={{fontFamily:'IRANSansWeb',fontSize:12,}}>{(this.state.follow ? 'دنبال شده':'دنبال کردن')} </Text>
                                        </Button>
                                    </View>
                                </View>
                                <View   style={{flex:1,backgroundColor: '#aa0',justifyContent:'center',alignItems:'center'}}>
                                    <Thumbnail large source={require('../../images/2.jpg')}/>
                                </View>
                            </View>
                            <View   style={{flex:1,backgroundColor: '#0f0',padding:10}}>
                                <Text style={{fontFamily:'IRANSansWeb',fontSize:12,lineHeight:40}}>سعید حیرانی</Text>
                                <Text style={{fontFamily:'IRANSansWeb',fontSize:10}}>موفقیت از آن توست از امروز تلاش کن.</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'column',flex:1}}>
                            <View style={{flex:1,flexDirection:'row',}}>
                            <Button small style={{backgroundColor:'#e1f5fe',width:'50%',justifyContent:'center',alignItems:'center',borderRightWidth:1,borderRightColor:'#111'}} onPress={()=>{this.setState({showGridPost:true})}}>
                                <Icon name='apps'  style={(this.state.showGridPost)?{color:'#f00'}:{}}/>
                            </Button>
                            <Button small style={{backgroundColor:'#e1f5fe',width:'50%',justifyContent:'center',alignItems:'center'}} onPress={()=>{this.setState({showGridPost:false})}}>
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
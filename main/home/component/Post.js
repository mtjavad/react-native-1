import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Title,Icon,Button,Text,Card,CardItem,Thumbnail} from "native-base";

export default class Post extends Component{
    constructor(){
        super();
        this.state={like:true}
    }
    render(){
        return(
                <Card style={styles.container}>
                    <CardItem  style={{justifyContent:'flex-end'}}>
                        <View>
                            <Text style={styles.author}>{this.props.authorName}</Text>
                            <Text style={styles.time}>{this.props.time}</Text>
                        </View>
                        <Thumbnail source={this.props.authorImg} small style={{marginLeft:10}}/>
                    </CardItem>
                    <CardItem cardBody>
                        <Image  source={this.props.postImg} style={{height:200,width: '100%'}}/>
                    </CardItem>
                    <CardItem style={{justifyContent:'flex-end'}}>
                        <Text style={styles.description}>{this.props.description}</Text>
                    </CardItem>
                    <CardItem style={{justifyContent:'flex-end'}}>
                        <TouchableOpacity style={styles.touchable} >
                        <Text style={styles.touchableText}>{this.props.commentCount} نظر </Text>
                        <Icon name='comment' type="EvilIcons" fontSize={8} color={'#F00'}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.touchable} >
                        <Text   style={styles.touchableText}>{this.props.likeCount} لایک </Text>
                        <Icon name={'heart'} type="EvilIcons"  Style={{fontSize:8, backgroundColor:(this.state.like? '#f00':'#111')}}/>
                        </TouchableOpacity>
                    </CardItem>

                </Card>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    },
    header:{
        flexDirection:'row',

        alignItems:'flex-start',
    },
    author:{
        fontFamily: 'IRANSansWeb',
        fontSize: 10
    },
    time:{
        color:'#777',
        fontFamily: 'IRANSansWeb',
        fontSize: 8
    },

    description:{
        fontFamily: 'IRANSansWeb',
        fontSize: 12,
        textAlign:'left'
    },
    touchableText:{fontFamily:'IRANSansWeb',fontSize: 10},
    touchable:{flexDirection: 'row',alignItems: 'center',justifyContent:'center'}
})
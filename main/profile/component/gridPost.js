import React,{Component} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity,Image} from 'react-native';
import {Container,Header,Content,Title,Icon,Button,Text} from "native-base";
import Modal from 'react-native-modal'

export default class GridPost extends Component{
    constructor(){
        super();
        this.state={
            isModalVisible: false,
            modalImg:require('../../../images/1.jpg'),
        }
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render(){
        const data=[{key:'a', img:require('../../../images/2.jpg')},
            {key:'b', img:require('../../../images/1.jpg')},
            {key:'c', img:require('../../../images/3.jpg')},
            {key:'d', img:require('../../../images/1.jpg')},
            {key:'e', img:require('../../../images/3.jpg')},
            {key:'f', img:require('../../../images/2.jpg')},
            {key:'g', img:require('../../../images/3.jpg')},
            {key:'h', img:require('../../../images/2.jpg')},
            {key:'h', img:require('../../../images/1.jpg')},
        ];

        return(
            <View>
                        <FlatList numColumns={3} data={data}  renderItem={({item})=>
                            <TouchableOpacity style={{flex:1,height:100,margin:2}} onPress={()=>{this.setState({isModalVisible:true,modalImg:item.img})}}>
                                <Image source={item.img} style={{width:125,height:100}} resizeMode='stretch'/>
                            </TouchableOpacity>
                        } />

                <Modal isVisible={this.state.isModalVisible} style={{justifyContent:'center',alignItems: 'center' }} onBackdropPress={()=>{this.setState({isModalVisible:false,})}}>

                        <Image source={this.state.modalImg} resizeMode='stretch'
                               style={{height:200,width:'100%'}}/>

                </Modal>


            </View>
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
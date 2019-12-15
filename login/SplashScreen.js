import React,{Component} from 'react';
import {View,Text,StatusBar,ActivityIndicator,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component{
    constructor(){
        super();
        setTimeout(()=>{this.props.navigation.replace('SignIn')},3000)
    }
    render(){
        return(
            <LinearGradient colors={['#03A9F4','#B3E5FC','#03A9F4']} locations={[0,0.3,0.7]} start={{x:0,y:0.1}} end={{x:2,y:2}} style={styles.container}>
                <StatusBar backgroundColor='#03A9F4'/>
                <View>
                    <Text style={styles.txt1}>موسسه ... تقدیم می کند</Text>
                </View>
                <View>
                    <ActivityIndicator size={40}/>
                    <Text style={styles.txt2}>برنامه من</Text>
                </View>
                <View>
                    <Text style={styles.txt1}>توسط من</Text>
                </View>
            </LinearGradient>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
    },
    txt1: {
        fontFamily:'IRANSansWeb',
        fontSize:20,
    },
    txt2: {
        fontFamily:'IRANSansWeb',
        fontSize:28,
        marginTop:20
    }
})
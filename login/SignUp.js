import React,{Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container,Header,Content,Footer,FooterTab, Title,Button,Text,Icon} from 'native-base';
import {TextField} from 'react-native-material-textfield';

export default class SignIn extends Component{
    constructor(){
        super();
        this.state={
            errorEmail:'',
            errorName:'',
            errorPassword:'',
            errorRePassword:'',
            emailInput:'',
            nameInput:'',
            passwordInput:'',
            rePasswordInput:''
        }
    }
    render(){
        return(
            <Container style={styles.container}>
                <Header androidStatusBarColor='#80DEEA' style={styles.header}>
                    <Title style={styles.headerTitle}>برنامه من</Title>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.viewcontent}>
                        <TextField label='ایمیل' error={this.state.errorEmail} errorColor={'#f00'} value={this.state.emailInput}
                                   titleTextStyle={styles.inputTitle} labelTextStyle={styles.inputLabel} inputContainerStyle={styles.inputInputContainer}
                                   onChangeText={(txt)=>{this.setState({emailInput:txt}) }}/>
                        <TextField label='نام و نام خانوادگی' error={this.state.errorName} errorColor={'#f00'} value={this.state.nameInput}
                                   titleTextStyle={styles.inputTitle} labelTextStyle={styles.inputLabel} inputContainerStyle={styles.inputInputContainer}
                                   onChangeText={(txt)=>{this.setState({nameInput:txt}) }}/>

                        <TextField secureTextEntry={true} label='رمز عبور' error={this.state.errorPassword} errorColor={'#f00'}  value={this.state.passwordInput}
                                   titleTextStyle={styles.inputTitle} labelTextStyle={styles.inputLabel} inputContainerStyle={styles.inputInputContainer}
                                   onChangeText={(txt)=>{this.setState({passwordInput:txt}) }}/>
                        <TextField secureTextEntry={true} label='تکرار رمز عبور' error={this.state.errorRePassword} errorColor={'#f00'}  value={this.state.rePasswordInput}
                                   titleTextStyle={styles.inputTitle} labelTextStyle={styles.inputLabel} inputContainerStyle={styles.inputInputContainer}
                                   onChangeText={(txt)=>{this.setState({rePasswordInput:txt}) }}/>

                        <Button style={styles.btn} block
                                onPress={()=>{this.setState({errorEmail:'',errorName:'',errorPassword:'',errorRePassword:''});
                                    if (this.state.emailInput==='') this.setState({errorEmail:'ایمیل نمی تواند خالی بماند'});
                                    if (this.state.nameInput==='') this.setState({errorName:'نام نمی تواند خالی بماند'});
                                    if (this.state.passwordInput.length<6) this.setState({errorPassword:'پسورد نمی تواند کمتر از 6 کاراکتر باشد'});
                                    if (this.state.passwordInput!==this.state.rePasswordInput) this.setState({errorRePassword:'با پسورد مطابقت ندارد'})
                                }}>
                            <Text style={styles.txt}>ثبت نام</Text>
                        </Button>
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <FooterTab style={{ backgroundColor:'#B2EBF2'}}>
                        <Button vertical style={{borderRightWidth:1, borderRightColor:'#ccc'}}  onPress={()=>{this.props.navigation.navigate('SignIn')}}>
                            <Icon name='log-in' style={styles.txt}/>
                            <Text style={styles.txt}>ورود</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B2EBF2'
    },
    content:{
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B2EBF2'
    },
    headerTitle:{
        fontFamily:'IRANSansWeb',
        fontSize:22,
    },
    txt:{
        fontFamily:'IRANSansWeb',
        fontSize:14,
    },
    btn:{
        borderRadius:10,
        backgroundColor:'#40B6AC',
        marginTop:'10%',
        justifyContent:'center',
        alignItems:'center',
    },
    viewcontent:{
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
    },
    inputLabel:{
        fontFamily:'IRANSansWeb',
    },
    inputInputContainer:{
        alignItems:'flex-end'
    },
    inputContainer:{
        alignItems:'flex-end'
    },
    inputTitle:{
        fontFamily:'IRANSansWeb',
        alignSelf:'flex-end',
        fontSize:10
    },
})
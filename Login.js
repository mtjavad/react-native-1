import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from './login/SignIn'
import SignUp from './login/SignUp'
import ForgetPassword from './login/ForgetPassword'
import Lock from './login/Lock'
import SplashScreen from './login/SplashScreen'
import mainIndex from './mainIndex';

const Login = createStackNavigator({
    SplashScreen: {screen: SplashScreen},
    SignIn: {screen: SignIn},
    SignUp: {screen: SignUp},
    ForgetPassword: {screen: ForgetPassword},
    Lock: {screen: Lock},
    mainIndex: {screen: mainIndex},
},{
    headerMode:'none'
});

export default createAppContainer(Login);
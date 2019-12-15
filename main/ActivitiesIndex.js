import { createStackNavigator, createAppContainer } from "react-navigation";
import Activities from './activities/activities';
import OtherProfile from "./profile/otherprofile";

const HomeIndex = createStackNavigator({
    Activities: {screen: Activities},
    OtherProfile: {screen: OtherProfile},
},{
    headerMode:'none'
});

export default createAppContainer(HomeIndex);
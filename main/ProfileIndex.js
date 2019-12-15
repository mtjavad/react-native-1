import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from './profile/profile';
import Settings from './profile/settings';
import EditProfile from './profile/editProfile';
import Likes from "./home/likes";
import Comments from "./home/comments";

const HomeIndex = createStackNavigator({
    Profile: {screen: Profile},
    Settings: {screen: Settings},
    EditProfile: {screen: EditProfile},
    Likes: {screen: Likes},
    Comments: {screen: Comments},
},{
    headerMode:'none'
});

export default createAppContainer(HomeIndex);
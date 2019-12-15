import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './home/home';
import Likes from './home/likes';
import Comments from './home/comments';
import Messages from './home/messages';
import Chats from './home/chats';
import ShowStory from './home/component/ShowStory';
import OtherProfile from './profile/otherprofile';

const HomeIndex = createStackNavigator({
    Home: {screen: Home},
    Likes: {screen: Likes},
    Comments: {screen: Comments},
    Messages: {screen: Messages},
    Chats: {screen: Chats},
    ShowStory: {screen: ShowStory},

},{
    headerMode:'none'
});
HomeIndex.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default createAppContainer(HomeIndex);
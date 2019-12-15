import { createStackNavigator, createAppContainer } from "react-navigation";
import Search from './search/search';
import OtherProfile from './profile/otherprofile';

const HomeIndex = createStackNavigator({
    Search: {screen: Search},


},{
    headerMode:'none'
});

export default createAppContainer(HomeIndex);
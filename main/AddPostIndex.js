import { createStackNavigator, createAppContainer } from "react-navigation";
import AddPost from './addPost/addPost';


const HomeIndex = createStackNavigator({
    AddPost: {screen: AddPost},
},{
    headerMode:'none'
});

export default createAppContainer(HomeIndex);
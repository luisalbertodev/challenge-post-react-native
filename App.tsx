import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UsersScreen from "./screens/UsersScreen";
import PostsScreen from "./screens/PostsScreen";
import DetailScreen from "./screens/DetailScreen";

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: "Users",
  }
);

export default createAppContainer(AppNavigator);

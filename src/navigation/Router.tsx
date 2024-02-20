import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/home";
import Search from "@/screens/search";
import Favorites from "@/screens/favorites";
import MyJobs from "@/screens/my-jobs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SearchBar from "@/screens/home/components/SearchBar";
import { BottomTabParamList } from "@/types/navigation";
import HomeStack from "./stacks/HomeStack";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerTitle:()=><SearchBar/>,
          headerTitleAlign:"center",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyJobs"
        component={MyJobs}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

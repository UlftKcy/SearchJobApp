import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/home";
import Search from "@/screens/search";
import Favorites from "@/screens/favorites";
import MyJobs from "@/screens/my-jobs";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator>
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Search" component={Search} />
       <Tab.Screen name="Favorites" component={Favorites} />
       <Tab.Screen name="MyJobs" component={MyJobs} />
    </Tab.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from "@/screens/jobs";
import FavoriteJobs from "@/screens/favorite-jobs";


const RootStack = createStackNavigator();
const RootDrawer = createDrawerNavigator();

function Drawer() {
  return (
    <RootDrawer.Navigator initialRouteName="Jobs">
      <RootDrawer.Screen name="Jobs" component={Jobs} />
      <RootDrawer.Screen name="FavoriteJobs" component={FavoriteJobs} />
    </RootDrawer.Navigator>
  );
}

export default function Router() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

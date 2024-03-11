import { createStackNavigator } from "@react-navigation/stack";
import JobDetailModal from "./modals/JobDetailModal";
import BottomTabNavigator from "./tabs/BottomTabNavigator";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "transparentModal",cardOverlayEnabled:true}}>
        <RootStack.Screen name="JobDetailModal" component={JobDetailModal}/>
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

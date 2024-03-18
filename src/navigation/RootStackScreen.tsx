import { createStackNavigator } from "@react-navigation/stack";
import JobDetailModal from "../modals/JobDetailModal";
import BottomTabNavigator from "./tabs/BottomTabNavigator";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  const navigation = useNavigation();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
          headerStyle: { backgroundColor: "#ffff" },
          headerLeftContainerStyle: { padding: 16 },
          headerRightContainerStyle: { padding: 16 },
        }}
      >
        <RootStack.Screen
          name="JobDetailModal"
          component={JobDetailModal}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

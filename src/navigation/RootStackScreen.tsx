import { createStackNavigator } from "@react-navigation/stack";
import JobDetailModal from "./modals/JobDetailModal";
import BottomTabNavigator from "./tabs/BottomTabNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="close" size={24} color="#4966F7" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <MaterialIcons
                name="favorite-outline"
                size={24}
                color="#4966F7"
              />
            ),
            headerStyle: {
              height: 100,
            },
            headerTitle:""
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

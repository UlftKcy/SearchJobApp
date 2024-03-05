import ModalCategory from "@/screens/modals/ModalCategory";
import ModalFilter from "@/screens/modals/ModalFilter";
import Search from "@/screens/search";
import { SearchStackParamList } from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<SearchStackParamList>();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Group>
        <Stack.Screen
          name="ModalFilter"
          component={ModalFilter}
          options={{ title: "Filter" }}
        />
        <Stack.Screen
          name="ModalCategory"
          component={ModalCategory}
          options={{ title: "Select Category" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

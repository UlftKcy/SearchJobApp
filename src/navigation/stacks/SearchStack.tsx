import Category from "@/screens/modals/Category";
import Filter from "@/screens/modals/Filter";
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
          name="Filter"
          component={Filter}
          options={{ title: "Filter" }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ title: "Select Category" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

import Category from "@/screens/category";
import Filter from "@/screens/filter";
import Search from "@/screens/search";
import { SearchStackParamList } from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<SearchStackParamList>();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
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
    </Stack.Navigator>
  );
}

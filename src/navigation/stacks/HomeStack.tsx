import DailyTopJobsPage from "@/screens/dailyTopJobs";
import HiringNowPage from "@/screens/hiringNow";
import Home from "@/screens/home";
import RecentlyViewJobsPage from "@/screens/recentlyViewJobs";
import { HomeStackParamList } from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DailyTopJobs"
        component={DailyTopJobsPage}
        options={{ title: "Your Daily Top Jobs" }}
      />
      <Stack.Screen name="HiringNow" component={HiringNowPage} />
      <Stack.Screen
        name="RecentlyViewJobs"
        component={RecentlyViewJobsPage}
        options={{ title: "Recently View Jobs" }}
      />
    </Stack.Navigator>
  );
}

import type { StackNavigationProp } from "@react-navigation/stack";

export type BottomTabParamList = {
  HomeStack: undefined;
  Search: undefined;
  Favorites: undefined;
  MyJobs: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  DailyTopJobs: undefined;
  HiringNow: undefined;
  RecentlyViewJobs: undefined;
  Search:undefined;
};

export type ApplicationNavigationProps =
  StackNavigationProp<HomeStackParamList>;

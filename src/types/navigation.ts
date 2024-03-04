import type { StackNavigationProp } from "@react-navigation/stack";

export type BottomTabParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  Favorites: undefined;
  MyJobs: undefined;
};

export type HomeStackParamList = {
  Home:undefined;
  DailyTopJobs:undefined;
  HiringNow:undefined;
  RecentlyViewJobs:undefined;
  SearchStack:undefined;
};

export type SearchStackParamList = {
  Search:undefined;
  ModalFilter:undefined;
};

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList>;
export type SearchNavigationProp = StackNavigationProp<SearchStackParamList>;


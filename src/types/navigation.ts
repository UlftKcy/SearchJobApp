import type { StackNavigationProp } from "@react-navigation/stack";
import { JobType } from ".";

export type BottomTabParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  Favorites: undefined;
  MyJobs: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  DailyTopJobs: undefined;
  HiringNow: undefined;
  RecentlyViewJobs: undefined;
  SearchStack: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  Filter: undefined;
  Category: undefined;
};

export type ModalStackParamList = {
  JobDetailModal: { selectedJob: JobType };
};

export type CompanyStackParamList={
  CompanyPage:{companyId:number};
}

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList>;
export type SearchNavigationProp = StackNavigationProp<SearchStackParamList>;
export type ModalNavigationProp = StackNavigationProp<ModalStackParamList>;
export type CompanyNavigationProp = StackNavigationProp<CompanyStackParamList>;
import type {
  StackNavigationProp,
  // StackScreenProps,
} from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  MyJobs: undefined;
};

/* export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>; */

export type ApplicationNavigationProps =
  StackNavigationProp<ApplicationStackParamList>;

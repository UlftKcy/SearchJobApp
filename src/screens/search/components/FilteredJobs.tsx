import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { getFilteredJobs } from "@/features/search/filterByJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
} from "react-native";
import EmptyDisplayCard from "./EmptyDisplayCard";

export default function FilteredJobs() {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  // filtered jobs and check loading
  const { filteredJobs, loading, searchText } = useAppSelector(
    (state) => state.filterByJob
  );
  const { page, jobs } = filteredJobs;

  // selected category
  const selectedCategory = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );

  // infinitive scroll
  const loadJobs = () => {
    if (!loading && !searchText) {
      dispatch(getFilteredJobs({ page, category: selectedCategory }));
    }
  };

  if (jobs.length === 0 && !loading) {
    return <EmptyDisplayCard />;
  }

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => <JobCardWithCompany {...item} />}
      keyExtractor={(item, _) => item.id.toString()}
      ListFooterComponent={
        loading && <ActivityIndicator size="large" color={colors.primary} />
      }
      onEndReachedThreshold={0.1}
      onEndReached={loadJobs}
    />
  );
}

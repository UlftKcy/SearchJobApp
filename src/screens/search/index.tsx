import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { getFilteredJobs } from "@/features/search/filterByJobSlice";
import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { useTheme } from "@react-navigation/native";
import EmptyDisplayCard from "./components/EmptyDisplayCard";

export default function Search() {
  // filtered jobs and loading check
  const { filteredJobs, loading } = useAppSelector(
    (state) => state.filterByJob
  );
  const { page, jobs } = filteredJobs;
  
  // dispatch selected category to getFilteredJobs
  const selectedCategory = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  // infinitive scroll
  const loadJobs = () => {
    if (!loading) {
      dispatch(getFilteredJobs({ page, category: selectedCategory }));
    }
  };

  useEffect(() => {
    if (jobs.length !== 0) {
      loadJobs();
    }
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      {jobs.length === 0 && !loading ? (
        <EmptyDisplayCard />
      ) : (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffff",
  },
  recentJobs: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 12,
  },
  noSearch: {
    fontSize: 16,
  },
});

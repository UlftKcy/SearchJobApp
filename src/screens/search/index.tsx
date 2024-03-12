import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { getFilteredJobs } from "@/features/search/filterByJobSlice";
import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";

export default function Search() {
  const { jobs, page } = useAppSelector(
    (state) => state.filterByJob.filteredJobs
  );
  const loading = useAppSelector((state) => state.filterByJob.loading);

  const selectedCategory = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );
  const dispatch = useAppDispatch();

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
      <SearchBar/>
      {jobs.length === 0 && !loading ? (
        <View style={{paddingHorizontal:16}}>
          <Text style={styles.recentJobs}>Recent Jobs</Text>
          <Text style={styles.noSearch}>No search...</Text>
        </View>
      ) : (
        <FlatList
          data={jobs}
          renderItem={({ item }) => <JobCardWithCompany {...item} />}
          keyExtractor={(item, _) => item.id.toString()}
          ListFooterComponent={loading && 
            <View style={{paddingHorizontal:16}}>
              <Text>Loading...</Text>
            </View>
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

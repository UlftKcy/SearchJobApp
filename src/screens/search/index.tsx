import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { getFilteredJobs } from "@/features/search/filterByJobSlice";

export default function Search() {
  const inputRef = useRef(null);
  const { jobs, page } = useAppSelector(
    (state) => state.filterByJob.filteredJobs
  );

  const selectedCategory = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      inputRef.current.focus();
    }, [])
  );

  const loadJobs = () => {
    dispatch(getFilteredJobs({ page, category: selectedCategory }));
  };

  useEffect(() => {
    if (jobs.length !== 0) {
      loadJobs();
    }
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar inputRef={inputRef} />
      {jobs.length === 0 ? (
        <View>
          <Text style={styles.recentJobs}>Recent Jobs</Text>
          <Text style={styles.noSearch}>No search...</Text>
        </View>
      ) : (
        <FlatList
          data={jobs}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          // ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
          ListFooterComponent={
            <View>
              <Text>Loading...</Text>
            </View>
          }
          onEndReachedThreshold={0.5}
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
    padding: 16,
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

import {
  clearFilter,
  getFilteredJobs,
} from "@/features/search/filterByJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FilterActions() {
  const { navigate } = useNavigation<SearchNavigationProp>();
  const dispatch = useAppDispatch();
  const { selectedCategory, loading } = useAppSelector(
    (state) => state.filterByJob
  );
  const page = useAppSelector((state) => state.filterByJob.filteredJobs.page);

  const onSubmit = () => {
    if (selectedCategory) {
      dispatch(getFilteredJobs({ page, category: selectedCategory }));
    }
    if (!loading) {
      navigate("Search");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => dispatch(clearFilter())}
      >
        <Text style={styles.clearButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton} onPress={onSubmit}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: "#ffff",
    padding: 14,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: "#4966F7",
    width: "50%",
    marginRight: 5,
  },
  clearButtonText: {
    color: "#4966F7",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  filterButton: {
    backgroundColor: "#4966F7",
    padding: 14,
    borderRadius: 24,
    width: "50%",
  },
  filterButtonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

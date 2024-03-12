import { getCategories } from "@/features/jobs/jobsWithCompanySlice";
import { getFilteredJobs } from "@/features/search/filterByJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Filter() {
  const { navigate } = useNavigation<SearchNavigationProp>();
  const dispatch = useAppDispatch();
  const { selectedCategory, loading } = useAppSelector(
    (state) => state.filterByJob
  );
  const page = useAppSelector((state) => state.filterByJob.filteredJobs.page);

  const handleFilter = async () => {
    dispatch(getCategories());
    navigate("Category");
  };

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.categoryContainer}>
          <Text style={styles.title}>Category</Text>
          <TouchableOpacity
            onPress={handleFilter}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryTitle}>Select Category</Text>
          </TouchableOpacity>
          <Text style={styles.selectedCategoryText}>
            {selectedCategory !== null ? selectedCategory : ""}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onSubmit}
      >
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 16,
  },

  filterByContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "600",
  },

  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#DDDFE5",
    borderRadius: 24,
    padding: 14,
  },
  categoryTitle: {
    fontSize: 14,
  },
  selectedCategoryText: {
    color: "#4966F7",
    marginTop: 5,
    marginLeft: 15,
  },

  filterButton: {
    backgroundColor: "#4966F7",
    padding: 14,
    borderRadius: 24,
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  filterButtonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

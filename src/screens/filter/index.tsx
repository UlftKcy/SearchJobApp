import { getCategories } from "@/features/jobs/jobsWithCompanySlice";
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
import FilterActions from "./components/FilterActions";

export default function Filter() {
  const { navigate } = useNavigation<SearchNavigationProp>();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );

  const handleFilter = async () => {
    dispatch(getCategories());
    navigate("Category");
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
      <FilterActions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 16,
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
    borderColor: "rgb(199, 199, 204)",
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
});

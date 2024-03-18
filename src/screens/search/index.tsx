import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "./components/SearchBar";
import FilteredJobs from "./components/FilteredJobs";

const onClear = () => {};

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FilteredJobs />
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffff",
  },
  clearButton: {
    backgroundColor: "#4966F7",
    padding: 14,
    borderRadius: 24,
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  clearButtonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

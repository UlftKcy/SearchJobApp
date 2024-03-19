import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";
import FilteredJobs from "./components/FilteredJobs";
import ClearFilter from "./components/ClearFilter";

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FilteredJobs />
      <ClearFilter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffff",
  },
});

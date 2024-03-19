import { clearFilter } from "@/features/search/filterByJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ClearFilter() {
  const dispatch = useAppDispatch();
  const filteredJobs = useAppSelector(
    (state) => state.filterByJob.filteredJobs.jobs
  );

  if (filteredJobs.length === 0) {
    return;
  }

  return (
    <TouchableOpacity
      style={styles.clearButton}
      onPress={() => dispatch(clearFilter())}
    >
      <Text style={styles.clearButtonText}>Clear Results</Text>
    </TouchableOpacity>
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

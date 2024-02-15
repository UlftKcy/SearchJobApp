import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TopJobsHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Your Daily Top Jobs</Text>
      <TouchableOpacity style={styles.seeAllWrapper}>
        <Text style={styles.seeAll}>SEE ALL</Text>
        <MaterialIcons name="keyboard-arrow-right" size={18} color="#334AC0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  seeAllWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAll: {
    color: "#334AC0",
    fontWeight: "700",
  },
});

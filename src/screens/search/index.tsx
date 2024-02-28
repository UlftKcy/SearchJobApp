import { StyleSheet, Text, View } from "react-native";

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.recentJobs}>Recent Jobs</Text>
        <Text style={styles.noSearch}>No search...</Text>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

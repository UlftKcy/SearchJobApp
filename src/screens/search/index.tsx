import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef } from "react";

export default function Search() {
  const inputRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      inputRef.current.focus();
    }, [])
  );

  return (
    <View style={styles.container}>
      <SearchBar inputRef={inputRef}/>
      <View>
        <Text style={styles.recentJobs}>Recent Jobs</Text>
        <Text style={styles.noSearch}>No search...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
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

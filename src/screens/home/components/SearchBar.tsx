import { ApplicationNavigationProps } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  const navigation = useNavigation<ApplicationNavigationProps>();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Jobs,positions,companies..."
        onPressIn={() => navigation.navigate("Search")}
        showSoftInputOnFocus={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "100%",
    height: 36,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#DDDFE5",
  },
});

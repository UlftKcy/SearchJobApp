import { HomeNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, View } from "react-native";

export default function HomeSearchBar() {
  const {navigate} = useNavigation<HomeNavigationProp>();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Jobs,positions,companies..."
        onPressIn={() => navigate("SearchStack")}
        showSoftInputOnFocus={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#DDDFE5",
  },
});

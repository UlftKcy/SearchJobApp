import { searchQuery } from "@/features/search/searchSlice";
import { useAppDispatch } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import FilterIcon from "react-native-vector-icons/AntDesign";

export default function SearchBar({inputRef}) {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<SearchNavigationProp>();

  const onSubmit = () => {
    dispatch(searchQuery(searchText));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Jobs,positions,companies..."
        inputMode="search"
        enterKeyHint="search"
        autoFocus={true}
        cursorColor="#4966F7"
        onChangeText={(newSearchText) => setSearchText(newSearchText)}
        onSubmitEditing={onSubmit}
        ref={inputRef}
      />
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => navigate("ModalFilter")}
      >
        <FilterIcon name="filter" size={26} style={styles.button} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:20,
  },
  input: {
    width: "87%",
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#DDDFE5",
    backgroundColor: "#ffff",
    marginRight: 5,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: "#DDDFE5",
    borderRadius: 5,
    width: "13%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});

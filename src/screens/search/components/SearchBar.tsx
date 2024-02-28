import { searchQuery } from "@/features/search/searchSlice";
import { useAppDispatch } from "@/hooks/redux";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ModalFilters from "./ModalFilters";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [filtersModalVisible,setFiltersModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(searchQuery(searchText));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Jobs,positions,companies..."
          inputMode="search"
          enterKeyHint="search"
          autoFocus={true}
          cursorColor="#4966F7"
          onChangeText={(newSearchText) => setSearchText(newSearchText)}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.button} onPress={()=>setFiltersModalVisible(!filtersModalVisible)}>
          <Text style={styles.buttonText}>Filters</Text>
          <ModalFilters filtersModalVisible={filtersModalVisible} setFiltersModalVisible={setFiltersModalVisible}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
   
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#DDDFE5",
    backgroundColor: "#ffff",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderWidth:1,
    borderColor: "#334AC0",
    paddingVertical: 8,
    borderRadius: 8,
    width:Dimensions.get("window").width/4,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText:{
    color:"#334AC0"
  }
});

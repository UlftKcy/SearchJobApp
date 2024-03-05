import { useAppSelector } from "@/hooks/redux";
import { index } from "cheerio/lib/api/traversing";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ModalCategory() {
  const categories = useAppSelector((state) => state.jobs.categories);

  return <FlatList data={categories} renderItem={({ item }) => <View><Text>{item}</Text></View>} keyExtractor={(_,index)=>index.toString()}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 16,
  },
  /*  title: {
      fontSize: 16,
      marginBottom: 20,
      fontWeight: "600",
    }, */
  /* categoryButton: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#DDDFE5",
      borderRadius: 24,
      padding: 14,
    },
    categoryTitle: {
      fontSize: 14,
    }, */
});

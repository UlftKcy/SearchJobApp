import { StyleSheet, Text, View } from "react-native";

export default function ModalFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#ffff",
  },
  title: {
    color: "#ffff",
    fontSize: 20,
  },
});

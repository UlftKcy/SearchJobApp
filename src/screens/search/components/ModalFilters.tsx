import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ModalFilters({
  filtersModalVisible,
  setFiltersModalVisible,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={filtersModalVisible}
      onRequestClose={() => setFiltersModalVisible(false)}
    >
      <Pressable
        onPress={() => setFiltersModalVisible(false)}
        style={styles.container}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>ModalFilters</Text>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    height: Dimensions.get("window").height / 3,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#334AC0",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    color: "#ffff",
    fontSize: 20,
  },
});

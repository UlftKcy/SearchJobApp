import useSkeletonAnimation from "@/hooks/useSkeletonAnimation";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

export default function SkeletonLargeJobCard() {
  const opacity = useSkeletonAnimation();

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.cardHeader}>
        <Text></Text>
      </View>
      <View style={styles.cardBody}>
        <Text></Text>
      </View>
      <View style={styles.companyName}>
        <Text></Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 1.3,
    height: 180,
    backgroundColor: "rgb(199, 199, 204)",
    padding: 20,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 10,
  },
  cardHeader: {
    width: "50%",
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
  cardBody: {
    width: "75%",
    paddingVertical: 16,
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
  companyName: {
    width: "50%",
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
});

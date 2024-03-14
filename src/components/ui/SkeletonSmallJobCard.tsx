import useSkeletonAnimation from "@/hooks/useSkeletonAnimation";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

export default function SkeletonSmallJobCard() {
  const opacity = useSkeletonAnimation();

  return (
    <Animated.View style={[styles.company, { opacity }]}>
      <View style={styles.image}></View>
      <View style={styles.companyDetail}>
        <Text></Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  company: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "rgb(199, 199, 204)",
    marginBottom: 5,
    borderRadius: 8,
    padding: 5,
  },
  image: {
    borderRadius: 50,
    marginRight: 12,
    width: Dimensions.get("window").width / 10,
    height: Dimensions.get("window").width / 10,
    backgroundColor: "rgb(199, 199, 204)",
  },
  companyDetail: {
    width: "75%",
    paddingVertical: 5,
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
});

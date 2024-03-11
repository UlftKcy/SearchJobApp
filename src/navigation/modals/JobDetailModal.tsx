import { useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";
import {
  Animated,
  View,
  Pressable,
  Button,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function JobDetailModal({ navigation, route }) {
  const { width, height } = useWindowDimensions();
  const { current } = useCardAnimation();
  const { colors } = useTheme();
  // job detail id
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: width,
          height: height / 1.2,
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.card,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Button
          title="Okay"
          color={colors.primary}
          onPress={navigation.goBack}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

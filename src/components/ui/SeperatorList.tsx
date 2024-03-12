import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

export default function SeperatorList() {
  const { colors } = useTheme();
  return <View style={{ borderWidth: 0.3, borderColor: colors.border }}></View>;
}

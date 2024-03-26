import { HomeNavigationProp } from "@/types/navigation";
import { useNavigation, useTheme } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CardHeader({title,nav}) {
    const { navigate } = useNavigation<HomeNavigationProp>();
    const { colors } = useTheme();

    return(
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.seeAllWrapper}
          onPress={() => navigate(nav)}
        >
          <Text style={{ color: colors.primary, fontWeight: "700" }}>
            SEE ALL
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color="#334AC0"
          />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "500",
    },
    seeAllWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
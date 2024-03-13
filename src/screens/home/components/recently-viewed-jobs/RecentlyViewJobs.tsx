import { useAppSelector } from "@/hooks/redux";
import RecentlyViewJobCard from "@/screens/recentlyViewJobs/components/RecentlyViewJobCard";
import { HomeNavigationProp } from "@/types/navigation";
import { useNavigation, useTheme } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function RecentlyViewJobs() {
  const jobs = useAppSelector(
    (state) => state.jobsWithCompany.recentlyViewJobs
  ).slice(0, 3);
  const { colors } = useTheme();
  const { navigate } = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recently View Jobs</Text>
        <TouchableOpacity
          style={styles.seeAllWrapper}
          onPress={() => navigate("RecentlyViewJobs")}
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
      <View>
        {jobs.length === 0 ? (
          <Text style={{ fontSize: 14, fontWeight: "300" }}>
            No recently view job!
          </Text>
        ) : (
          jobs.map((job, _) => <RecentlyViewJobCard key={job.id} {...job} />)
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
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

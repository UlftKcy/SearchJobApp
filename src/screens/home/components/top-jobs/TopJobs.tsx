import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Fragment, useEffect } from "react";
import { JobType } from "@/types";
import JobCard from "./JobCard";
import { useNavigation, useTheme } from "@react-navigation/native";
import { HomeNavigationProp } from "@/types/navigation";
import { getJobsWithCompany } from "@/features/jobs/jobsWithCompanySlice";

export default function TopJobs() {
  const jobs = useAppSelector(
    (state) => state.jobsWithCompany.jobsWithCompany.jobs
  ).slice(0, 10);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<HomeNavigationProp>();
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(getJobsWithCompany(1));
  }, [dispatch]);

  return (
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Your Daily Top Jobs</Text>
        <TouchableOpacity
          style={styles.seeAllWrapper}
          onPress={() => navigate("DailyTopJobs")}
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
      <FlatList
        data={jobs}
        renderItem={({ item }: { item: JobType }) => <JobCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={3}
        horizontal={true}
      />
    </Fragment>
  );
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

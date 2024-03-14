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
import SkeletonLargeJobCard from "@/components/ui/SkeletonLargeJobCard";

export default function TopJobs() {
  const { loading, jobsWithCompany } = useAppSelector(
    (state) => state.jobsWithCompany
  );
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
      {
        loading ? (
          <FlatList
          data={Array.from({ length: 10 })}
          renderItem={() => <SkeletonLargeJobCard />}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        ):(
          <FlatList
          data={jobsWithCompany.jobs.slice(0, 10)}
          renderItem={({ item }: { item: JobType }) => <JobCard {...item} />}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        )
      }
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

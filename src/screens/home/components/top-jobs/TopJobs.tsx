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
import { getJobs } from "@/features/jobs/jobSlice";
import { JobType } from "@/types";
import JobCard from "./JobCard";
import { useNavigation } from "@react-navigation/native";
import { ApplicationNavigationProps } from "@/types/navigation";

export default function TopJobs() {
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<ApplicationNavigationProps>();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Your Daily Top Jobs</Text>
        <TouchableOpacity
          style={styles.seeAllWrapper}
          onPress={() => navigate("DailyTopJobs")}
        >
          <Text style={styles.seeAll}>SEE ALL</Text>
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
        keyExtractor={(item) => item.id}
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
  seeAll: {
    color: "#334AC0",
    fontWeight: "700",
  },
});

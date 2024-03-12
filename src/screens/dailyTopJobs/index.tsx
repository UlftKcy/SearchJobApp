import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { getJobsWithCompany } from "@/features/jobs/jobsWithCompanySlice";

export default function DailyTopJobsPage() {
  const {jobs,page} = useAppSelector((state) => state.jobsWithCompany.jobsWithCompany);
  const dispatch = useAppDispatch();

  const loadJobsAndCompanies = () => {
    dispatch(getJobsWithCompany(page));
  }

  useEffect(() => {
    loadJobsAndCompanies();
  }, []);

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => <JobCardWithCompany {...item} />}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      ListFooterComponent={<View><Text>Loading...</Text></View>}
      onEndReachedThreshold={0.5}
      onEndReached={loadJobsAndCompanies}
      contentContainerStyle={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: "#ddd",
    marginVertical:10,
  },
});
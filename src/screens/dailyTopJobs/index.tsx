import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DailyTopJobsCard from "./components/DailyTopJobsCard";
import { getJobsAndCompanies } from "@/features/jobs/jobsAndCompaniesSlice";

export default function DailyTopJobsPage() {
  const {jobs,page} = useAppSelector((state) => state.jobsAndCompanies.jobsAndCompanies);
  const dispatch = useAppDispatch();

  const loadJobsAndCompanies = () => {
    dispatch(getJobsAndCompanies(page));
  }

  useEffect(() => {
    loadJobsAndCompanies();
  }, []);

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => <DailyTopJobsCard {...item} />}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      ListFooterComponent={<View><Text>Loading...</Text></View>}
      onEndReachedThreshold={0.5}
      onEndReached={loadJobsAndCompanies}
    />
  );
}
const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.5,
    borderColor: "#ddd",
  },
});
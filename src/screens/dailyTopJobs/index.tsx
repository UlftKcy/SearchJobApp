import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DailyTopJobsCard from "./components/DailyTopJobsCard";
import { getJobsAndCompanies } from "@/features/jobs/jobsAndCompaniesSlice";

export default function DailyTopJobsPage() {
  const jobsAndCompanies = useAppSelector((state) => state.jobsAndCompanies.jobsAndCompanies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getJobsAndCompanies(page));
  }, [dispatch]);

  const loadJobsAndCompanies = () => {
    setPage(prevPage => prevPage + 1);
    dispatch(getJobsAndCompanies(page+1));
  }

  return (
    <FlatList
      data={jobsAndCompanies}
      renderItem={({ item }) => <DailyTopJobsCard {...item} />}
      keyExtractor={(item, _) => item.id}
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
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DailyTopJobsCard from "./components/DailyTopJobsCard";
import { getJobsAndCompanies } from "@/features/jobs/jobsAndCompaniesSlice";

export default function DailyTopJobsPage() {
  const jobsAndCompanies = useAppSelector((state) => state.jobsAndCompanies.jobsAndCompanies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobsAndCompanies(1));
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={jobsAndCompanies}
        renderItem={({ item }) => <DailyTopJobsCard {...item}/>}
        keyExtractor={(item,index)=>item.id}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.5,
    borderColor: "#ddd",
  },
});
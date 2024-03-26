import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { getJobsWithCompany } from "@/features/jobs/jobsWithCompanySlice";
import SeperatorList from "@/components/ui/SeperatorList";
import { useTheme } from "@react-navigation/native";

export default function DailyTopJobsPage() {
  const {jobs,page} = useAppSelector((state) => state.jobsWithCompany.jobsWithCompany);
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

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
      ItemSeparatorComponent={() => <SeperatorList/>}
      ListFooterComponent={<ActivityIndicator size="large" color={colors.primary}/>}
      onEndReachedThreshold={0.5}
      onEndReached={loadJobsAndCompanies}
      contentContainerStyle={{backgroundColor:colors.background}}
    />
  );
}

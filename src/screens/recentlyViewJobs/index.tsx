import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RecentlyViewJobCard from "@/components/recently-view-jobs/RecentlyViewJobCard";
import { useEffect } from "react";
import { removeAllRecentlyViewJobs } from "@/features/jobs/jobsWithCompanySlice";

export default function RecentlyViewJobsPage({ navigation }) {
  const jobs = useAppSelector(
    (state) => state.jobsWithCompany.recentlyViewJobs
  );
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => dispatch(removeAllRecentlyViewJobs())}
          style={{ marginRight: 16 }}
        >
          <Text style={{ color: colors.primary }}>Clear All</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
      }}
    >
      {jobs.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16 }}>No recently view job!</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {jobs.map((job, _) => (
            <RecentlyViewJobCard key={job.id} {...job} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

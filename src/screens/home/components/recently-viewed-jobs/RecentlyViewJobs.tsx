import CardHeader from "@/components/home/CardHeader";
import RecentlyViewJobCard from "@/components/recently-view-jobs/RecentlyViewJobCard";
import { useAppSelector } from "@/hooks/redux";
import { Text, View } from "react-native";

export default function RecentlyViewJobs() {
  const jobs = useAppSelector(
    (state) => state.jobsWithCompany.recentlyViewJobs
  ).slice(0, 3);

  return (
    <View style={{ marginBottom: 24 }}>
      <CardHeader title="Recently View Jobs" nav="RecentlyViewJobs" />
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

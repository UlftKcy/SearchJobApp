import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FlatList } from "react-native";
import { JobType } from "@/types";
import JobCard from "./JobCard";
import { getJobsWithCompany } from "@/features/jobs/jobsWithCompanySlice";
import SkeletonLargeJobCard from "@/components/ui/SkeletonLargeJobCard";
import CardHeader from "@/components/home/CardHeader";

export default function TopJobs() {
  const { loading, jobsWithCompany } = useAppSelector(
    (state) => state.jobsWithCompany
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobsWithCompany(1));
  }, [dispatch]);

  return (
    <Fragment>
      <CardHeader title="Your Daily Top Jobs" nav="DailyTopJobs" />
      {loading ? (
        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={() => <SkeletonLargeJobCard />}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={jobsWithCompany.jobs.slice(0, 10)}
          renderItem={({ item }: { item: JobType }) => <JobCard {...item} />}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Fragment>
  );
}

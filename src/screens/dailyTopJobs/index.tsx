import { getAllJobs } from "@/features/jobs/allJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import DailyTopJobsCard from "./components/DailyTopJobsCard";

export default function DailyTopJobsPage() {
  const allJobs = useAppSelector((state) => state.allJobs.allJobs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJobs(1));
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={allJobs}
        renderItem={({ item }) => <DailyTopJobsCard {...item}/>}
        keyExtractor={(item,index)=>item.id}
      />
    </View>
  );
}

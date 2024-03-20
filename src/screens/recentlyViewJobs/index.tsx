import { useAppSelector } from "@/hooks/redux";
import { ScrollView, Text, View } from "react-native";
import RecentlyViewJobCard from "./components/RecentlyViewJobCard";
import { useTheme } from "@react-navigation/native";

export default function RecentlyViewJobsPage() {
    const jobs = useAppSelector(state=>state.jobsWithCompany.recentlyViewJobs);
    const {colors} = useTheme();
    
    return(
        <View style={{flex: 1,backgroundColor:colors.background,paddingHorizontal:16}}>
        {
            jobs.length === 0 ? (
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:16}}>No recently view job!</Text>
                </View>
            ):(
                <ScrollView showsVerticalScrollIndicator={false}>
                {jobs.map((job, _) => (
                    <RecentlyViewJobCard key={job.id} {...job} />
                ))}
            </ScrollView>
            )
        }
    </View>
    )
}
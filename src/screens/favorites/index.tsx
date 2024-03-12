import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { useAppSelector } from "@/hooks/redux";
import { ScrollView, Text, View } from "react-native";

export default function Favorites() {
    const favoriteJobs = useAppSelector(state => state.jobsWithCompany.favoriteJobs);

    return (
        <View style={{flex: 1,backgroundColor:"#ffff"}}>
            {
                favoriteJobs.length === 0 ? (
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:16}}>No favorite job!</Text>
                    </View>
                ):(
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {favoriteJobs.map((job, _) => (
                        <JobCardWithCompany key={job.id} {...job} />
                    ))}
                </ScrollView>
                )
            }
        </View>
    );
}

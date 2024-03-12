import { useAppSelector } from "@/hooks/redux";
import { ScrollView, Text, View } from "react-native";
import AppliedJobCard from "./components/AppliedJobCard";
import { useTheme } from "@react-navigation/native";

export default function MyJobs() {
    const jobs = useAppSelector(state => state.jobsWithCompany.appliedJobs);
    const {colors} = useTheme();

    return (
        <View style={{flex: 1,backgroundColor:colors.background}}>
            {
                jobs.length === 0 ? (
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:16}}>No applied job!</Text>
                    </View>
                ):(
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {jobs.map((job, _) => (
                        <AppliedJobCard key={job.id} {...job} />
                    ))}
                </ScrollView>
                )
            }
        </View>
    );
}

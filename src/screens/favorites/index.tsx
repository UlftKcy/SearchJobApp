import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";
import { removeAllFavoriteJobs } from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Favorites({navigation}) {
    const favoriteJobs = useAppSelector(state => state.jobsWithCompany.favoriteJobs);
    const dispatch = useAppDispatch();
    const {colors} = useTheme();

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(removeAllFavoriteJobs())}
              style={{ marginRight: 16 }}
            >
              <Text style={{ color: colors.primary }}>Clear All</Text>
            </TouchableOpacity>
          ),
        });
      }, []);

    return (
        <View style={{flex: 1,backgroundColor:colors.background}}>
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

import { removeJob } from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch } from "@/hooks/redux";
import { JobsWithCompany } from "@/types";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function AppliedJobCard(job: JobsWithCompany) {
    const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.job}>
        <Image
          source={{ uri: job.companyDetail.refs.logo_image }}
          width={Dimensions.get("window").width / 8}
          height={Dimensions.get("window").width / 8}
          resizeMode="center"
          alt={job.company.name}
          style={styles.image}
        />
        <View style={styles.jobDetail}>
          <Text style={styles.company}>{job.company.name}</Text>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{job.name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>dispatch(removeJob(job.id))}><MaterialIcons name="close" size={20} color="#4966F7" /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"#ffff",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingHorizontal:16,
    marginBottom:10,
  },
  job: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobDetail: {
    flexDirection: "column",
    width:Dimensions.get("window").width/2,
  },
  image: {
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    color: "#2B2A35",
    fontSize: 16,
    fontWeight: "600",
  },
  company: { fontWeight: "400" },
});

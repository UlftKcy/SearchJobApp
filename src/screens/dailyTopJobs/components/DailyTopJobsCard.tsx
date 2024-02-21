import { JobsAndCompanies } from "@/types";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function DailyTopJobsCard(job: JobsAndCompanies) {
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
      <MaterialIcons name="favorite-outline" size={20} color="#4966F7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor:"#ffff",
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

import { removeJob } from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch } from "@/hooks/redux";
import { JobsWithCompany } from "@/types";
import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.job}>
        <Image
          source={{ uri: job.companyDetail.refs.logo_image }}
          width={Dimensions.get("window").width / 6}
          height={Dimensions.get("window").width / 6}
          resizeMode="center"
          alt={job.company.name}
          style={styles.image}
        />
        <View style={styles.jobDetail}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
            {job.name}
          </Text>
          <Text style={styles.company}>{job.company.name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeJob(job.id))}>
        <MaterialIcons name="close" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderTopWidth: 0.5,
    borderColor: "rgb(199, 199, 204)",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  job: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobDetail: {
    flexDirection: "column",
    width: Dimensions.get("window").width / 2,
  },
  image: {
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    color: "#2B2A35",
    fontSize: 16,
    fontWeight: "600",
    textTransform:"capitalize",
    marginBottom:3,
  },
  company: { fontWeight: "400", fontSize: 14, },
});

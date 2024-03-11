import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMemo } from "react";
import { JobLocation, JobType } from "@/types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import { ModalNavigationProp } from "@/types/navigation";

export default function JobCard(job: JobType) {
  const jobLocation = useMemo(() => {
    return job.locations.map((location: JobLocation) => location.name);
  }, [job.locations]);
  const {navigate} = useNavigation<ModalNavigationProp>();

  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigate("JobDetailModal",{id:job.id})}>
      <View style={styles.cardHeader}>
        <View style={styles.location}>
          <EvilIcons name="location" size={16} color="#ffff" />
          <Text style={styles.locationText}>{jobLocation ?? "--"}</Text>
        </View>
        <MaterialIcons name="favorite-outline" size={20} color="#ffff" />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.jobName} numberOfLines={2} ellipsizeMode="tail">
          {job.name}
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.companyName}>{job.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 1.3,
    height: 180,
    backgroundColor: "#4966F7",
    padding: 20,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#ffff",
    marginLeft: 3,
    fontSize: 16,
  },
  cardBody: {
    flexDirection: "column",
    width: "75%",
  },
  jobName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffff",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  /*   jobDetail: {
      flexDirection: "column",
    },
    jobDetailItem: {
      color: "#ffff",
      fontWeight: "300",
    }, */
  cardFooter: {},
  companyName: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1,
  },
});

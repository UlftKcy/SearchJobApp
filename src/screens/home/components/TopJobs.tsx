import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect } from "react";
import { getJobs } from "@/features/jobs/jobSlice";

function JobCard({item}) {
    console.log(item)
    return(
        <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.location}>
            <EvilIcons name="location" size={16} color="#ffff" />
            <Text style={styles.locationText}>Kentucky, KY</Text>
          </View>
          <MaterialIcons name="favorite-outline" size={20} color="#ffff" />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.jobName}>Software Developer</Text>
          <View style={styles.jobDetail}>
            <Text style={styles.jobDetailItem}>$ 25K - 40K</Text>
            <Text style={styles.jobDetailItem}>Part Time</Text>
            <Text style={styles.jobDetailItem}>Remotely</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.companyName}>Company Name</Text>
        </View>
      </View>
    )
}

export default function TopJobs() {
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getJobs())
  },[dispatch])

  
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Your Daily Top Jobs</Text>
        <TouchableOpacity style={styles.seeAllWrapper}>
          <Text style={styles.seeAll}>SEE ALL</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color="#334AC0"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={jobs}
        renderItem={({item})=><JobCard item={item}/>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  seeAllWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAll: {
    color: "#334AC0",
    fontWeight: "700",
  },

  // job card

  card: {
    width: "87%",
    height: 180,
    backgroundColor: "#4966F7",
    padding: 20,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "space-between",
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
  jobDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobDetailItem: {
    color: "#ffff",
    fontWeight: "300",
  },
  cardFooter: {},
  companyName: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1,
  },
});

import {
  addFavorite,
  removeFavorite,
} from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { JobsWithCompany } from "@/types";
import { ModalNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function JobCardWithCompany(job: JobsWithCompany) {
  const selectedJob = job;
  const { navigate } = useNavigation<ModalNavigationProp>();

  const favoriteJobs = useAppSelector(
    (state) => state.jobsWithCompany.favoriteJobs
  );
  const isFavoriteJob = favoriteJobs.find(
    (favoriteJob) => favoriteJob.id === job.id
  )
    ? true
    : false;
  const dispatch = useAppDispatch();

  const onFavoriteJob = () => {
    isFavoriteJob
      ? dispatch(removeFavorite(job.id))
      : dispatch(addFavorite(job));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("JobDetailModal", { selectedJob: job })}
    >
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
      <TouchableOpacity onPress={onFavoriteJob}>
        <MaterialIcons
          name={`${isFavoriteJob ? "favorite" : "favorite-outline"}`}
          size={24}
          color="#4966F7"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
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

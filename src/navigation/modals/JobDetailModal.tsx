import {
  addFavorite,
  addRecentlyViewJobs,
  applyJob,
  removeFavorite,
} from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handleJobLocation } from "@/utils/jobLocation";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import RenderHtml from "react-native-render-html";
import Toast from "react-native-toast-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function JobDetailModal({ navigation, route }) {
  const { selectedJob } = route.params;
  const dispatch = useAppDispatch();
  const favoriteJobs = useAppSelector(
    (state) => state.jobsWithCompany.favoriteJobs
  );
  // check favorite job
  const isFavoriteJob = favoriteJobs.find(
    (favoriteJob) => favoriteJob.id === selectedJob.id
  );

  // check applied job

  const appliedJobs = useAppSelector(
    (state) => state.jobsWithCompany.appliedJobs
  );
  const isApplyJob = appliedJobs.find(
    (applyJob) => applyJob.id === selectedJob.id
  );

  const jobLocation = handleJobLocation(selectedJob);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="close" size={24} color={colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <MaterialIcons
          name={`${isFavoriteJob ? "favorite" : "favorite-outline"}`}
          size={24}
          color={colors.primary}
          onPress={onFavoriteJob}
        />
      ),
      headerStyle: {
        height: 100,
      },
      headerTitle: "",
    });

    // add recently view jobs
    dispatch(addRecentlyViewJobs(selectedJob));

  });

  // job detail converts
  const source = {
    html: `
    ${selectedJob.contents}`,
  };

  const onSubmit = () => {
    dispatch(applyJob(selectedJob));
    navigation.goBack();
    Toast.show({
      type: "success",
      text1: "Congratulations",
      text2: `Your application was sent to ${selectedJob.company.name}`,
      onPress: () => Toast.hide(),
    });
  };

  const onFavoriteJob = () => {
    isFavoriteJob
      ? dispatch(removeFavorite(selectedJob.id))
      : dispatch(addFavorite(selectedJob));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text style={styles.jobName}>{selectedJob.name}</Text>
        <View style={styles.companyContainer}>
          <Image
            source={{ uri: selectedJob.companyDetail.refs.logo_image }}
            width={Dimensions.get("window").width / 6}
            height={Dimensions.get("window").width / 6}
            resizeMode="center"
            alt={selectedJob.company.name}
            style={styles.image}
          />
          <View style={styles.companyDetail}>
            <Text style={styles.companyName}>{selectedJob.company.name}</Text>
            <Text
              style={styles.companyLocation}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {jobLocation ?? "--"}
            </Text>
          </View>
        </View>
        <RenderHtml contentWidth={width} source={source} />
      </ScrollView>
      {isApplyJob === undefined && (
        <TouchableOpacity style={styles.applyButton} onPress={onSubmit}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffff",
  },
  jobName: {
    fontSize: 22,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  companyDetail: {
    flexDirection: "column",
    width: Dimensions.get("window").width / 2,
  },
  image: {
    borderRadius: 8,
    marginRight: 12,
  },
  companyName: {
    color: "#2B2A35",
    fontSize: 16,
    fontWeight: "600",
  },
  companyLocation: { fontWeight: "400" },
  applyButton: {
    backgroundColor: "#4966F7",
    padding: 14,
    borderRadius: 24,
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  applyButtonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

import { applyJob } from "@/features/jobs/jobsWithCompanySlice";
import { useAppDispatch } from "@/hooks/redux";
import { JobLocation } from "@/types";
import { useMemo } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import RenderHtml from "react-native-render-html";
import Toast from 'react-native-toast-message';

export default function JobDetailModal({ navigation, route }) {
  const { selectedJob } = route.params;
  const jobLocation = useMemo(() => {
    return selectedJob.locations.map((location: JobLocation) => location.name);
  }, [selectedJob.locations]);
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();

  const source = {
    html: `
    ${selectedJob.contents}`,
  };

  const onSubmit = () => {
    dispatch(applyJob(selectedJob));
    navigation.goBack();
    Toast.show({
      type: 'success',
      text1: 'Congratulations',
      text2: `Your application was sent to ${selectedJob.company.name}`,
      onPress:()=>Toast.hide(),
    });
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
      <TouchableOpacity style={styles.applyButton} onPress={onSubmit}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
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

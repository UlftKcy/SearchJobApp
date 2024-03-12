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
} from "react-native";
import RenderHtml from 'react-native-render-html';

export default function JobDetailModal({ navigation, route }) {
  const { selectedJob } = route.params;
  const jobLocation = useMemo(() => {
    return selectedJob.locations.map((location: JobLocation) => location.name);
  }, [selectedJob.locations]);
  const { width } = useWindowDimensions();

  const source = {
    html: `
    ${selectedJob.contents}`
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
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
      <View style={styles.content}>
      <RenderHtml
      contentWidth={width}
      source={source}
    />
      </View>
    </ScrollView>
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
  content:{

  }
});

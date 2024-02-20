import { JobType } from "@/types";
import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function DailyTopJobsCard(job:JobType) {
    return(
        <View style={styles.container}>
        <View style={styles.job}>
          <Image
            // source={{ uri: company.refs.logo_image }}
            width={Dimensions.get("window").width / 8}
            height={Dimensions.get("window").width / 8}
            resizeMode="center"
            //alt={company.name}
            style={styles.image}
          />
          <View style={styles.jobDetail}>
            <Text style={styles.name}>{/* {company.name} */}</Text>
            {/* <Text style={styles.industry}>{companyIndustry[0]}</Text> */}
          </View>
        </View>
        <Button title="Apply" color="#4966F7" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: 5,
    },
    job: {
      flexDirection: "row",
      alignItems: "center",
    },
    jobDetail: {
      flexDirection: "column",
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
    industry: { fontWeight: "300" },
    button: {},
  });
  
import { CompanyType } from "@/types";
import { companyIndustryNames } from "@/utils/companyIndustryNames";
import { companyLocationNames } from "@/utils/companyLocationNames";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function CompanyHeader(currentCompany: CompanyType) {
  // get company industries name
  const companyIndustry = companyIndustryNames(currentCompany);

  // get company locations name
  const companyLocation = companyLocationNames(currentCompany);
  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: currentCompany.refs.logo_image }}
          width={Dimensions.get("window").width / 6}
          height={Dimensions.get("window").width / 6}
          resizeMode="center"
          alt={currentCompany.name}
          style={styles.image}
        />
      </View>
      <View style={styles.companyDetail}>
        <Text style={styles.companyName}>{currentCompany.name}</Text>
        <Text style={styles.industry}>{companyIndustry[0]}</Text>
        <Text style={styles.industry}>{companyLocation[0]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  companyDetail: {
    flexDirection: "column",
  },
  companyName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 3,
  },
  industry: { fontWeight: "400", fontSize: 14, marginBottom: 3 },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginRight: 12,
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 6,
  },
});

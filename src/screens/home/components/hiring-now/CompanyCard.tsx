import { CompanyIndustry, CompanyType } from "@/types";
import { useMemo } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CompanyCard(company: CompanyType) {
  const companyIndustry = useMemo(() => {
    return company.industries.map((industry: CompanyIndustry) => industry.name);
  }, [company.industries]);

  return (
    <View style={styles.container}>
      <View style={styles.company}>
        <Image
          source={{ uri: company.refs.logo_image }}
          width={Dimensions.get("window").width / 8}
          height={Dimensions.get("window").width / 8}
          resizeMode="center"
          alt={company.name}
          style={styles.image}
        />
        <View style={styles.companyDetail}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{company.name}</Text>
          <Text style={styles.industry}>{companyIndustry[0]}</Text>
        </View>
      </View>
      <Button title="Apply" color="#4966F7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  company: {
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
  name: {
    color: "#2B2A35",
    fontSize: 16,
    fontWeight: "600",
    textTransform:"capitalize",
    marginBottom:3,
  },
  industry: { fontWeight: "400", fontSize: 14,},
});

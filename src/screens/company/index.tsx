import { Text, View } from "react-native";

export default function CompanyPage({ route }) {
  const { companyID } = route.params;

  return (
    <View>
      <Text>CompanyPage</Text>
    </View>
  );
}

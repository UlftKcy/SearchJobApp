import { getCompanies } from "@/features/companies/companySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { CompanyType } from "@/types";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CompanyCard from "./CompanyCard";

export default function HiringNow() {
  const companies = useAppSelector((state) => state.companies.companies).slice(0,3);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Hiring Now</Text>
        <TouchableOpacity style={styles.moreWrapper}>
          <Text style={styles.more}>MORE</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color="#334AC0"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={companies}
        renderItem={({ item }: { item: CompanyType }) => <CompanyCard {...item}/>}
        keyExtractor={(item) => String(item.id)}
        initialNumToRender={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
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
  moreWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  more: {
    color: "#334AC0",
    fontWeight: "700",
  },
});

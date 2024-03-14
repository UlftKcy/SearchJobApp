import { getCompanies } from "@/features/companies/companySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { CompanyType } from "@/types";
import { Fragment, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CompanyCard from "./CompanyCard";
import { useTheme } from "@react-navigation/native";
import SeperatorList from "@/components/ui/SeperatorList";
import SkeletonSmallJobCard from "@/components/ui/SkeletonSmallJobCard";

export default function HiringNow() {
  const {loading,companies} = useAppSelector((state) => state.companies);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);


  return (
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Hiring Now</Text>
        <TouchableOpacity style={styles.moreWrapper}>
          <Text style={{ color: colors.primary, fontWeight: "700" }}>MORE</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color="#334AC0"
          />
        </TouchableOpacity>
      </View>
      {
        loading ? (
          <FlatList
          data={Array.from({ length: 3 })}
          renderItem={() => <SkeletonSmallJobCard />}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={3}
          ItemSeparatorComponent={() => <SeperatorList/>}
        />
        ):( <FlatList
          data={companies.slice(0,3)}
          renderItem={({ item }: { item: CompanyType }) => (
            <CompanyCard {...item} />
          )}
          keyExtractor={(item) => String(item.id)}
          initialNumToRender={3}
          ItemSeparatorComponent={() => <SeperatorList/>}
        />)
}
     
    </Fragment>
  );
}

const styles = StyleSheet.create({
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
});

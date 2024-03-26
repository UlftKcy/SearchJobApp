import CompanyCard from "@/components/hiring-now/CompanyCard";
import SeperatorList from "@/components/ui/SeperatorList";
import { getCompanies } from "@/features/companies/companySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

export default function HiringNowPage() {
    const {companies,page} = useAppSelector((state) => state.companies.companiesByPage);
    const dispatch = useAppDispatch();
    const {colors} = useTheme();
  
    const loadJobsAndCompanies = () => {
      dispatch(getCompanies(page));
    }
  
    useEffect(() => {
      loadJobsAndCompanies();
    }, []);
  
    return (
      <FlatList
        data={companies}
        renderItem={({ item }) => <CompanyCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <SeperatorList/>}
        ListFooterComponent={<ActivityIndicator size="large" color={colors.primary}/>}
        onEndReachedThreshold={0.5}
        onEndReached={loadJobsAndCompanies}
        contentContainerStyle={{backgroundColor:colors.background,paddingHorizontal:16}}
      />
    );
}
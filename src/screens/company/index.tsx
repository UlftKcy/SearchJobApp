import { useAppSelector } from "@/hooks/redux";
import { useTheme } from "@react-navigation/native";
import { FlatList } from "react-native";
import CompanyHeader from "./components/CompanyHeader";
import JobCardWithCompany from "@/components/jobs/JobCardWithCompany";

export default function CompanyPage({ route }) {
  const { companyId } = route.params;
  const { colors } = useTheme();
  const companies = useAppSelector(
    (state) => state.companies.companiesByPage.companies
  );
  const jobs = useAppSelector(
    (state) => state.jobsWithCompany.jobsWithCompany.jobs
  );

  const currentCompany = companies.find((company) => company.id === companyId);

  // get jobs by company
  const jobsByCurrentCompany = jobs.filter(
    (job) => job.company.id === currentCompany.id
  );

  return (
    <FlatList
      data={jobsByCurrentCompany}
      renderItem={({ item }) => <JobCardWithCompany {...item} />}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={<CompanyHeader {...currentCompany} />}
      contentContainerStyle={{
        flex: 1,
        padding: 16,
        backgroundColor: colors.background,
      }}
    />
  );
}

import { Fragment, useEffect } from "react";
import { getCompanies } from "@/features/companies/companySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FlatList } from "react-native";
import { CompanyType } from "@/types";
import CompanyCard from "./CompanyCard";
import SeperatorList from "@/components/ui/SeperatorList";
import SkeletonSmallJobCard from "@/components/ui/SkeletonSmallJobCard";
import CardHeader from "@/components/home/CardHeader";

export default function HiringNow() {
  const { loading, companies } = useAppSelector((state) => state.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <Fragment>
      <CardHeader title="Hiring Now" nav="HiringNow" />
      {loading ? (
        <FlatList
          data={Array.from({ length: 3 })}
          renderItem={() => <SkeletonSmallJobCard />}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={3}
          ItemSeparatorComponent={() => <SeperatorList />}
        />
      ) : (
        <FlatList
          data={companies.slice(0, 3)}
          renderItem={({ item }: { item: CompanyType }) => (
            <CompanyCard {...item} />
          )}
          keyExtractor={(item) => String(item.id)}
          initialNumToRender={3}
          ItemSeparatorComponent={() => <SeperatorList />}
        />
      )}
    </Fragment>
  );
}

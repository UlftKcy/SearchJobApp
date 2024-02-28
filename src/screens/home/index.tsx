import { FlatList, Text, View } from "react-native";
import TopJobs from "./components/top-jobs/TopJobs";
import HiringNow from "./components/hiring-now/HiringNow";
import RecentlyViewJobs from "./components/recently-viewed-jobs/RecentlyViewJobs";

type SectionType = {
  type: string;
};

export default function Home() {
  const sections = [
    { type: "topJobs" },
    { type: "hiringNow" },
    { type: "recentlyViewJobs" },
  ] as SectionType[];

  const renderSection = (item: SectionType) => {
    const { type } = item;

    switch (type) {
      case "topJobs":
        return <TopJobs />;
      case "hiringNow":
        return <HiringNow />;
      case "recentlyViewJobs":
        return <RecentlyViewJobs />;
      default:
        return (
          <View>
            <Text>No Section</Text>
          </View>
        );
    }
  };

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => renderSection(item)}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#ffff" }}
      ItemSeparatorComponent={()=><View style={{marginBottom:20}}></View>}
    />
  );
}

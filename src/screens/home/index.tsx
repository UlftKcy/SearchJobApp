import { FlatList, Text, View } from "react-native";
import TopJobs from "./components/top-jobs/TopJobs";
import HiringNow from "./components/hiring-now/HiringNow";
import RecentlyViewJobs from "./components/recently-viewed-jobs/RecentlyViewJobs";
import { useTheme } from "@react-navigation/native";
import SeperatorSection from "@/components/ui/SeperatorSection";

type SectionType = {
  type: string;
};

export default function Home() {
  const { colors } = useTheme();

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
      contentContainerStyle={{ padding: 16, backgroundColor: colors.background }}
      ItemSeparatorComponent={()=><SeperatorSection/>}
    />
  );
}

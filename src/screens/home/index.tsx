import { FlatList, Text, View } from "react-native";
import TopJobs from "./components/top-jobs/TopJobs";
import HiringNow from "./components/hiring-now/HiringNow";

type SectionType = {
  type: string;
};

export default function Home() {
  const sections = [
    { type: "topJobs" },
    { type: "hiringNow" },
  ] as SectionType[];

  const renderSection = (item: SectionType) => {
    const { type } = item;

    switch (type) {
      case "topJobs":
        return <TopJobs />;
      case "hiringNow":
        return <HiringNow />;
      default:
        return <View><Text>No Section</Text></View>
    }
  };

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => renderSection(item)}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex:1, padding: 16, backgroundColor: "#ffff" }}
    />
  );
}

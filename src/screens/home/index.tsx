import { StyleSheet, Text, View } from "react-native";
import TopJobs from "./components/top-jobs/TopJobs";
import HiringNow from "./components/hiring-now/HiringNow";

export default function Home() {
    return (
      <View style={styles.container}>
        <TopJobs/>
        <HiringNow/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:16,
    }
})
import { StyleSheet, Text, View } from "react-native";
import TopJobs from "./components/top-jobs/TopJobs";

export default function Home() {
    return (
      <View style={styles.container}>
        <TopJobs/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:16,
    }
})
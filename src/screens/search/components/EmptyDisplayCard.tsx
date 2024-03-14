import { StyleSheet, Text, View } from "react-native";

export default function EmptyDisplayCard() {
    return(
        <View style={{paddingHorizontal:16}}>
          <Text style={styles.notFound}>Not found jobs!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notFound: {
      fontSize: 18,
      fontWeight:"400"
    },
  });
  
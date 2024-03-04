import RadioButton from "@/components/ui/RadioButton";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const options: string[] = ["Jobs", "Companies"];

export default function ModalFilter() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onSelect = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Filter By</Text>
          {options.map((option, index) => (
            <RadioButton
              key={index}
              option={option}
              selectedOption={selectedOption}
              onSelect={onSelect}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    padding: 16,
  },
  title: {
    fontSize: 16,
    marginBottom:20,
    fontWeight:"600"
  },
});

import RadioButton from "@/components/ui/RadioButton";
import { getCategories } from "@/features/jobs/jobSlice";
import { getJobsAndCompanies } from "@/features/jobs/jobsAndCompaniesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const options: string[] = ["Jobs", "Companies"];

export default function ModalFilter() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const { navigate } = useNavigation<SearchNavigationProp>();
  const dispatch = useAppDispatch();

  const onSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleFilter = async ()=>{
    dispatch(getCategories())
    navigate("ModalCategory");
  }

  return (
    <ScrollView style={styles.container}>
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
      <View>
        <Text style={styles.title}>Category</Text>
        <TouchableOpacity
          onPress={handleFilter}
          style={styles.categoryButton}
        >
          <Text style={styles.categoryTitle}>Select Category</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "600",
  },
  categoryButton: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DDDFE5",
    borderRadius: 24,
    padding: 14,
  },
  categoryTitle: {
    fontSize: 14,
  },
});

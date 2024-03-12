import RadioButton from "@/components/ui/RadioButton";
import { selectCategory } from "@/features/search/filterByJobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Category() {
  const categories = useAppSelector(
    (state) => state.jobsWithCompany.categories
  );
  const category = useAppSelector(
    (state) => state.filterByJob.selectedCategory
  );
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const navigation = useNavigation<SearchNavigationProp>();

  const onSelect = (option: any) => {
    setSelectedCategory(option);
    navigation.goBack();

    dispatch(selectCategory(option));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 16, backgroundColor: "#ffff" }}
    >
      {categories.map((category, index) => (
        <>
          <RadioButton
            key={index.toString()}
            option={category}
            selectedOption={selectedCategory}
            onSelect={onSelect}
          />
        </>
      ))}
    </ScrollView>
  );
}

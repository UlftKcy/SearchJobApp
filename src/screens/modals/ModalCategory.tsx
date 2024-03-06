import RadioButton from "@/components/ui/RadioButton";
import { selectCategory } from "@/features/jobs/jobSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SearchNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";

export default function ModalCategory() {
  const categories = useAppSelector((state) => state.jobs.categories);
  const category = useAppSelector((state) => state.jobs.selectedCategory);
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const navigation = useNavigation<SearchNavigationProp>();

  const onSelect = (option: any) => {
    setSelectedCategory(option);
    navigation.goBack();

    dispatch(selectCategory(option))
  };

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <RadioButton
          option={item}
          selectedOption={selectedCategory}
          onSelect={onSelect}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ flex: 1, padding: 16, backgroundColor: "#ffff" }}
    />
  );
}

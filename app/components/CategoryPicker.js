// CategoryPicker.js

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";

const CategoryPicker = ({ items, onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (itemValue) => {
    console.log("handleCategoryChange called with", itemValue);
    setSelectedCategory(itemValue);
    onSelectItem(itemValue);
  };

  return (
    <Select style={styles.input}>
      <SelectTrigger>
        <SelectInput
          style={styles.input}
          placeholder="Category"
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange}
        />
        <SelectIcon mr="$3">
          <Icon as={Entypo} name="chevron-down" size={15} color="black" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {/* <SelectItem label="Beverages" value="Beverages" />
          <SelectItem label="Dairy" value="Dairy" />
          <SelectItem label="Fruits" value="Fruits" />
          <SelectItem label="Grains" value="Grains" />
          <SelectItem label="Meats" value="Meats" />
          <SelectItem label="Miscellaneous" value="Miscellaneous" />
          <SelectItem label="Veggies" value="Veggies" /> */}
            {items.map((item) => (
            <SelectItem key={item.value} label={item.label} value={item.value}  onSelect={() => {
              console.log('SelectItem onSelect called with:', item.value);
              handleCategoryChange(item.value);
            }}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 10,
    borderColor: "white",
    borderRadius: 15,
  },
});

export default CategoryPicker;

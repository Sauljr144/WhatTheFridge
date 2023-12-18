
import React, { useState, useRef } from "react";
import {StyleSheet} from "react-native";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  Text,
  ModalFooter,
  Button,
  ButtonText,
  ScrollView,
  Center,
  View,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Input,
  InputField,
  Select,
  SelectIcon,
  SelectTrigger,
  SelectInput,
  SelectItem,
  VStack,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectPortal,
  SelectBackdrop,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";

const CategoryPicker = ({onSelectItem}) => {
const [selectedCategory, setSelectedCategory] = useState(null);

handleCategoryChange = (itemValue) => {
  console.log("Selected category in CategoryPicker:", itemValue);
  setSelectedCategory(itemValue);
  onSelectItem(itemValue);
}

  return (
            <Select style={styles.input}>
                <SelectTrigger>
                  <SelectInput style={styles.input}
                    placeholder="Category"
                    selectedValue={selectedCategory}
                    onValueChange={handleCategoryChange}
                    
                  />

                  <SelectIcon mr="$3">
                    <Icon as={Entypo} name="chevron-down" size={15} color="black"/>
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Beverages" value="Beverages"  />
                    <SelectItem label="Dairy" value="Dairy" />
                    <SelectItem label="Fruits" value="Fruits" />
                    <SelectItem label="Grains" value="Grains" />
                    <SelectItem label="Meats" value="Meats" />
                    <SelectItem label="Miscellaneous" value="Miscellaneous" />
                    <SelectItem label="Veggies" value="Veggies" />
                  </SelectContent>
                </SelectPortal>
              </Select>
  );
};
const styles = StyleSheet.create({
    input:{
      backgroundColor:"white",
      margin: 10,
      borderColor: "white",
      borderRadius: 15,
    
    },
    ModalContent: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#FFCE20",
      borderRadius:25
    },
    modalInnerContent: {
      width: '100%', // Adjust the width as needed
    },
  });
export default CategoryPicker;

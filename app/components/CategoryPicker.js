
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

const CategoryPicker = ({handleAddItem}) => {
    const [itemCategory, setItemCategory] = useState("");
 
  
  return (
            <Select style={styles.input}>
                <SelectTrigger>
                  <SelectInput style={styles.input}
                    placeholder="Category"
                    selectedValue={itemCategory}
                    onValueChange={(itemValue, itemIndex) => {
                     setItemCategory(itemValue);
                     handleAddItem(itemValue);
                    }} 
                    
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
                    <SelectItem label="Beverages" value="beverages"  />
                    <SelectItem label="Dairy" value="dairy" />
                    <SelectItem label="Fruits" value="fruits" />
                    <SelectItem label="Grains" value="grains" />
                    <SelectItem label="Meats" value="meats" />
                    <SelectItem label="Miscellaneous" value="misc" />
                    <SelectItem label="Veggies" value="veggies" />
                  </SelectContent>
                </SelectPortal>
              </Select>
  );
};
const styles = StyleSheet.create({
    input:{
      backgroundColor:"white",
      margin: 8,
      borderColor: "white",
      borderRadius: 15
    
  
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

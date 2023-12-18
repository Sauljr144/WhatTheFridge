import React, { useState, useRef, useEffect } from "react";
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


  

const CategoryPickerScreen = () => {
  const [itemCategory, setItemCategory] = useState("");

  return (
    <Select style={styles.input}>
    <SelectTrigger variant="underlined">
      <SelectInput style={styles.input}
        placeholder="Category"
        selectedValue={itemCategory}r
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
        <SelectItem label="Beverages" value="1"  />
        <SelectItem label="Dairy" value="2" />
        <SelectItem label="Fruits" value="3" />
        <SelectItem label="Grains" value="4" />
        <SelectItem label="Meats" value="5" />
        <SelectItem label="Miscellaneous" value="6" />
        <SelectItem label="Veggies" value="7" />
      </SelectContent>
    </SelectPortal>
  </Select>
  )
}

const styles = StyleSheet.create({
    input:{
      backgroundColor:"white",
      margin: 10,
    borderWidth:0,
    width:"50%",
    marginTop:0,
    paddingTop:0,

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
export default CategoryPickerScreen

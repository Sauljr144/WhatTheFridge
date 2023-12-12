import React, { useState, useRef } from "react";
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
import { SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ShoppingListItemModal = ({
  isVisible,
  onClose,
  addItemToShoppingList,
}) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const handleAddItem = () => {
    const newItem = {
      name: itemName,
      category: itemCategory,
      quantity: itemQuantity,
    };
    console.log("selected category:", itemCategory);
    addItemToShoppingList(newItem);
    onClose();
  };
  return (
   
      <Modal isOpen={isVisible} onClose={onClose} size="lg">
        <ModalBackdrop />
        <SafeAreaView>
          <ModalContent style={styles.ModalContent}>
            <ModalHeader>
              <Heading size="sm">Add Item</Heading>
            </ModalHeader>

            <ModalBody style={styles.modalInnerContent}>
              <FormControl>
                <Input>
                  <InputField
                    placeholder="Item Name"
                    value={itemName}
                    onChangeText={(text) => setItemName(text)}
                  />
                </Input>
              </FormControl>

              <Select>
                <SelectTrigger>
                  <SelectInput
                    placeholder="Category"
                    value={itemCategory}
                    onValueChange={(value) => {
                      console.log("Selected Category (onValueChange):", value);
                      setItemCategory(value);
                    }}
                  />

                  <SelectIcon mr="$3">
                    {/* <Entypo name="chevron-down" size={15} color="black" /> */}
                    <Icon as={Entypo} name="chevron-down" size={15} color="black"/>
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Beverages" value="beverages" />
                    <SelectItem label="Dairy" value="dairy" />
                    <SelectItem label="Fruits" value="fruits" />
                    <SelectItem label="Grains" value="grains" />
                    <SelectItem label="Meats" value="meats" />
                    <SelectItem label="Miscellaneous" value="misc" />
                    <SelectItem label="Veggies" value="veggies" />
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Input>
                <InputField
                  placeholder="Quantity"
                  value={itemQuantity}
                  onChangeText={(text) => setItemQuantity(text)}
                />
              </Input>
            </ModalBody>
            <ModalFooter>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={handleAddItem}
              >
                <ButtonText>Add</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </SafeAreaView>
      </Modal>
   
  );
};

const styles = StyleSheet.create({
  ModalContent: {
    flex: 1,
    color: "Yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerContent: {
    width: '100%', // Adjust the width as needed
  },
});
export default ShoppingListItemModal;

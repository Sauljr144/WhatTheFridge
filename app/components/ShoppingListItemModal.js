import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
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
import { Feather } from "@expo/vector-icons";

import CategoryPicker from "./CategoryPicker";

const ShoppingListItemModal = ({
  isVisible,
  onClose,
  addItemToShoppingList,
}) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  
  const categoryNames = [
    {
      label: "Beverages",
      value: 1,
    },
    {
      label: "Dairy",
      value: 2,
    },
    {
      label: "Fruits",
      value: 3,
    },
    {
      label: "Grains",
      value: 4,
    },
    {
      label: "Meats",
      value: 5,
    },
    {
      label: "Miscellaneous",
      value: 6,
    },
    {
      label: "Veggies",
      value: 7,
    },
  ];

  const handleAddItem = () => {
    const selectedCategory = categoryNames.find(
      (category) => category.value === itemCategory
    );

    const newItem = {
      name: itemName,
      category: selectedCategory ? selectedCategory.label : "",
      quantity: itemQuantity,
    };
    console.log("selected category:", selectedCategory);
    addItemToShoppingList(newItem);
    onClose();
  };

  return (
    <Modal isOpen={isVisible} onClose={onClose} size="lg">
      <ModalBackdrop />

      <ModalContent style={styles.ModalContent}>
        <ModalHeader>
          <Heading size="sm">Add Item</Heading>
        </ModalHeader>

        <ModalBody style={styles.modalInnerContent}>
          <FormControl>
            <Input style={styles.input}>
              <InputField
                placeholder="Item Name"
                value={itemName}
                onChangeText={(text) => setItemName(text)}
              />
            </Input>
          </FormControl>

          <CategoryPicker
            items={categoryNames}
            placeholder="Category"
            selectedItem={itemCategory}
            onSelectItem={(item) => setCategory(item)}
            handleAddItem={(selectedCategory) =>
              setItemCategory(selectedCategory)
            }
          />
          <Input style={styles.input}>
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
            style={{ backgroundColor: "white" }}
          >
            <ButtonText style={{ color: "black" }}>Add</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 8,
    borderColor: "white",
    borderRadius: 15,
  },
  ModalContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCE20",
    borderRadius: 25,
  },
  modalInnerContent: {
    width: "100%", // Adjust the width as needed
  },
});
export default ShoppingListItemModal;

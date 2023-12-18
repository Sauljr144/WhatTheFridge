// ShoppingListItemModal.js

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Input,
  InputField,
} from "@gluestack-ui/themed";

import CategoryPicker from "./CategoryPicker";
import CustomDropdown from "./CustomDropDown";


const ShoppingListItemModal = ({ isVisible, onClose, addItemToShoppingList, categoryNames }) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const handleSelectItem = (itemValue) => {
    console.log('handleSelectItem called with:', itemValue);
    setItemCategory(itemValue);
  };
  return (
    <Modal isOpen={isVisible} onClose={onClose} size="lg">
      <ModalBackdrop />

      <ModalContent style={styles.ModalContent}>
        <ModalHeader>
          <Heading size="sm">Add Item</Heading>
        </ModalHeader>

        <ModalBody style={styles.modalInnerContent}>
          <Input style={styles.input}>
            <InputField
              placeholder="Item Name"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />
          </Input>

          <CustomDropdown
            placeholder="Category"
            items={categoryNames}
            onSelectItem={handleSelectItem}
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
            onPress={() => {
              const newItem = {
                name: itemName,
                category: itemCategory,
                quantity: itemQuantity,
              };
              console.log("Selected category in ShoppingListItemModal:", itemCategory);
              addItemToShoppingList(newItem);
              onClose();
            }}
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

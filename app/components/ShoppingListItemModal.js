// ShoppingListItemModal.js
import React, { useState, useEffect } from "react";
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

import CustomDropdown from "./CustomDropDown";

const ShoppingListItemModal = ({
  isVisible,
  onClose,
  onEdit,
  addItemToShoppingList,
  categoryNames,
  categoryColors,
  itemToEdit,
  isEditing,
}) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  useEffect(() => {
    console.log("itemToEdit in ShoppingListItemModal:", itemToEdit);
    if (itemToEdit) {
      console.log("setting item to edit", itemToEdit);
      setItemName(itemToEdit.name);
      setItemCategory(itemToEdit.category);
      setItemQuantity(itemToEdit.quantity);
    } else {
      console.log("No itemToEdit, setting modal fields to empty strings");
      setItemName("");
      setItemCategory("");
      setItemQuantity("");
    }
  }, [itemToEdit]);

  const handleSelectItem = (itemValue) => {
    setItemCategory(itemValue);
  };

  return (
    <Modal isOpen={isVisible} onClose={onClose} size="lg">
      <ModalBackdrop />

      <ModalContent style={styles.ModalContent}>
        <ModalHeader>
          <Heading size="sm">{isEditing ? "Edit Item" : "Add Item"}</Heading>
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
            selectedValue={itemToEdit ? itemToEdit.category : null}
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
                color: categoryColors[itemCategory],
              };

              if (isEditing) {
                onEdit(newItem);
              } else {
                addItemToShoppingList(newItem);
              }

              onClose();
            }}
            style={{ backgroundColor: "white" }}
          >
            <ButtonText style={{ color: "black" }}>
              {isEditing ? "Done" : "Add"}
            </ButtonText>
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
    width: "100%",
  },
});

export default ShoppingListItemModal;

import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
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
import { sendData, editData } from "../Services/DataService";

const FridgeListItemModal = ({
  name,
  id,
  category,
  quantity,
  isVisible,
  onClose,
  onEdit,
  addItemToFridgeList,
  itemExpDate,
  categoryNames,
  categoryColors,
  itemToEdit,
  isEditing,
}) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemId, setItemId] = useState(0);
  const [itemExpirationDate, setItemExpirationDate] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setItemName(name);
      setItemCategory(category);
      setItemQuantity(quantity);
      setItemExpirationDate(itemExpDate);
      setItemId(id);
    } else {
      setItemName("");
      setItemCategory("");
      setItemQuantity(0);
      setItemExpirationDate("");
      setItemId(0);
    }
  }, [itemToEdit]);

  const handleSelectItem = (itemValue) => {
    setItemCategory(itemValue);
  };

  //Arrays
  const [fridgeItems, setFridgeItems] = useState([]);

  //Function to add to database
  const addFridgeItem = async () => {
    const newFridgeItem = {
      id: itemId,
      expirationDate: itemExpirationDate,
      fridgeItemName: itemName,
      quantity: itemQuantity,
      isDeleted: false,
      category: itemCategory,
    };

    setFridgeItems([...fridgeItems, newFridgeItem]);
    await sendData("fridge", newFridgeItem);
    console.log(newFridgeItem, "it works");
  };

  //need to add to fridgle list modal for edit item
  const editItem = async (id, item) => {
    await editData("fridge", id, item);
    console.log(id, item, "it works");
  };

  return (
    <Modal isOpen={isVisible} onClose={onClose} size="lg">
      <ModalBackdrop />

      <ModalContent style={styles.ModalContent}>
        <View style={styles.ModalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>

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
              value={itemQuantity.toString()}
              onChangeText={(text) => setItemQuantity(text)}
            />
          </Input>
          <Input style={styles.input}>
            <InputField
              placeholder="Expiration Date"
              value={itemExpirationDate}
              onChangeText={(text) => setItemExpirationDate(text)}
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
                id: itemId,
                expirationDate: itemExpirationDate,
                fridgeItemName: itemName,
                category: itemCategory,
                quantity: itemQuantity,
                isDeleted: false,
              };

              if (isEditing) {
                onEdit(newItem);
                console.log(newItem);
                editItem(itemId, newItem);
              } else {
                addItemToFridgeList(newItem);
                //Adding to our database
                addFridgeItem();
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
  closeButton: {
    paddingTop: 20,
    justifyContent: "flex-end",
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  ModalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    margin: 5,
    paddingRight: 30,
  },
});
export default FridgeListItemModal;

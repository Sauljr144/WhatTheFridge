// CustomDropdown.js

import React, { useState } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  Button,
  ButtonText,
  View,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const CustomDropdown = ({ items, onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item.label);
    onSelectItem(item.value);
    setIsOpen(false);
  };

  return (
    <>
      <Button onPress={() => setIsOpen(true)} style={styles.categorySelect}>
        <ButtonText
          style={{
            color: selectedItem ? 'black' : 'grey',
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "left",
            marginLeft: 0,
            paddingLeft: 0,
          }}
        >
          {selectedItem ||"Category"}
        </ButtonText>
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalBackdrop />

          <ModalContent style={styles.modalContent}>
            <View>
              {items.map((item) => (
                <Button
                  key={item.value}
                  onPress={() => handleSelect(item)}
                  style={styles.itemButton}
                >
                  <ButtonText
                    style={{
                      color: '#9B9A9A',
                      fontFamily: "Arial",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    {item.label} {selectedItem === item.label && "✔"}
                  </ButtonText>
                </Button>
              ))}
            </View>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  categorySelect: {
    backgroundColor: "white",
    margin: 10,
    justifyContent: "flex-start",
    borderRadius: 15,
    borderColor: "transparent",
    paddingLeft: 15,
  },
  modalContent: {
    backgroundColor: "white",
    borderColor: "#D4D9D9",
    borderWidth: 1,
    borderRadius: 15,
    padding: 0,
    margin: 10,
  },
  itemButton: {
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
  },
});

export default CustomDropdown;

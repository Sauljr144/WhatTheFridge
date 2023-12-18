// CustomDropdown.js

import React, { useState } from 'react';
import { Modal, ModalBackdrop, ModalContent, Button, ButtonText } from '@gluestack-ui/themed';
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
      <Button onPress={() => setIsOpen(true)} style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}>
        <ButtonText style={{ color: 'grey' }}>{selectedItem || 'Category'}</ButtonText>
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalBackdrop />

          <ModalContent style={styles.categorySelect}>
            {items.map((item) => (
              <Button key={item.value} onPress={() => handleSelect(item)} style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}>
                <ButtonText style={{ color: 'black' }}>{item.label}</ButtonText>
              </Button>
            ))}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
const styles = StyleSheet.create({
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10, // This will round the edges
    borderColor: 'transparent',
    }
)
export default CustomDropdown;
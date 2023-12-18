// CustomDropdown.js

import React, { useState } from 'react';
import { Modal, ModalBackdrop, ModalContent, Button, ButtonText, View } from '@gluestack-ui/themed';
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
        <ButtonText style={{ color: 'grey', textAlign: 'left'  }}>{selectedItem || 'Category'}</ButtonText>
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalBackdrop />

          <ModalContent style={styles.modalContent}>
            <View>
              {items.map((item) => (
                <Button key={item.value} onPress={() => handleSelect(item)} style={styles.itemButton}>
                  <ButtonText style={{ color: 'black'}}>{item.label}</ButtonText>
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
    borderRadius: 10,
    borderColor: 'transparent',
    padding: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  itemButton: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
});

export default CustomDropdown;
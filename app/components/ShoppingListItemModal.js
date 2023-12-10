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


} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import ShoppingListScreen from "../screens/ShoppingListScreen";


const ShoppingListItemModal = (isVisible, onClose) => {
  const ref = useRef(null);

  return (
    <>
         <ScrollView>
      <Modal
        isOpen={isVisible}
        onClose={onClose}
        finalFocusRef={ref}
        size="sm"
      >
        <ModalBackdrop />
        <ModalContent style={{ flex: 1 }}>
          <ModalHeader>
          <Heading size="sm">Heading</Heading>
          </ModalHeader>
       
        <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"r
              mr="$3"
              onPress={() => onClose}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
        
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
          </ModalContent>
      </Modal>
    </ScrollView>
    </>
 
  );
};

export default ShoppingListItemModal;

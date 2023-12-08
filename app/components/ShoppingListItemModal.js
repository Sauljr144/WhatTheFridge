import React, { useState } from "react";
import { Modal, Button, FormControl, Input, HStack,  } from '@gluestack-ui/themed';

const ShoppingListItemModal = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return <>
  {/* <Modal isOpen={isVisible} onClose={() => isVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header>Contact Us</Modal.Header>
      <Modal.Body>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input ref={initialRef} />
        </FormControl>
        <FormControl mt="3">
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button space={2}>
          <Button variant="ghost" colorScheme="blueGray" onPress={() => {
          setIsVisible(false);
        }}>
            Cancel
          </Button>
          <Button onPress={() => {
          setIsVisible(false);
        }}>
            Save
          </Button>
        </Button>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
  <HStack space="4" justifyContent="center" alignItems="center">
  <Button onPress={() => setIsVisible(!isVisible)}>
  Open Modal
</Button>
  </HStack> */}
</>;
};

export default ShoppingListItemModal;

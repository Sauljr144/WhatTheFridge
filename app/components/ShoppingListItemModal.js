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
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ShoppingListItemModal = (isVisible, onClose) => {
  const ref = useRef(null);

  return (
 
    <ScrollView>

    
        <Modal
          isOpen={isVisible}
          onClose={onClose}
          finalFocusRef={ref}
          size="xl"
        >  
        
    
      
            <ModalBackdrop />
              <SafeAreaView>
              <ModalContent style={{ flex: 1 }}>
                <ModalHeader>
                  <Heading size="sm">Add Item</Heading>
                </ModalHeader>

                <ModalBody>
                  <FormControl>
                    <Input>
                      <InputField placeholder="Item Name"/>
                    </Input>
                  </FormControl>
            
                    <Select>
                      <SelectTrigger>
                        <SelectInput placeholder="Category" />
                        <SelectIcon mr="$3">
                          <Entypo name="chevron-down" size={15} color="black" />
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
                      <InputField placeholder="Quantity"/>
                    </Input>
                </ModalBody>
                <ModalFooter>

                  <Button size="sm" action="positive" borderWidth="$0">
                    <ButtonText>Add</ButtonText>
                  </Button>
                </ModalFooter>
              </ModalContent>
         </SafeAreaView>   
         
        </Modal>
        </ScrollView>
   
  );
};

export default ShoppingListItemModal;

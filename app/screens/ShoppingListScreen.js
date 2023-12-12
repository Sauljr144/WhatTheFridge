import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  HStack,
  Center,
  Icon,
  Button,
  ButtonIcon,
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
import { Entypo } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";

const ShoppingListScreen = () => {
  const [category, setCategory] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([])
  const addItemToShoppingList = (item) =>{
    setShoppingList((prevList) => [...prevList, item])
  }

  return (
    <ScrollView>
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      </View>
      <View>
        <HStack>
          <VStack>
            <Text style={styles.subHeaderFont}>Sort By:</Text>
          </VStack>

          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Select option" />
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
                <SelectItem label="Beverages" value="bevs" />
                <SelectItem label="Dairy" value="dairyy" />
                <SelectItem label="Fruits" value="fruit" />
                <SelectItem label="Grains" value="grain" />
                <SelectItem label="Meats" value="meat" />
                <SelectItem label="Miscellaneous" value="misc" />
                <SelectItem label="Veggies" value="veggie" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <VStack style={styles.addItemContainer}>
            <Text style={styles.addItemTxt}>Add Item:</Text>
          </VStack>

          <Feather
            name="plus-circle"
            size={35}
            color="#FFCE20"
            onPress={() => setIsModalVisible(true)}
          />

        {isModalVisible && (
          <ShoppingListItemModal
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            addItemToShoppingList = {addItemToShoppingList}
          />
        )}
        </HStack>

      </View>
      <View>
        {shoppingList.map((item, index) => (
          <View key={index} style={styles.shoppingListItem}>
            <Text>Name: {item.name}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topBorder: {
    justifyContent: "flex-end",
    alignItems: "start",
    height: 120,
    width: "100%",
    backgroundColor: "#FFCE20",
    paddingLeft: 30,
    paddingBottom: 30,
    borderBottomRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  shoppingHeader: {
    fontWeight: 700,
    fontSize: 24,
  },
  subHeaderFont: {
    fontWeight: 400,
    fontSize: 20,
    justifyContent: "flex-start",
  },
  addItemBtn: {
    padding: 25,
  },
  addItemTxt: {
    fontWeight: 400,
    fontSize: 20,
  },
  addItemContainer: {
    justifyContent: "end",
  },
  shoppingListItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20
  },
});
export default ShoppingListScreen;

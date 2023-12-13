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
import CategoryPicker from "../components/CategoryPicker";

const ShoppingListScreen = () => {
  const [category, setCategory] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([])
  const addItemToShoppingList = (item) =>{
    setShoppingList((prevList) => [...prevList, item])
  }

  const categoryNames = [
    {
    label: "Beverages",
    value: 1
  },
    {
    label: "Dairy",
    value: 2
  },
    {
    label: "Fruits",
    value: 3
  },
    {
    label: "Grains",
    value: 4
  },
    {
    label: "Meats",
    value: 5
  },
    {
    label: "Miscellaneous",
    value: 6
  },
    {
    label: "Veggies",
    value: 7
  }
]
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

          <CategoryPicker style={styles.category}/>

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
  category:{
    margin:15,
    justifyContent: "space-between"

  }
});
export default ShoppingListScreen;

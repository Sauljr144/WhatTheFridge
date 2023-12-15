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
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableHighlight } from "react-native";
import SwipeableItem from "../components/SwipeableItem";

const ShoppingListScreen = () => {
  const [category, setCategory] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const addItemToShoppingList = (item) => {
    setShoppingList((prevList) => [...prevList, item]);
  };

 
  return (
    <ScrollView>
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
        <View style={{ flexDirection: "row"}}>
          <Text style={styles.subHeaderFont}>Sort By:</Text>
          <CategoryPicker style={styles.category} />
        </View>
        <View style={{ flexDirection: "row"}}>
          <Text style={styles.addItemTxt}>Add Item:</Text>
          <Feather
            name="plus-circle"
            size={35}
            color="#FFCE20"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </View>
      {isModalVisible && (
        <ShoppingListItemModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          addItemToShoppingList={addItemToShoppingList}
        />
      )}

      {shoppingList.map((item, index) => (
        <SwipeableItem
          key={index}
          item={item}
          onDelete={(deletedItem) => {
            // Handle the delete action here
            const updatedList = shoppingList.filter(
              (item) => item !== deletedItem
            );
            setShoppingList(updatedList);
          }}
        />
      ))}
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
    fontFamily: "Roboto"
  
  },
  shoppingHeader: {
    fontWeight: 700,
    fontSize: 24,
  },
  subHeaderFont: {
    fontWeight: 400,
    fontSize: 15,
    justifyContent: "flex-start",
  },
  addItemBtn: {
    padding: 25,
  },
  addItemTxt: {
    fontWeight: 400,
    fontSize: 15,
  },
  addItemContainer: {
    justifyContent: "end",
  },
  shoppingListItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  category: {
    margin: 15,
    justifyContent: "space-between",
  },
});
export default ShoppingListScreen;


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
  set,
} from "@gluestack-ui/themed";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableHighlight } from "react-native";
import SwipeableItem from "../components/SwipeableItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";



const ShoppingListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const addItemToShoppingList = (item) => {
    const newItem = { ...item, color: categoryColors[item.category] };
    setShoppingList((prevList) => [...prevList, newItem]);
  };

  let itemsToDisplay = shoppingList;
  if (selectedCategory) {
    itemsToDisplay = shoppingList.filter(
      (item) => item.category === selectedCategory
    );
  }

  const clearAllItems = () => {
    setShoppingList([]);
    setSelectedCategory(null);
  };

  const handleEdit = (editedItem) => {
    const updatedList = shoppingList.map((item) =>
      item === itemToEdit ? editedItem : item
    );
    setShoppingList(updatedList);
    setItemToEdit(null);
  };
  

  const categoryNames = [
    { label: "View All", value: null },
    { label: "Beverages", value: "Beverages" },
    { label: "Dairy", value: "Dairy" },
    { label: "Fruits", value: "Fruits" },
    { label: "Grains", value: "Grains" },
    { label: "Meats", value: "Meats" },
    { label: "Miscellaneous", value: "Miscellaneous" },
    { label: "Veggies", value: "Veggies" },
  ];

  const categoryColors = {
    Beverages: "#44BBFE",
    Dairy: "#FEF644",
    Fruits: "#44FEBB",
    Grains: "#FEA844",
    Meats: "#FE4444",
    Miscellaneous: "#C244FE",
    Veggies: "#ACFE44",
  };

  return (
    <ScrollView>
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subHeaderFont}>Sort By:</Text>
          <CategoryPickerScreen
            onSelectedCategory={handleSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.addItemTxt}>Add Item:</Text>
          <Feather
            name="plus-circle"
            size={35}
            color="#FFCE20"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </View>
      <View style={styles.clearAllcontainer}>
        <TouchableOpacity onPress={clearAllItems}>
          <Text style={styles.clearAllTxt}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <ShoppingListItemModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          addItemToShoppingList={addItemToShoppingList}
          categoryNames={categoryNames}
          categoryColors={categoryColors}
          itemToEdit={itemToEdit}
          isEditing={!!itemToEdit}
          onEdit={handleEdit}
        />
      )}

      {itemsToDisplay.map((item, index) => (
        <SwipeableItem
          key={index}
          item={item}
          children={<ShoppingListItemColor item={item} />}
          onDelete={(deletedItem) => {
            const updatedList = shoppingList.filter(
              (item) => item !== deletedItem
            );
            setShoppingList(updatedList);
          }}
          onEdit={() => {
            setIsModalVisible(true);
            setItemToEdit(item);
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
    borderBottomLeftRadius: 25,
    marginBottom: 15,
  },
  shoppingHeader: {
    fontWeight: "700",
    fontSize: 24,
  },
  subHeaderFont: {
    fontWeight: "400",
    fontSize: 15,
    justifyContent: "flex-start",
  },
  addItemTxt: {
    fontWeight: "400",
    fontSize: 15,
  },
  clearAllcontainer: {
    margin: 10,
    paddingRight: 30,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  clearAllTxt: {
    textAlign: "center",
    color: "red",
  },
});

export default ShoppingListScreen;

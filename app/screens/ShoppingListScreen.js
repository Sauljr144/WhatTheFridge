import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import SwipeableItem from "../components/SwipeableItem";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, sendData } from "../Services/DataService";

const ShoppingListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  //useEffect to render data on page load
  // useEffect(() => {
  //   getFridgeItems();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getShoppingItems();
    }, 3000); // 3000ms delay
  
    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  //Functions
  //Get Shopping Items
  const getShoppingItems = async () => {
    let myShoppingItems = await getData("Shopping", "GetFridgeItems");
    setShoppingList(myShoppingItems);
    // console.log(myFridgeItems);
  };

  //Delete a fridge item
  const deleteFridgeItem = async (item) => {
    const deleteFridgeItems = await sendData(
      "Fridge",
      "DeleteFridgeItem",
      item
    );
    setShoppingList([deleteFridgeItems]);
    console.log(deleteFridgeItems);
  };

  //Delete All Items
  const MasterDelete = async () => {
    const deleteShoppingItems = await sendData("Shopping", "DeleteAllFridgeItems");
    setShoppingList([deleteShoppingItems]);
  };

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

  const ColorFn = (item) => {
    if (item.category === "Beverages") {
      return "#44BBFE";
    } else if (item.category === "Dairy") {
      return "#FEF644";
    } else if (item.category === "Fruits") {
      return "#44FEBB";
    } else if (item.category === "Grains") {
      return "#FEA844";
    } else if (item.category === "Meats") {
      return "#FE4444";
    } else if (item.category === "Miscellaneous") {
      return "#C244FE";
    } else if (item.category === "Veggies") {
      return "#ACFE44";
    } else if (item.category === "") {
      return "#E0E0E0";
    }
  };
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
    <>
      <ScrollView >
        <View style={styles.topBorder}>
          <Text style={styles.shoppingHeader}>My Shopping List</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.subHeaderFont}>Sort By:</Text>
            <CategoryPickerScreen
              onSelectedCategory={handleSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.addItemTxt}>Add Items</Text>
            <Feather
              name="plus-circle"
              size={30}
              color="#FFCE20"
              onPress={() => setIsModalVisible(true)}
            />
          </View>
        </View>
        <View style={styles.clearAllcontainer}>
          <TouchableOpacity onPress={MasterDelete}>
            <Text style={styles.clearAllTxt}>Clear My List</Text>
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
            name={item.shoppingItemName}
            quantity={item.quantity}
            category={item.category}
            color={ColorFn(item)}
            children={
              <ShoppingListItemColor
                name={item.fridgeItemName}
                quantity={item.quantity}
              />
            }
            onPress={(deletedItem) => {
              const updatedList = shoppingList.filter(
                (item) => item !== deletedItem
              );
              deleteFridgeItem(deletedItem);
              setShoppingList(updatedList);
            }}
            onEdit={() => {
              setIsModalVisible(true);
              setItemToEdit(item);
            }}
            
          />
         
          
        ))}

        {/* <FlatList 
      data={itemsToDisplay}
      keyExtractor={({item}) => item.fridgeItemId}
      renderItem={({item}) =>(
        <SwipeableItem  />
      )}/> */}
      </ScrollView>
    </>
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
    fontWeight: "600",
    fontSize: 15,
    justifyContent: "flex-start",
  },
  addItemTxt: {
    fontWeight: "600",
    fontSize: 15,
    marginRight: 10,
  },
  clearAllcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  clearAllTxt: {
    textAlign: "center",
    color: "red",
    fontWeight: "700",
  },
});

export default ShoppingListScreen;

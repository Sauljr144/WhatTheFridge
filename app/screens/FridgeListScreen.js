import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import FridgeListItemModal from "../components/FridgeListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import SwipeableItem from "../components/SwipeableItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, sendData } from "../Services/DataService";
import { Input, InputField } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
const FridgeListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  //Delete a fridge item
  const deleteFridgeItem = async (item) => {
    console.log(item);
    item.isDeleted = !item.isDeleted;
    const deleteFridgeItems = await sendData(
      "Fridge",
      "DeleteFridgeItem",
      item
    );
    setShoppingList([deleteFridgeItems]);
    console.log(deleteFridgeItems);
  };

  //handle delete
  const handleDelete = async (item) => {
    console.log("first");
    item.isDeleted = !item.isDeleted;

    let result = await updateBlogItems(item);

    if (result) {
      let userBlogItems = await GetBlogItemsByUserId(blogUserId);
      setBlogItems(userBlogItems);
      console.log(userBlogItems);
    } else alert(`Blog item not ${edit ? "updated" : "added"}`);
  };

  //Delete All Items
  const MasterDelete = async () => {
    const deleteFridgeItems = await sendData("Fridge", "DeleteAllFridgeItems");
    setShoppingList([deleteFridgeItems]);
  };
//Add Item
  const addItemToShoppingList = (item) => {
    const newItem = { ...item, color: categoryColors[item.category] };
    setShoppingList((prevList) => [...prevList, newItem]);
  };

//edit item
  const handleEdit = (editedItem) => {
    const updatedList = shoppingList.map((item) =>
      item === itemToEdit ? editedItem : item
    );
    setShoppingList(updatedList);
    setItemToEdit(null);
  };

  let itemsToDisplay = shoppingList;
  if (selectedCategory) {
    itemsToDisplay = shoppingList.filter(
      (item) => item.category === selectedCategory
    );
  }

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
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Fridge List</Text>
      </View>

      <View style={styles.Input}>
        <Input
          variant="outline"
          size="md"
          style={styles.InputField}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Search" />
        </Input>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
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
        <TouchableOpacity onPress={MasterDelete}>
          <Text style={styles.clearAllTxt}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <FridgeListItemModal
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
      <ScrollView>
        {itemsToDisplay.map((item, index) => (
          <SwipeableItem
            key={index}
            item={item}
            name={item.fridgeItemName}
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
              // const updatedList = shoppingList.filter(
              //   (item) => item !== deletedItem
              // );

              deleteFridgeItem(deletedItem);
              // setShoppingList(updatedList);
            }}
            onEdit={() => {
              setIsModalVisible(true);
              setItemToEdit(item);
            }}
          />
        ))}
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
  Input: {
    backgroundColor: "FFF8F2",
    borderColor: "#FFE175",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  InputField: {
    width: "100%",
    backgroundColor: "FFF8F2",
    borderRadius: 15,
    borderColor: "#FFE175",
  },
  subHeaderFont: {
    fontWeight: "400",
    fontSize: 15,
    justifyContent: "flex-start",
  },
  addItemTxt: {
    fontWeight: "400",
    fontSize: 15,
    marginRight: 10,
  },
  clearAllcontainer: {
    margin: 0,
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
export default FridgeListScreen;

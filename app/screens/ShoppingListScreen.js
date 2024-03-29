import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import SwipeableItem from "../components/SwipeableItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, deleteData, deleteAllData } from "../Services/DataService";
import EditAndDelete from "../components/EditAndDelete";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native";
import { set } from "@gluestack-style/react";
import NavPiece from "../components/NavPiece";

const ShoppingListScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  //useEffect to render data on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      getShoppingItems();
    }, 0); // 3000ms delay

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  //--------------------------------Functions-------------------------------//
//change get data to fridge
  //Get Shopping Items
  const getShoppingItems = async () => {
    let result = await getData("shopping");
    setShoppingList(result);
  };

  //Add Shopping Item
  const addItemToShoppingList = (item) => {
    const newItem = { ...item, color: categoryColors[item.category] };
    setShoppingList([...shoppingList, newItem]); //new line to set fridgelist
  };

  //Delete a Shopping item
  const deleteItem = async (id) => {
    await deleteData("shopping", id);
    console.log(id);
    getShoppingItems();
  };

  //Delete All Items
  const MasterDelete = async () => {
    const result = await deleteAllData("shopping");
    getShoppingItems();
  };

  //Select Category
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  //  Filtering

  let itemsToDisplay = shoppingList;
  if (selectedCategory) {
    itemsToDisplay = shoppingList.filter(
      (item) => item?.category === selectedCategory
    );
  }

  //Edit Item
  const handleEdit = (editedItem) => {
    const updatedList = shoppingList.map((item) =>
      item === itemToEdit ? editedItem : item
    );
    setShoppingList(updatedList);
    setItemToEdit(null);
  };

  //Color Function
  const ColorFn = (item) => {
    switch (item?.category) {
      case "Beverages":
        return "#44BBFE";
      case "Dairy":
        return "#FEF644";
      case "Fruits":
        return "#44FEBB";
      case "Grains":
        return "#FEA844";
      case "Meats":
        return "#FE4444";
      case "Miscellaneous":
        return "#C244FE";
      case "Veggies":
        return "#ACFE44";
      case "":
        return "#E0E0E0";
      default:
        // return a default color or null if item.category is not matched
        return null;
    }
  };
  const categoryNames = [
    { label: "View All", value: null},
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
    <>
    <SafeAreaView style={{flex:1, backgroundColor:"#FFCE20"}}>
    <ScrollView style={{ backgroundColor:"white"}} stickyHeaderIndices={[0]}>
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
        <TouchableOpacity onPress={() => setDeleteModal(true)}>
          <Text style={styles.clearAllTxt}>Clear My List</Text>
        </TouchableOpacity>
      </View>

      {/* {deleteModal && ()} */}

      {/* {deleteModal && ()} */}

{/* double check below */}
      {isModalVisible && (
        <ShoppingListItemModal
          name={itemToEdit?.shoppingItemName}
          quantity={itemToEdit?.quantity}
          category={itemToEdit?.category}
          id={itemToEdit?.id}
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          addItemToShoppingList={addItemToShoppingList}
          categoryNames={categoryNames}
          categoryColors={categoryColors}
          itemToEdit={itemToEdit}
          isEditing={!!itemToEdit}
          onEdit={handleEdit}
          // submitEdit={getShoppingItems}
        />
      )}

      {itemsToDisplay.length === 0 ? ( 

        <View style={{flexDirection:"row",alignItems: "center", marginTop: 150, justifyContent:"center"}}>
          <Text style={styles.empty}>Add Some Items!</Text>
          <Icon name="smile-o" size={22} color="grey"/>
        </View>
      ) : (
        itemsToDisplay.map((item, index) => (
          <SwipeableItem
            key={index}
            item={item}
            name={item?.shoppingItemName}
            quantity={item?.quantity}
            category={item?.category}
            color={ColorFn(item)}
            renderRightActions={() => (
              <EditAndDelete
                onPress1={() => {
                  setIsModalVisible(true);
                  setItemToEdit(item);
                }}
                onPress2={() => {
                  deleteItem(item?.id);
                }}
              />
            )}
            children={
              <ShoppingListItemColor
                name={item?.shoppingItemName}
                quantity={item?.quantity}
              />
            }
            onEdit={() => {
              setIsModalVisible(true);
              setItemToEdit(item);
            }}
          />
        ))
      )}
    </ScrollView>
    </SafeAreaView>
    <NavPiece navigation={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
  topBorder: {
    justifyContent: "flex-end",
    alignItems: "start",
    height: 90,
    width: "100%",
    backgroundColor: "#FFCE20",
    paddingLeft: 30,
    paddingBottom: 30,
    paddingTop: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: 5,
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
  empty: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "grey",
    marginRight: 10,
  },
});

export default ShoppingListScreen;

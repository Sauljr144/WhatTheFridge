import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import FridgeListItemModal from "../components/FridgeListItemModal";
import FridgeListItemColor from "../components/FridgeListItemColor";
import SwipableFridgeItem from "../components/SwipableFridgeItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, deleteData, deleteAllData } from "../Services/DataService";
import { Input, InputField, get, set } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import EditAndDelete from "../components/EditAndDelete";
const FridgeListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [fridgeList, setFridgeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      getFridgeItems();
    }, 0); // 3000ms delay

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  //--------------------------------Functions-------------------------------//

  //Get Fridge Items
  const getFridgeItems = async () => {
    let myFridgeItems = await getData("Fridge");
    setFridgeList(myFridgeItems);
    // console.log(myFridgeItems);
  };

  //Add Item
  const addItemToFridgeList = (item) => {
    const newItem = {
      ...item,
      color: categoryColors[item.category],
      expirationDate: item.expirationDate,
    };
    setFridgeList([...fridgeList, newItem]);
  };

  //Delete a fridge item
  const deleteItem = async (id) => {
    await deleteData("fridge", id);
    getFridgeItems();
  };

  //Delete All Items
  const MasterDelete = async () => {
    const deleteFridgeItems = await deleteAllData("fridge");
    getFridgeItems();
  };

  //Set Selected Category
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  //filter by category
  let itemsToDisplay = fridgeList;
  if (selectedCategory) {
    itemsToDisplay = fridgeList.filter(
      (item) => item?.category === selectedCategory
    );
  }
  //edit item
  const handleEdit = (editedItem) => {
    const updatedList = fridgeList.map((item) =>
      item === itemToEdit ? editedItem : item
    );
    setFridgeList(updatedList);
    setItemToEdit(null);
  };

  //search items
  if (search) {
    itemsToDisplay = fridgeList.filter((item) =>
      item?.fridgeItemName.toLowerCase().includes(search.toLowerCase())
    );
  }

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
          <InputField
            placeholder="Search Items"
            value={search}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </Input>
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
          <Text style={styles.clearAllTxt}>Clear My List</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <FridgeListItemModal
          name={itemToEdit?.fridgeItemName}
          quantity={itemToEdit?.quantity}
          category={itemToEdit?.category}
          itemExpDate={itemToEdit?.expirationDate}
          id={itemToEdit?.id}
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          addItemToFridgeList={addItemToFridgeList}
          categoryNames={categoryNames}
          categoryColors={categoryColors}
          itemToEdit={itemToEdit}
          isEditing={!!itemToEdit}
          onEdit={handleEdit}
        />
      )}

      {itemsToDisplay.map((item, index) => (
        <SwipableFridgeItem
          key={index}
          item={item}
          name={item?.fridgeItemName}
          quantity={item?.quantity}
          expirationDate={item?.expirationDate}
          category={item?.Category}
          color={ColorFn(item)}
          renderRightActions={() => (
            <EditAndDelete
              onPress1={() => {
                setIsModalVisible(true);
                setItemToEdit(item);
              }}
              onPress2={() => {
                console.log(item);
                deleteItem(item?.id);
                
              }}
            />
          )}
          children={
            <FridgeListItemColor
              name={item?.fridgeItemName}
              quantity={item?.quantity}
              expirationDate={item?.expirationDate}
            />
          }
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
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  clearAllTxt: {
    textAlign: "center",
    color: "red",
    fontWeight: "700",
  },
});

export default FridgeListScreen;

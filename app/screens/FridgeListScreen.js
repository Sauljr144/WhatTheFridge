import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import FridgeListItemModal from "../components/FridgeListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import SwipableFridgeItem from "../components/SwipableFridgeItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, sendData } from "../Services/DataService";
import { Input, InputField } from "@gluestack-ui/themed";
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
    }, 3000); // 3000ms delay
  
    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
 //Get Shopping Items
 const getFridgeItems = async () => {
  let myFridgeItems = await getData("Fridge", "GetFridgeItems");
  setFridgeList(myFridgeItems);
  // console.log(myFridgeItems);
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
    setFridgeList([deleteFridgeItems]);
    console.log(deleteFridgeItems);
  };

  //Delete All Items
  const MasterDelete = async () => {
    const deleteFridgeItems = await sendData("Fridge", "DeleteAllFridgeItems");
    setFridgeList([deleteFridgeItems]);
    console.log(deleteFridgeItems);
  };
//Add Item
  const addItemToFridgeList = (item) => {
    const newItem = { ...item, color: categoryColors[item?.category], expirationDate: item.expirationDate };
    setFridgeList((prevList) => [...prevList, newItem]);
  };

//edit item
  const handleEdit = (editedItem) => {
    const updatedList = fridgeList.map((item) =>
      item === itemToEdit ? editedItem : item
    );
    setFridgeList(updatedList);
    setItemToEdit(null);
  };

  let itemsToDisplay = fridgeList;
//filter by category
  if (selectedCategory) {
    itemsToDisplay = fridgeList.filter(
      (item) => item?.category === selectedCategory
    );
  }
  //search items
  if (search) {
    itemsToDisplay = fridgeList.filter((item) =>
      item?.fridgeItemName.toLowerCase().includes(search.toLowerCase())
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
        <View style={{ flexDirection: "row", alignItems: "center"}}>
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
      <ScrollView>
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
                onPress2={(deletedItem) => {
                  const updatedList = fridgeList.filter(
                    (item) => item !== deletedItem
                  );
                  deleteFridgeItem(deletedItem);
                  setFridgeList(updatedList);
                }}
              />
            )}
            children={
              <ShoppingListItemColor
                name={item?.fridgeItemName}
                quantity={item?.quantity}
                expirationDate={item?.expirationDate}
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
          // console.log(item.expirationDate)
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

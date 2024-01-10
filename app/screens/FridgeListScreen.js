import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
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

  //Delete All Items
  const MasterDelete = async () => {
    const deleteFridgeItems = await sendData("Fridge", "DeleteAllFridgeItems");
    setShoppingList([deleteFridgeItems]);
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

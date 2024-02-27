import { set } from "@gluestack-style/react";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput } from "react-native";
import { getData, sendData } from "../Services/DataService";

const DataTest = () => {
  const categories = [
    "milk",
    "eggs",
    "bread",
    "cheese",
    "meat",
    "fruit",
    "vegetables",
    "other",
  ];

  //useEffect to render data on page load
  useEffect(() => {
    getFridgeItems();
  }, []);



  //UseStates for Forms
  // Fridge Item useStates
  const [fridgeItemName, setFridgeItemName] = useState("");
  const [fridgeItemID, setFridgeItemID] = useState(0);
  const [fridgeItemQuantity, setFridgeItemQuantity] = useState("");
  const [fridgeItemExpirationDate, setFridgeItemExpirationDate] = useState("");
  const [fridgeItemCategory, setFridgeItemCategory] = useState("");
  const [fridgeItemDeleted, setFridgeItemDeleted] = useState(false);

  // Shopping Item useStates
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemID, setShoppingItemID] = useState(0);
  const [shoppingItemQuantity, setShoppingItemQuantity] = useState(0);
  const [shoppingItemCategory, setShoppingItemCategory] = useState("");
  const [shoppingItemDeleted, setShoppingItemDeleted] = useState(false);

  //Bools
  const [edit, setEdit] = useState(false);

  //Arrays
  const [fridgeItems, setFridgeItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);

  // const newShoppingItems = {
  //     ShoppingItemName: shoppingItemName,
  //     Quantity: shoppingItemQuantity,
  //     Category: shoppingItemCategory,
  //     IsDeleted: shoppingItemDeleted
  // }


//Functions
  //Get Fridge Items
  const getFridgeItems = async () => {
    let myFridgeItems = await getData("Fridge", "GetFridgeItems");
    setFridgeItems(myFridgeItems);
  };

  //Add Items Function
  const addFridgeItem = async () => {
    const newFridgeItem = {
      FridgeItemName: fridgeItemName,
      quantity: fridgeItemQuantity,
      ExpirationDate: fridgeItemExpirationDate,
      Category: fridgeItemCategory,
      IsDeleted: fridgeItemDeleted,
    };
    setFridgeItems([...fridgeItems, newFridgeItem]);

    await sendData("fridge", "AddFridgeItems", newFridgeItem);

    // let result = false;
    // if (edit) {
    //     result = await sendData("UpdateFridgeItem", newFridgeItems);
    // } else {
    //     result = await sendData("AddFridgeItems", newFridgeItems);
    // }

    // if (result) {
    //     let myFridgeItems = await getData("Fridge", "GetFridgeItems");
    //     setFridgeItems(myFridgeItems);
    //     console.log(myFridgeItems, "");
    // } else {
    //     alert(`Blog item not ${edit ? "updated" : "added"}`);
    // }

    console.log(fridgeItems, "it works");
    getFridgeItems();
  };

  //Delete a fridge item
  const deleteFridgeItem = async (item) => {
    console.log(item);
    const deleteFridgeItems = await sendData("Fridge", "DeleteFridgeItem", item);
    setFridgeItems([deleteFridgeItems]);
  };

  //Delete All Items
  const MasterDelete = async () => {
    const deleteFridgeItems = await sendData("Fridge", "DeleteAllFridgeItems");
    setFridgeItems([deleteFridgeItems]);
  };

  return (
    <>
      <Text>Fridge Items</Text>
      <TextInput
        placeholder="Enter a Fridge Item"
        value={fridgeItemName}
        onChangeText={(text) => setFridgeItemName(text)}
      />
      <TextInput
        placeholder="Quantity"
        value={fridgeItemQuantity}
        onChangeText={(text) => setFridgeItemQuantity(text)}
      />
      <TextInput
        placeholder="Expiration Date"
        value={fridgeItemExpirationDate}
        onChangeText={(text) => setFridgeItemExpirationDate(text)}
      />
      <TextInput
        placeholder="Category"
        value={fridgeItemCategory}
        onChangeText={(text) => setFridgeItemCategory(text)}
      />
      <Button title="Add Fridge Item" onPress={() => addFridgeItem()} />
      <Button title="Delete Fridge All Items" onPress={() => MasterDelete()} />

      {/* <FlatList>
        data={fridgeItems}
        keyExtractor={(item) => item.Id.toString()}
        renderItem=
        {({ item }) => {
          <>
            <Text>{item.fridgeItemName}</Text>
          </>;
          console.log(item);
        }}
      </FlatList> */}

      {fridgeItems.map((item, index) => (
        <Text key={index}>{item.fridgeItemName}<Button title="Edit"/> <Button title="Delete"/></Text>
      ))}

      {/* <Text>Shopping Items</Text>
      <Button title="Add Shopping Item" onPress={() => {}} />
      <Button title="Delete Shopping Item" onPress={() => {}} /> */}
    </>
  );
};

export default DataTest;

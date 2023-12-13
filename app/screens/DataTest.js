import React, { useState } from "react";
import { Button, FlatList, Text, TextInput } from "react-native";


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

  const [showModal, setShowModal] = useState(false);

  //UseStates for Forms
  // Fridge Item
  const [fridgeItemName, setFridgeItemName] = useState();
  const [fridgeItemID, setFridgeItemID] = useState();
  const [fridgeItemQuantity, setFridgeItemQuantity] = useState();
  const [fridgeItemExpirationDate, setFridgeItemExpirationDate] = useState();
  const [fridgeItemCategory, setFridgeItemCategory] = useState();
  const [fridgeItemDeleted, setFridgeItemDeleted] = useState();

  // Shopping Item
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemID, setShoppingItemID] = useState(0);
  const [shoppingItemQuantity, setShoppingItemQuantity] = useState(0);
  const [shoppingItemCategory, setShoppingItemCategory] = useState("");
  const [shoppingItemDeleted, setShoppingItemDeleted] = useState(false);

  //Bools
  const [edit, setEdit] = useState(false);

  const [fridgeItems, setFridgeItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);

  // const newShoppingItems = [{
  //     ShoppingItemName: shoppingItemName,
  //     Id:shoppingItemID,
  //     Quantity: shoppingItemQuantity,
  //     Category: shoppingItemCategory,
  //     IsDeleted: shoppingItemDeleted
  // }]

  const addFridgeItem = async () => {
    const newFridgeItems = [
      {
        FridgeItemName: fridgeItemName,
        Id: fridgeItemID,
        Quantity: fridgeItemQuantity,
        ExpirationDate: fridgeItemExpirationDate,
        Category: fridgeItemCategory,
        IsDeleted: fridgeItemDeleted,
      },
    ];

    console.log(newFridgeItems);

    let result = false;
    if (edit) {
      result = await sendData("Fridge", "UpdateFridgeItem", newFridgeItems);
    } else {
      result = await sendData("Fridge", "AddFridgeItems", newFridgeItems);
    }

    if (result) {
      let myFridgeItems = await getData("Fridge", "GetFridgeItems");
      setFridgeItems(myFridgeItems);
      console.log(myFridgeItems, "");
    } else {
      alert(`Blog item not ${edit ? "updated" : "added"}`);
    }
  };

  return (
    <>
      <Text>Fridge Items</Text>
      <TextInput
        placeholder="Enter a Fridge Item"
        value={fridgeItemName}
        onChangeText={text => setFridgeItemName(text)}
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
      <Button title="Add Fridge Item" onPress={() => console.log(fridgeItems)} />
      {/* <Button title="Delete Fridge Item" onPress={() => {}} /> */}

      <FlatList>
        data={fridgeItems}
        keyExtractor={(item) => item.value.toString()}
        renderItem=
        {({ item }) => {
          <>
            <Text>{item.fridgeItemName}</Text>
          </>;
        }}
      </FlatList>

      {/* <Text>Shopping Items</Text>
      <Button title="Add Shopping Item" onPress={() => {}} />
      <Button title="Delete Shopping Item" onPress={() => {}} /> */}

    </>
  );
};

export default DataTest;

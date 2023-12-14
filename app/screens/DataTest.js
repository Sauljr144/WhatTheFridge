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

  useEffect(() => {
    const getFridgeItems = async () => {
      let myFridgeItems = await getData("Fridge", "GetFridgeItems");
      setFridgeItems(myFridgeItems);
      // console.log(myFridgeItems);
    };
    getFridgeItems();

  },[]);

  const [showModal, setShowModal] = useState(false);

  //UseStates for Forms
  // Fridge Item
  const [fridgeItemName, setFridgeItemName] = useState('');
  const [fridgeItemID, setFridgeItemID] = useState(0);
  const [fridgeItemQuantity, setFridgeItemQuantity] = useState('');
  const [fridgeItemExpirationDate, setFridgeItemExpirationDate] = useState('');
  const [fridgeItemCategory, setFridgeItemCategory] = useState('');
  const [fridgeItemDeleted, setFridgeItemDeleted] = useState(false);

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

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

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

    const updatedFridgeItems = [...fridgeItems, newFridgeItems];

    setFridgeItems(updatedFridgeItems);
    
    await sendData(updatedFridgeItems);
    
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

    console.log(fridgeItems,'it works');
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
      <Button title="Add Fridge Item" onPress={() =>  addFridgeItem()} />
      {/* <Button title="Delete Fridge Item" onPress={() => {}} /> */}

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
        <Text key={index}>{item.fridgeItemName}</Text>
      ))}

      {/* <Text>Shopping Items</Text>
      <Button title="Add Shopping Item" onPress={() => {}} />
      <Button title="Delete Shopping Item" onPress={() => {}} /> */}

    </>
  );
};

export default DataTest;

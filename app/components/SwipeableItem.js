// SwipeableItem.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Checkbox from "./Checkbox"; // Import the Checkbox component
import ShoppingListItemModal from "./ShoppingListItemModal"; // Import the modal component

const SwipeableItem = ({ item, onDelete, onEdit }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const renderRightActions = (progress, dragX) => {
    const shouldShowButton = dragX < -100;

    // if (shouldShowButton !== showDeleteButton) {
    //   setShowDeleteButton(shouldShowButton);
    // }

    return (
      <View style={{flexDirection:'row'}}>
        <View style ={styles.editAction}>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <FontAwesome name="pencil" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style ={styles.deleteAction}>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <MaterialIcons name="delete-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor="#E0E0E0"
        onPress={() => setShowDeleteButton(false)}
        onLongPress={() => setShowDeleteButton(true)}
      >
        <View
          style={{ ...styles.shoppingListItem, backgroundColor: item.color }}
        >
          <Checkbox isChecked={isChecked} onChange={setIsChecked} />
          <Text>Name: {item.name}</Text>
          <Text>Category: {item.category}</Text>
          <Text>Quantity: {item.quantity}</Text>

          {isEditModalVisible && (
            <ShoppingListItemModal
              isVisible={isEditModalVisible}
              onClose={() => setIsEditModalVisible(false)}
              addItemToShoppingList={(editedItem) => {
                // Handle the edited item
                // You may want to update the item in your shopping list or take other actions
                setIsEditModalVisible(false);
              }}
              initialItem={item} // Pass the item to the modal for editing
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  rightActionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  editAction: {
    backgroundColor: "#05FF00",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
   
    borderRadius: 15,
  },
  deleteAction: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginRight: 10,
    borderRadius: 15,
  },
});

export default SwipeableItem;

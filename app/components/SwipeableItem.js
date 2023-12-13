// SwipeableItem.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";
import Checkbox from "./Checkbox"; // Import the Checkbox component
import ShoppingListItemModal from "./ShoppingListItemModal"; // Import the modal component

const SwipeableItem = ({ item, onDelete, onEdit }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const renderRightActions = (_, dragX) => {
    const shouldShowButton = dragX < -100;

    if (shouldShowButton !== showDeleteButton) {
      setShowDeleteButton(shouldShowButton);
    }

    return (
      <View style={styles.rightActionContainer}>
        {showDeleteButton && (
          <TouchableHighlight
            underlayColor="#FFCE20"
            onPress={() => {
              onDelete(item);
              setShowDeleteButton(false);
            }}
          >
            <View style={styles.rightAction}>
              <Feather name="trash-2" size={30} color="#FFF" />
            </View>
          </TouchableHighlight>
        )}
      </View>
    );
  };

  const renderLeftActions = (_, dragX) => {
    const shouldShowButton = dragX > 180;

    if (shouldShowButton) {
      onEdit(item); // Trigger the edit action
      return null; // Returning null to avoid rendering default left actions
    }

    return null;
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor="#E0E0E0"
        onPress={() => setShowDeleteButton(false)}
        onLongPress={() => setShowDeleteButton(true)}
      >
        <View style={styles.shoppingListItem}>
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
    borderRadius: 20,
  },
  rightActionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  rightAction: {
    backgroundColor: "#FF4500",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
});

export default SwipeableItem;

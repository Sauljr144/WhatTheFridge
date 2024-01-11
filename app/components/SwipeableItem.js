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

const SwipeableItem = ({ item, onPress, onEdit, quantity, name, color, category, expirationDate }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const renderRightActions = (progress, dragX) => {
    const shouldShowButton = dragX < -100;

    // const handleDelete = () => {
    //   onDelete(item);
    // };
          return (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.editAction}>
                <TouchableOpacity onPress={() => onEdit(item)}>
                  <FontAwesome name="pencil" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.deleteAction}>
                <TouchableOpacity onPress={onPress}>
                  <MaterialIcons name="delete-outline" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          );
  };

  return (

<View style={styles.myView}>

<View>
  <Checkbox isChecked={isChecked} onChange={setIsChecked} />
</View>

    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor="#E0E0E0"
        onPress={() => setShowDeleteButton(false)}
        onLongPress={() => setShowDeleteButton(true)}
      >
        
        <View
          style={{ ...styles.shoppingListItem, backgroundColor: color }}
        >
          
          
          <Text style={styles.myText}>{name}</Text>
          <View>
            <Text style={styles.myText}>Qty: {quantity}</Text>
          <Text style={styles.myText}>Exp: {expirationDate}</Text>
          </View>
        

          {isEditModalVisible && (
            <ShoppingListItemModal
              isVisible={isEditModalVisible}
              onClose={() => setIsEditModalVisible(false)}
              addItemToShoppingList={(editedItem) => {
                setIsEditModalVisible(false);
              }}
              categoryNames={categoryNames}
              categoryColors={categoryColors}
              itemToEdit={itemToEdit}
              initialItem={item}
            />
          )}



        </View>
      </TouchableHighlight>
    </Swipeable>
</View>

  );
};

const styles = StyleSheet.create({
  myView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
  shoppingListItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderWidth: 0,
    padding: 20,
    marginVertical: 5,
    borderRadius: 15,
    width: 330,
    justifyContent: "space-between",
    
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
  myText:{
    fontWeight:"600",
  }
});

export default SwipeableItem;

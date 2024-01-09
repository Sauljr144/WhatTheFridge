
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
import ShoppingListItemColor from "../components/ShoppingListItemColor";
import SwipeableItem from "../components/SwipeableItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryPickerScreen from "../components/CategoryPickerScreen";
import { getData, sendData } from "../Services/DataService";
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';
const FridgeListScreen = () => {
  return (
    <>
     <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Fridge List</Text>
      </View>

    <View style={styles.Input}>
    <Input variant="outline" size="md" style={styles.InputField} isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
              placeholder='Search'/>
    </Input>
    </View>
      
      
      
    </>
  )
}
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
})
export default FridgeListScreen

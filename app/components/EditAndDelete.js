import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const EditAndDelete = ({ onPress1, onPress2 }) => {
  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
        <TouchableWithoutFeedback onPress={onPress1}>
          <View style={styles.editAction}>
            <FontAwesome name="pencil" size={20} color="white" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPress2}>
          <View style={styles.deleteAction}>
            <MaterialIcons name="delete-outline" size={20} color="white" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  editAction: {
    backgroundColor: "#05FF00",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: 50,
    paddingTop: 0,
  },
  deleteAction: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default EditAndDelete;

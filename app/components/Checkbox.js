// Checkbox.js
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <View style={styles.checkboxContainer}>
        {isChecked ? (
          <Feather name="check-circle" size={30} color="#05FF00" />
        ) : (
          <Feather name="circle" size={30} color="#FFCE20" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 50,
    
  },
});

export default Checkbox;

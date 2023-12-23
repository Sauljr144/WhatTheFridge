// Checkbox.js
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <View style={styles.checkboxContainer}>
        {isChecked ? (
          <Feather name="check-circle" size={24} color="#4CAF50" />
        ) : (
          <Feather name="circle" size={24} color="#ccc" />
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

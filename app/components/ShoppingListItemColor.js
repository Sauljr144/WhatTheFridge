import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const categoryColors = {
//   "Beverages": "#44BBFE",
//   "Dairy": "#FEF644",
//   "Fruits": "#44FEBB",
//   "Grains": "#FEA844",
//     "Meats": "#FE4444",
//     "Miscellaneous": "#C244FE",
//     "Veggies": "#ACFE44"
// };

const ShoppingListItemColor = ({name, quantity}) => {

    return (
        <View style={{ ...styles.item, backgroundColor: item.color }}>
          <Text>{name}</Text>
          <Text>{quantity}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    });

export default ShoppingListItemColor

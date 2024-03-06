import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ShoppingListItemColor = ({name, quantity}) => {

    return (
        <View style={{ ...styles.item}}>
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

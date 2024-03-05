import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FridgeListItemColor = ({name, quantity, expirationDate}) => {

    return (
        <View style={{ ...styles.item, backgroundColor: item.color }}>
          <Text>{name}</Text>
          <Text>{quantity}</Text>
          <Text>{expirationDate}</Text>

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

export default FridgeListItemColor

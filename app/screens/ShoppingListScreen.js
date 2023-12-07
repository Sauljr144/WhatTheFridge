import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  Pressable,
  HStack,
  Stack,
  Center,
  Select,
  CheckIcon,
  VStack,
  Button,
  Icon,
  IconButton,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/dev";

const ShoppingListScreen = () => {
  const [category, setCategory] = React.useState("");
  const icons = [
    {
      icon: <CheckIcon />,
      iconName: "check",
    },
  ];

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <ScrollView>
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      </View>
      <View>
        <HStack
          direction="row"
          mb="2.5"
          mt="1.5"
          space={4}
          justifyContent="space-between"
        >
          <HStack space={4}>
            <Center style={styles.subHeaderFont}>Sort By:</Center>

            {/* <Select
            selectedValue={category}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon/>,
            }}
            mt={1}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Select.Item label="Beverages" value="beverage" />
            <Select.Item label="Dairy" value="dairy" />
            <Select.Item label="Fruits" value="fruits" />
            <Select.Item label="Grains" value="grains" />
            <Select.Item label="Meats" value="meats" />
            <Select.Item label="Miscellaneous" value="misc" />
            <Select.Item label="View All" value="all" />
          </Select> */}
          </HStack>
          <HStack space={2}>
            <Center style={styles.addItemBtn} justifyContent="end">
              Add Item
            </Center>
            <IconButton
              icon={<Icon as={Feather} name="plus-circle" />}
              borderRadius="Full"
              onPress={() => <ShoppingListItemModal.js />}
            ></IconButton>
          </HStack>
        </HStack>
      </View>
    </ScrollView>
  );
};
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
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  shoppingHeader: {
    fontFamily: "Roboto_700Bold",
    fontWeight: 700,
    fontSize: 24,
  },
  subHeaderFont: {
    fontFamily: "Roboto_400Regular",
    fontWeight: 400,
    fontSize: 14,
  },
  addItemBtn: {
    padding: 25,
  },
});
export default ShoppingListScreen;

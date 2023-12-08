import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, } from "react-native";
import {
  HStack,
  Center,
  Icon,
  Button, ButtonIcon} from '@gluestack-ui/themed';
import { Feather } from "@expo/vector-icons";
import ShoppingListItemModal from "../components/ShoppingListItemModal";


const ShoppingListScreen = () => {
  const [category, setCategory] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false)
 



  return (
    <ScrollView>
      <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      </View>
      <View>
        <HStack
          direction="row"
          mb="3"
          mt="3"
          space="md"
          justifyContent="space-between"
        >
          <HStack space="md">
            <Center style={styles.subHeaderFont}>
              <Text>
                Sort By:
              </Text>
            </Center>



            {/* <Select>
<SelectTrigger variant="outline" size="md">
    <SelectInput placeholder="Select option" />
    <SelectIcon mr="$3">
      <Icon as={ChevronDownIcon} />
    </SelectIcon>
  </SelectTrigger>
</Select> */}
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
         
          <Center>
            <HStack space="md" alignItems="center">
              <Button
                onPress={() => setIsModalVisible(true)}
                variant="solid"
                size="md"
                borderRadius="Full"
                style={styles.addItemBtn}
              >
                <Text>Add Item</Text>
              </Button>
              <ButtonIcon
                as={Feather}
                name="plus-circle"
                icon={<Icon as={Feather} name="plus-circle" />}
                borderRadius="Full"
                onPress={() => setIsModalVisible(true)}
              />
            </HStack>
          </Center>
        </HStack>
      </View>
      {isModalVisible && <ShoppingListItemModal onClose={() => setIsModalVisible(false)} />}
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
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 24,
  },
  subHeaderFont: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 14,
  },
  addItemBtn: {
    padding: 25,
  },
});
export default ShoppingListScreen;

// CategoryPickerScreen.js

import React from 'react';
import CustomDropdown from './CustomDropDown';

const CategoryPickerScreen = ({ onSelectedCategory }) => {
  const categoryNames = [
    { label: "View All", value: null },
    { label: "Beverages", value: "Beverages" },
    { label: "Dairy", value: "Dairy" },
    { label: "Fruits", value: "Fruits" },
    { label: "Grains", value: "Grains" },
    { label: "Meats", value: "Meats" },
    { label: "Miscellaneous", value: "Miscellaneous" },
    { label: "Veggies", value: "Veggies" },
  ];

  return (
    <CustomDropdown
      items={categoryNames}
      onSelectItem={onSelectedCategory}
    />
  );
};

export default CategoryPickerScreen;
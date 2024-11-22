import React, { useState } from 'react';
import ChefHome from './ChefHome';
import MainMenu from './MainMenu';

export default function ParentComponent() {
  const [menuData, setMenuData] = useState([]);

  // Add new meal to menu
  const handleSaveMeal = (newMeal) => {
    setMenuData([...menuData, newMeal]);
  };

  return (
    <>
      <ChefHome chefInfo={{ email: 'chef@restaurant.com' }} onSaveMeal={handleSaveMeal} />
      <MainMenu menuData={menuData} />
    </>
  );
}

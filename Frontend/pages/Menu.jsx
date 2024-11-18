import { useEffect, useState } from "react";
import menuServices from "../src/services/menu"

const Menu = () => {
const [menuItems, setMenuItems]=useState([])

  useEffect(()=>{
    fetchMenuItems()
  },[])
  
 const fetchMenuItems=async()=>{
    const response = await menuServices.getMenuItems();
    console.log("fetched menu", response)
    setMenuItems(response);
  }
  
  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  ); 
 
  
};
export default Menu;

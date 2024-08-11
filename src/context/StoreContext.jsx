import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        let itemInfo = food_list.find((food) => food._id === parseInt(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[itemId];
        }
      }
    }
    console.log(totalAmount);
    return totalAmount;
  };

  const getItemFromCart = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += 1;
      }
    }
    return totalItem;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getItemFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

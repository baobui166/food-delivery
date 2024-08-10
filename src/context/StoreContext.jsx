import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
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

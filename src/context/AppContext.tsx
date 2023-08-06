import { useLocalStorage } from "@mantine/hooks";
import { IContext, IDish, IState, ItemKey } from "@src/models";
import React, { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<IContext>(null as any);

interface IAppContextProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  cart: [],
  wishlist: [],
  checkout: [],
};

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [state, setState] = useLocalStorage<IState>({
    key: "lexi",
    defaultValue: initialState,
  });

  const addItem = (key: ItemKey, dish: IDish, count?: number) => {
    setState((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], { ...dish, count: count || 1 }],
    }));
  };

  const removeItem = (key: ItemKey, dishId: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((item) => item.id !== dishId),
    }));
  };

  const increaseCount = (key: ItemKey, dishId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === dishId);
    items[index].count += 1;
    setState((prevState) => ({ ...prevState, [key]: items }));
  };

  const decreaseCount = (key: ItemKey, dishId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === dishId);
    if (items[index].count > 1) {
      items[index].count -= 1;
    }
    setState((prevState) => ({ ...prevState, [key]: items }));
  };

  const isAdded = (key: ItemKey, dishId: string): boolean => {
    return state[key].some((item) => item.id === dishId);
  };

  const resetItems = (key: ItemKey) => {
    setState((prevState) => ({ ...prevState, [key]: [] }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        isAdded,
        resetItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

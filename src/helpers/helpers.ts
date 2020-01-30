import { useContext, KeyboardEvent } from "react";
import { StoreContext } from "./store-provider";
import { RootStore } from "../stores/root";

export const onEnterPress = (cb: any) => {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      cb();
    }
  };
};

export const useStore = (): RootStore => useContext(StoreContext);

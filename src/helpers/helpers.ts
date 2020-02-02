import { useContext, KeyboardEvent, useRef, useEffect } from "react";
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

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

import { createContext } from "react";
import { RootStore } from "../stores/root";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;

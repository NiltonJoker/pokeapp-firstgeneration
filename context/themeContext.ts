import { createContext } from "react";

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}



export const initialState = {
  dark: true,
};


export const ThemeContext = createContext<Partial<IThemeContext>>(initialState);

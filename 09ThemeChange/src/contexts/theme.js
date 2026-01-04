import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//theme provider ko direct import kar dunnga rapper ki tarah
export const ThemeProvider = ThemeContext.Provider

//jaha pau use context use karna raha wha use theme kar lunga
export default function useTheme(){
    return useContext(ThemeContext)
}
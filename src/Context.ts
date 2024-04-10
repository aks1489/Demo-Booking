import { createContext, useContext } from "react";
import { Theme } from "./App";

export const ThemeContext = createContext<Theme | undefined>(undefined)

export function useThemeContext () {
    const theme = useContext(ThemeContext)

    if(theme === undefined) {
        throw new Error(`useThemeContext must use uithin ThemeContext`)
        
    }

    return theme
}
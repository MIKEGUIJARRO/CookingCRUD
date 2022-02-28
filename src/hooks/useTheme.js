import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        // In case we use this hook outside the theme provide
        // we are going to throw an error
        throw new Error('useTheme() must be used inside a <ThemeProvider />')
    }

    return context;
}
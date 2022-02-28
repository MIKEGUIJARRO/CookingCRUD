import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    // const [state, dispatchFn] =  useReducer(fn, initialValue);
    // dispatchFn => It allow us to change the state of our reducer
    const [state, dispatchFn] = useReducer(themeReducer, {
        color: '#ef476f',
        mode: 'light'
    });

    const changeColor = (color) => {
        // dispatchFn({dispatchAction})
        // dispatchAction => {type: type of state change , payload}
        dispatchFn({ type: 'CHANGE_COLOR', payload: color });
    }

    const changeMode = (mode) => {
        dispatchFn({ type: 'CHANGE_MODE', payload: mode });
    }


    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
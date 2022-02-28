import { useTheme } from '../hooks/useTheme';

// Assets

import modeIcon from '../assets/mode-icon.svg';

// Styles

import './ThemeSelector.css'

const themeColors = ['#ef476f', '#6694FF', '#118ab2']

export default function ThemeSelector() {

    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }

    console.log(mode)


    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                    src={modeIcon}
                    alt='ModeIcon'
                    onClick={toggleMode}
                    style={{filter: mode=== 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />

            </div>
            <div className='theme-buttons'>
                {themeColors.map((color) => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}

import { useState, useEffect } from "react";

import Icon from '../../../assets/images/colorScheme.svg';

import './ColorSchemeButton.scss';

function ColorSchemeButton() {
    const [needChange, setNeedChange] = useState(false);

    useEffect(() => {
        let isThemeDark = isStorageThemeDark();
        if ((needChange && !isThemeDark) || (!needChange && isThemeDark)) {
            setDarkTheme();
        }
        else {
            setLightTheme();
        }
        setNeedChange(false);
    }, [needChange]);

    function setDarkTheme() {
        document.body.classList.add('dark');
        setThemeToStorage('dark');
    }

    function setLightTheme() {
        document.body.classList.remove('dark');
        setThemeToStorage('light');
    }

    function isStorageThemeDark() {
        let storageTheme = localStorage.getItem('theme');
        return storageTheme === 'dark';
    }

    function setThemeToStorage(theme) {
        let storageTheme = localStorage.getItem('theme');
        if (storageTheme !== theme) {
            localStorage.setItem('theme', theme);
        }
    }

    function inverseColorTheme() {
        setNeedChange(true);
    }

    return (
        <button onClick={inverseColorTheme} className="change-color-scheme">
            <img src={Icon} className="color-scheme-icon"></img>
        </button>
    );
}

export default ColorSchemeButton;
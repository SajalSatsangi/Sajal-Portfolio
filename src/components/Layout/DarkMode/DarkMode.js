import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const [theme, setTheme] = useState("dark-theme");
    const toggleTheme = () => {
        if (theme == "light-theme") {
            setTheme('dark-theme')
        }
        else{
            setTheme('light-theme')
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='light_mode'>
            <input
                className='light_mode_input'
                type='checkbox'
                id='lightmode-toggle'
            />
            <label className='light_mode_label' for='lightmode-toggle'>
                <Moon />
                <Sun />
            </label>
        </div>
    );
};

export default DarkMode;

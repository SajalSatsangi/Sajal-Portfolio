import React, { useLayoutEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const [theme, setTheme] = useState("dark-theme");
    const [pageTheme, setPageTheme] = useState("home-page-dark");
    const [sidebarTheme, setSidebarTheme] = useState("nav-bar-dark");
    const [aboutTheme, setAboutTheme] = useState("about-page");
    const [contactTheme, setContactTheme] = useState("contact-page");
    const [cubeTheme, setCubeTheme] = useState("cubespinner");
    const [iframeTheme, setIframeTheme] = useState("dark-map");
    const [contactFormTheme, setContactFormTheme] = useState("contact-form");
    const [infoMapTheme, setInfoMapTheme] = useState("info-map");

    const toggleTheme = () => {
        const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
        setTheme(newTheme);
        setPageTheme(newTheme === "light-theme" ? "home-page-light" : "home-page-dark");
        setSidebarTheme(newTheme === "light-theme" ? "nav-bar-light" : "nav-bar-dark");
        setAboutTheme(newTheme === "light-theme" ? "about-page-light" : "about-page");
        setContactTheme(newTheme === "light-theme" ? "contact-page-light" : "contact-page");
        setCubeTheme(newTheme === "light-theme" ? "cubespinnerlight" : "cubespinner");
        setIframeTheme(newTheme === "light-theme" ? "dark-map-light" : "dark-map");
        setContactFormTheme(newTheme === "light-theme" ? "contact-form-light" : "contact-form");
        setInfoMapTheme(newTheme === "light-theme" ? "info-map-light" : "info-map");
    };

    useLayoutEffect(() => {
        document.body.className = theme;

        const homePageElement = document.getElementById("homePage");
        if (homePageElement) {
            homePageElement.className = pageTheme;
        }

        const sidebarElement = document.getElementById("nav-bar");
        if (sidebarElement) {
            sidebarElement.className = sidebarTheme;
        }

        const aboutElement = document.getElementById("about-hover");
        if (aboutElement) {
            aboutElement.className = aboutTheme;
        }

        const contactElement = document.getElementById("contact-hover");
        if (contactElement) {
            contactElement.className = contactTheme;
        }

        const cubeElement = document.getElementById("dark-cube");
        if (cubeElement) {
            cubeElement.className = cubeTheme;
        }

        const iframeElement = document.getElementById("iframe");
        if (iframeElement) {
            iframeElement.className = iframeTheme;
        }

        const contactFormElement = document.getElementById("contact-form");
        if (contactFormElement) {
            contactFormElement.className = contactFormTheme;
        }

        const infoMapElement = document.getElementById("infomap");
        if (infoMapElement) {
            infoMapElement.className = infoMapTheme;
        }
    }, [theme, pageTheme, sidebarTheme, aboutTheme, contactTheme, cubeTheme, iframeTheme, contactFormTheme, infoMapTheme]);

    return (
        <div className='light_mode'>
            <input
                className='light_mode_input'
                type='checkbox'
                id='lightmode-toggle'
            />
            <label onClick={toggleTheme} className='light_mode_label' htmlFor='lightmode-toggle'>
                <Moon />
                <Sun />
            </label>
        </div>
    );
};

export default DarkMode;

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
    const [hoverExpTheme, setHoverExpTheme] = useState("dark-hover-exp");
    const [textSphereTheme, setTextSphereTheme] = useState("text-sphere");
    const [mainSocialTheme, setMainSocialTheme] = useState("main-social-2-container");
    const [mainsocialThemeC, setMainsocialCTheme] = useState("mainsocial");
    const [mainsocialTheme, setMainsocialTheme] = useState("mainsocial");
    const [dividerTheme, setDividerTheme] = useState("Divider");
    const [togglebuttonTheme, setTogglebuttonTheme] = useState("Togglebutton");
    const [togglebutton2Theme, setTogglebutton2Theme] = useState("Togglebutton2");

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
        setHoverExpTheme(newTheme === "light-theme" ? "light-hover-exp" : "dark-hover-exp");
        setTextSphereTheme(newTheme === "light-theme" ? "text-sphere-light" : "text-sphere");
        setMainSocialTheme(newTheme === "light-theme" ? "main-social-2-container-light" : "main-social-2-container");
        setMainsocialCTheme(newTheme === "light-theme" ? "mainsocialC-light" : "mainsocialC");
        setMainsocialTheme(newTheme === "light-theme" ? "mainsocial-light" : "mainsocial");
        setDividerTheme(newTheme === "light-theme" ? "Divider-light" : "Divider");
        setTogglebuttonTheme(newTheme === "light-theme" ? "TogglebuttonLight" : "Togglebutton");
        setTogglebutton2Theme(newTheme === "light-theme" ? "Togglebutton2Light" : "Togglebutton2");
    };

    useLayoutEffect(() => {
        document.body.className = theme;

        const setPageTheme = (id, theme) => {
            const element = document.getElementById(id);
            if (element) {
                element.className = theme;
            }
        };

        setPageTheme("homePage", pageTheme);
        setPageTheme("nav-bar", sidebarTheme);
        setPageTheme("about-hover", aboutTheme);
        setPageTheme("contact-hover", contactTheme);
        setPageTheme("dark-cube", cubeTheme);
        setPageTheme("iframe", iframeTheme);
        setPageTheme("contact-form", contactFormTheme);
        setPageTheme("infomap", infoMapTheme);
        setPageTheme("hover-exp", hoverExpTheme);
        setPageTheme("textSphere", textSphereTheme);
        setPageTheme("main-social", mainSocialTheme);
        setPageTheme("mainsocial", mainsocialTheme);
        setPageTheme("mainsocialC", mainsocialThemeC);
        setPageTheme("Divider1", dividerTheme);
        setPageTheme("Divider2", dividerTheme);
        setPageTheme("Divider3", dividerTheme);
        setPageTheme("Divider4", dividerTheme);
        setPageTheme("tb1", togglebuttonTheme);
        setPageTheme("tb2", togglebuttonTheme);
        setPageTheme("tb3", togglebuttonTheme);
        setPageTheme("tb4", togglebuttonTheme);
        setPageTheme("tb5", togglebuttonTheme);
        setPageTheme("tb21", togglebutton2Theme);
        setPageTheme("tb22", togglebutton2Theme);
        setPageTheme("tb23", togglebutton2Theme);
        setPageTheme("tb24", togglebutton2Theme);
        setPageTheme("tb25", togglebutton2Theme);

    }, [theme, pageTheme, sidebarTheme, aboutTheme, contactTheme, cubeTheme, iframeTheme, contactFormTheme, infoMapTheme, hoverExpTheme, textSphereTheme, mainSocialTheme, mainsocialThemeC, mainsocialTheme, dividerTheme, togglebuttonTheme, togglebutton2Theme]);

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

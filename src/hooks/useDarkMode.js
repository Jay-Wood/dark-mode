import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode") 
        } else document.body.classList.remove("dark-mode");
        
        // darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    
    //[darkMode] in dep. array means it'll re-render when useDarkMode function is called     
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;
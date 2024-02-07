import { useEffect, useState } from "react";
import { Container } from "./styles";

import { useTranslation } from "react-i18next";

export function FlagSwitch () {
    const { i18n } = useTranslation("global");
    const [isChecked, setIsChecked] = useState(localStorage.getItem("@portfolio-cvitor:isChecked") === 'true');

    function toggleLanguage () {
        const selectedLanguage = !isChecked ? "pt" : "en"
        i18n.changeLanguage(selectedLanguage)

        localStorage.setItem("@portfolio-cvitor:isChecked", !isChecked);
        
        setIsChecked(prev => !prev);
    }

    useEffect(() => {
        const selectedLanguage = isChecked ? "pt" : "en"
        i18n.changeLanguage(selectedLanguage)
    }, []);

    return (
        <Container
            data-first-lang="PT" 
            data-second-lang="EN"
        >
            <input 
                type="checkbox" 
                id="check1"
                checked={isChecked}
                onChange={ toggleLanguage }
            />

            <label 
                htmlFor="check1"
            >

            </label>

        </Container>
    )
}
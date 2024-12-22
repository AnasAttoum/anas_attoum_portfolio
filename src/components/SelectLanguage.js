import { useEffect, useState } from "react";
import { languages } from "../data/languages";
import cookies from "js-cookie";

import styles from "../styles/selectLanguage.module.css";
import i18next from "i18next";

export default function SelectLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const currentLanguageCode = cookies.get("i18next") || "en";
    if (currentLanguageCode) setSelectedLanguage(currentLanguageCode);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    i18next.changeLanguage(lang);
  };

  return (
    <div tabIndex={0} onBlur={() => setIsOpen(false)}>
      <div onClick={toggleDropdown} className={styles.selectLanguage}>
        <span
          className={`flag-icon flag-icon-${
            languages.find(({ code }) => {
              return code === selectedLanguage;
            }).country_code
          }`}
        ></span>
      </div>

      <div className={styles.languagesList} style={isOpen?{}:{display:'none'}}>
      {isOpen && (
          languages.map(({ code, name, country_code }) => {
            return (
              <div
                key={code}
                value={code}
                style={selectedLanguage === code ? { opacity: ".5", cursor: "not-allowed" } : { cursor: 'pointer' }}
                onClick={()=>handleLanguageChange(code)}
              >
                <span className={`flag-icon flag-icon-${country_code}`}></span>
                <span style={{fontSize:'small'}}> {name}</span>
              </div>
            );
          })
        )}
        </div>
    </div>
  );
}
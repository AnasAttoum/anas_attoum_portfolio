import { useEffect, useRef } from "react";

import styles from '../styles/header.module.css';
import Logo from "./Logo";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const header = useRef();
    const showListIcon = useRef();
    const list = useRef()

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if(header.current){
            if (prevScrollpos >= currentScrollPos) {
              header.current.style.top = "0";
              header.current.style.transition = "all .3s";
            } else {
              header.current.style.top = "-80px";
              header.current.style.transition = "all .3s";
            }
            prevScrollpos = currentScrollPos;
        }
    }


    useEffect(() => {
        const headerElements = document.querySelectorAll(`.${styles.listHeader}>div`);
        const sections = document.querySelectorAll('section');

        let curr = 'home';
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                if (window.scrollY >= (section.offsetTop - section.clientHeight / 4)) {
                    curr = section.id.slice(0,-1);
                }
            })

            headerElements.forEach(element => {
                if (element.className.includes(curr)) {
                    headerElements.forEach((value) => {
                        value.classList.remove(styles.active)
                    })
                    element.classList.add(styles.active)
                }
            })

        })
    })

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, []);

    const toggleList = () => {
        if (window.screen.width <= 1200) {
            if (list.current.classList.contains(styles.clickIcon)){
                list.current.classList.remove(styles.clickIcon)
                list.current.classList.add(styles.clickIconRemove)
            }
            else{
                list.current.classList.add(styles.clickIcon);
                list.current.classList.remove(styles.clickIconRemove);
            }

            // showListIcon.current.style.visibility = 'hidden'
        }
    }

    const removeList = () => {
        if (window.screen.width <= 1200) {
            // showListIcon.current.style.visibility = "visible";
            list.current.classList.remove(styles.clickIcon)
            list.current.classList.add(styles.clickIconRemove)
        }
    }

    const { t } = useTranslation()


    return (
        <div ref={header} id="header" className={styles.header}>

            <Logo />

            <div className={styles.selectLanguageOnSmallScreen}>
                <DarkModeToggle />
                <SelectLanguage top={80}/>
            </div>

            <div>
                <div className={styles.iconResponsive} onClick={toggleList} ref={showListIcon}>
                    <div className={styles.icon}></div>
                </div>

                <div className={styles.listHeader} ref={list} onClick={removeList}>
                    <div className={styles.iconResponsive2}>
                        <div className={styles.frameIcon2}>
                            <div className={styles.icon2}></div>
                        </div>
                    </div>
                    <div className={`home-nav ${styles.active}`}>
                        <a href="#home">
                            {t("home").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                        </a>
                    </div>

                    <div className='about-nav'>
                        <a href="#about">
                            {t("about").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                        </a>
                    </div>

                    <div className='skills-nav'>
                        <a href="#skills">
                            {t("skills").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                        </a>
                    </div>

                    <div className='projects-nav'>
                        <a href="#projects">
                            {t("projects").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                        </a>
                    </div>

                    <div className='contact-nav'>
                        <a href="#contact">
                            {t("contact").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                        </a>
                    </div>
                </div>


            </div>

            <div className={styles.selectLanguageOnLargeScreen}>
                <DarkModeToggle />
                <SelectLanguage />
            </div>
            </div>
    );
}
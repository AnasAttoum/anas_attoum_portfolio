import { useEffect, useRef } from "react";

import styles from '../styles/header.module.css';
import Logo from "./Logo";

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

    const showList = () => {
        if (window.screen.width <= 1000) {
            list.current.classList.remove(styles.clickIconRemove)
            list.current.classList.add(styles.clickIcon)

            showListIcon.current.style.display = 'none'
        }
    }

    const removeList = () => {
        if (window.screen.width <= 1000) {
            showListIcon.current.style.display = 'inline-block'
            list.current.classList.remove(styles.clickIcon)
            list.current.classList.add(styles.clickIconRemove)
        }
    }


    return (
        <div ref={header} id="header" className={styles.header}>

            <Logo />

            <div>
                <div className={styles.iconResponsive} onClick={showList} ref={showListIcon}>
                    <div className={styles.icon}></div>
                </div>

                <div className={styles.listHeader} ref={list} onClick={removeList}>
                    <div className={styles.iconResponsive2}>
                        <div className={styles.frameIcon2}>
                            <div className={styles.icon2}></div>
                        </div>
                    </div>
                    <div className={`home-nav ${styles.active}`}>
                        <a href="#home"><span>H </span><span>O </span><span>M </span><span>E</span></a>
                    </div>

                    <div className='about-nav'>
                        <a href="#about"><span>A </span><span>B </span><span>O </span><span>U </span><span>T</span></a>
                    </div>

                    <div className='skills-nav'>
                        <a href="#skills"><span>S </span><span>K </span><span>I </span><span>L </span><span>L </span><span>S</span></a>
                    </div>

                    <div className='projects-nav'>
                        <a href="#projects"><span>P </span><span>R </span><span>O </span><span>J </span><span>E </span><span>C </span><span>T </span><span>S</span></a>
                    </div>

                    <div className='contact-nav'>
                        <a href="#contact"><span>C </span><span>O </span><span>N </span><span>T </span><span>A </span><span>C </span><span>T</span></a>
                    </div>
                </div>


            </div>


        </div>
    );
}
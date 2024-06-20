import { useEffect } from "react";

import styles from '../Styles/Header.module.css';
import Logo from "../Components/Logo";

export default function Header() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
            document.getElementById("header").style.top = "0";
            document.getElementById("header").style.transition = "all .3s";
        } else {
            document.getElementById("header").style.top = "-80px";
            document.getElementById("header").style.transition = "all .3s";
        }
        prevScrollpos = currentScrollPos;
    }


    useEffect(() => {
        const headerElements = document.querySelectorAll(`.${styles.listHeader}>div`);
        const sections = document.querySelectorAll('section');

        let curr = 'home';
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                if (window.scrollY >= (section.offsetTop - section.clientHeight / 3)) {
                    curr = section.id;
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


    return (
        <div id="header" className={styles.header}>

            <Logo/>

            <div>
                <div className={styles.iconResponsive}>
                    <div className={styles.icon}></div>
                </div>

                <div className={styles.listHeader}>
                    <div className={`home-nav ${styles.active}`}>
                        <a href="#home"><span>H </span><span>O </span><span>M </span><span>E</span></a>
                    </div>

                    <div className='about-nav'>
                        <a href="#about"><span>A </span><span>B </span><span>O </span><span>U </span><span>T</span></a>
                    </div>

                    <div className='skills-nav'>
                        <a href="#skills"><span>S </span><span>K </span><span>I </span><span>L </span><span>L
                        </span><span>S</span></a>
                    </div>

                    <div className='projects-nav'>
                        <a href="#projects"><span>P </span><span>R </span><span>O </span><span>J </span><span>E </span><span>C
                        </span><span>T </span><span>S</span></a>
                    </div>

                    <div className='contact-nav'>
                        <a href="#contact"><span>C </span><span>O </span><span>N </span><span>T </span><span>A </span><span>C
                        </span><span>T</span></a>
                    </div>
                </div>


            </div>


        </div>
    );
}
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import styles from '../styles/moreDetailsHeader.module.css';
import Logo from './Logo';

export default function MoreDetailsHeader(props) {

    const title = useRef();
    const MoreDetailsHeader = useRef();

    useEffect(()=>{
        if (props.title){
            title.current.innerHTML=props.title
        }
    },[props.title])

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos >= currentScrollPos) {
            MoreDetailsHeader.current.style.top = "0";
            MoreDetailsHeader.current.style.transition = "all .3s";
        } else {
            MoreDetailsHeader.current.style.top = "-80px";
            MoreDetailsHeader.current.style.transition = "all .3s";
        }
        prevScrollpos = currentScrollPos;
    }
    
    const { t } = useTranslation();

    return (
        <div ref={MoreDetailsHeader} className={styles.header}>

            <Link to={'..'} className={styles.back}>
                <div className={styles.icon}></div>
            </Link>

            <Logo />

            <p className={styles.title} ref={title}></p>


            <div className={styles.buttons}>
                {props.codeURL!==''? <div>
                    <Link to={props.codeURL} target="_blank">
                        {t("code").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                    </Link>
                </div>:null}

                {props.demoURL!==''? <div>
                    <Link to={props.demoURL} target="_blank">
                        {t("demo").toUpperCase().split("").map((char, index)=>{return <span key={index}>{char} </span>;})}
                    </Link>
                </div>:null}
            </div>

        </div>
    );
}
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Components/Logo';
import styles from '../Styles/MoreDetailsHeader.module.css';

export default function MoreDetailsHeader(props) {

    const title=useRef()

    useEffect(()=>{
        if (props.title){
            title.current.innerHTML=props.title
        }
    },[props.title])

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos) {
            document.getElementById("MoreDetailsHeader").style.top = "0";
            document.getElementById("MoreDetailsHeader").style.transition = "all .3s";
        } else {
            document.getElementById("MoreDetailsHeader").style.top = "-80px";
            document.getElementById("MoreDetailsHeader").style.transition = "all .3s";
        }
        prevScrollpos = currentScrollPos;
    }
    

    return (
        <div id="MoreDetailsHeader" className={styles.header}>

            <Link to={'..'} className={styles.back}>
                <div className={styles.icon}></div>
            </Link>

            <Logo />

            <p className={styles.title} ref={title}></p>

            <div className={styles.buttons}>
                {props.codeURL!==''? <div>
                    <Link to={props.codeURL} target="_blank"><span>C </span><span>O </span><span>D </span><span>E</span></Link>
                </div>:null}

                {props.demoURL!==''? <div>
                    <Link to={props.demoURL} target="_blank"><span>D </span><span>E </span><span>M </span><span>O</span></Link>
                </div>:null}
            </div>

        </div>
    );
}
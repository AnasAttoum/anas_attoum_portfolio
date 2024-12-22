import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useRef } from 'react';

import styles from '../styles/moreDetailsAboutProject.module.css';
import { useTranslation } from 'react-i18next';

export default function MoreDetailsAboutProject(props) {

    const {ref:About , inView:aboutInView , entry:aboutEntry} = useInView()
    const text = useRef()
    const { t } = useTranslation()

    useEffect(()=>{
        if(props.text){
            text.current.innerHTML = t(props.text)
        }
    },[props.text, t])

    useEffect(()=>{

        if(aboutInView){
            aboutEntry.target.className += ' moveProjectsAnimation'
        }
    },[
        aboutInView,aboutEntry
    ])

    return (
        <div className={styles.container} ref={About}>
            <div className={styles.logo}>
                <div style={{backgroundImage: props.logo}}></div>
            </div>

            <div className={styles.about} ref={text}></div>
        </div>
    );
}
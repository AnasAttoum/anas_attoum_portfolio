import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useRef } from 'react';

import styles from '../Styles/MoreDetailsAboutProject.module.css';

export default function MoreDetailsAboutProject(props) {

    const {ref:About , inView:aboutInView , entry:aboutEntry} = useInView()
    const text = useRef()

    useEffect(()=>{
        if(props.text){
            text.current.innerHTML=props.text
        }
    },[props.text])

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
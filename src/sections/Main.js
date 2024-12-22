import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom'

import styles from '../styles/main.module.css';
import { useTranslation } from "react-i18next";

export default function Main() {

    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: p1, inView: p1_IsInView, entry: p1Entry } = useInView()
    const { ref: p2, inView: p2_IsInView, entry: p2Entry } = useInView()
    const { ref: p3, inView: p3_IsInView, entry: p3Entry } = useInView()
    const { ref: pic, inView: pic_IsInView, entry: picEntry } = useInView()

    const { t } = useTranslation()

    useEffect(() => {
        if (section_IsInView) {


            if (p1_IsInView) {
                p1Entry.target.className += ' toRightAnimation'
            }
            if (p2_IsInView) {
                p2Entry.target.className += ' toTopAnimation'
            }
            if (p3_IsInView) {
                p3Entry.target.className += ' toLeftAnimation'
            }
            if (pic_IsInView) {
                picEntry.target.className += ' opacityAnimation'
            }
        }
    }, [
        section_IsInView, p1Entry, p2Entry, p3Entry, picEntry,
        p1_IsInView, p2_IsInView, p3_IsInView, pic_IsInView
    ])


    return (
        <>
            <span id="home"></span>
            <section id="home2" className={styles.main} ref={section}>
                <div className={styles.intro}>

                    <p ref={p1}>
                        {t("hi")} <span style={{ color: 'var(--mainColor)', fontWeight: '600' }}>Anas Attoum</span> <br />
                        {t("frontEndDev")}
                    </p>

                    <p className={styles.endIntro} ref={p2}>{t("letsWorkTogether")}</p>

                    <a href={process.env.PUBLIC_URL + '/Anas_Attoum_CV.pdf'} download='Anas_Attoum_CV.pdf' className={styles.downloadCV} ref={p3}>{t("downloadCV")}</a>

                </div>

                <div className={styles.pic} ref={pic}>
                    <div></div>
                    <div className={styles.icons}>
                        <Link to={'https://github.com/AnasAttoum'} target="_blank" className={styles.link}><div></div></Link>
                        <Link to={'https://www.linkedin.com/in/anas-attoum'} target="_blank" className={styles.link}><div></div></Link>
                        <Link to={'mailto:AnasAttoum.12321@gmail.com'} target="_blank" className={styles.link}><div></div></Link>
                        <Link to={'tel:+963951-931-846'} target="_blank" className={styles.link}><div></div></Link>
                    </div>
                </div>

            </section>
        </>
    );
}
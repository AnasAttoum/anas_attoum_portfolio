import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from '../styles/about.module.css';
import { useTranslation } from "react-i18next";

export default function About() {
    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: pic, inView: pic_IsInView, entry: picEntry } = useInView()
    const { ref: p1, inView: p1_IsInView, entry: p1Entry } = useInView()
    const { ref: p2, inView: p2_IsInView, entry: p2Entry } = useInView()

    useEffect(() => {
        if (section_IsInView) {
            if (pic_IsInView) {
                picEntry.target.className += ' opacityAnimation'
            }
            if (p1_IsInView) {
                p1Entry.target.className += ' letterSpacingAnimation'
            }
            if (p2_IsInView) {
                p2Entry.target.className += ' toRightAnimation'
            }
        }
    }, [
        section_IsInView, pic_IsInView, p1_IsInView, p2_IsInView,
        p1Entry, p2Entry, picEntry
    ])

    const { t } = useTranslation()

    return (
        <>
            <span id="about" style={{visibility:"hidden" }}>about</span>
            <section id="about2" className={styles.about} ref={section}>
                <div className={styles.picAbout} ref={pic}>
                    <div></div>
                </div>

                <div id="about" className={styles.aboutContainer}>


                    <p ref={p1}>
                        {t("bit")}
                    </p>
                    <p ref={p2}>
                        {t("aboutMe")}
                    </p>


                </div>
            </section>
        </>
    );
}
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from '../Styles/About.module.css';

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


    // const { ref: section, inView: section_IsInView } = useInView()
    // const p1 = useRef()
    // const p2 = useRef()
    // const pic = useRef()

    // useEffect(() => {
    //     if (section_IsInView) {
    //         p1.current.className += ' letterSpacingAnimation'
    //         p2.current.className += ' toRightAnimation'
    //         pic.current.className += ' opacityAnimation'
    //         pic.current.style = `animation-delay: 2s`
    //     }
    // }, [section_IsInView])

    return (
        <section id="about" className={styles.about} ref={section}>
            <div className={styles.picAbout} ref={pic}>
                <div></div>
            </div>

            <div id="about" className={styles.aboutContainer}>


                <p ref={p1}>
                    A Bit About Me
                </p>
                <p ref={p2}>
                    I have always been amazed at how web sites interface are made, That is what got me into learning Front-End
                    development so i started working on web design using Figma after that I focused on mastering ReactJS to convert
                    designs to reality, so it would become an actual interactive web pages.
                    As an IT-Engineer i believe that leaning AI and machine learning will open doors to make our websites more
                    dynamic and interactive.
                </p>


            </div>
        </section>
    );
}
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'

import styles from '../styles/contact.module.css';
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: title, inView: title_IsInView, entry: titleEntry } = useInView()

    useEffect(() => {


        if (section_IsInView) {
            if (title_IsInView) {
                titleEntry.target.className += ' letterSpacingAnimation'
            }
        }
    }, [section_IsInView, title_IsInView, titleEntry])


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1gv52m', 'template_1fs9jbt', e.target, 'ohOS6QlC-qLfiY2AG')

        e.target.childNodes.forEach(element => {
            element.value = ''
        });
    }

    const { t } = useTranslation()

    return (
        <>
            <span id="contact" style={{ visibility:"hidden" }}>contact</span>
            <section id="contact2" className={styles.contact} ref={section}>
                <div className={styles.titleContact} ref={title}>{t("contactMe")}</div>

                <div className={styles.containerContact}>

                    <div className={styles.leftContact}>
                        <div className={styles.backdrop}>
                            <h3>
                                <Trans i18nKey="letsConnect" components={{ br: <br /> }} />
                            </h3>
                            <h6>
                                <Trans i18nKey="dropMessage" components={{ br: <br /> }} />
                            </h6>
                            <div className={styles.icons}>
                                <Link to={'https://github.com/AnasAttoum'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'https://www.linkedin.com/in/anas-attoum'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'mailto:AnasAttoum.12321@gmail.com'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'tel:+963951-931-846'} target="_blank" className={styles.link}><div></div></Link>
                            </div>
                            <p>{t("codeWith")}</p>
                        </div>

                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>

                    </div>

                    <div className={styles.rightContact}>
                        <form onSubmit={sendEmail}>
                            <label htmlFor="name">
                                {t("name").split("").map((char)=>{return <span>{char} </span>;})}
                            </label>
                            <input type="text" id="name" name="name" /><br/>

                            {/* <label htmlFor="number">N u m b e r</label>
                            <input type="number" id="number" name="number" /><br/> */}

                            <label htmlFor="number">
                                {t("email").split("").map((char)=>{return <span>{char} </span>;})}
                            </label>
                            <input type="email" id="email" name="email" /><br/>

                            <label htmlFor="message">
                                {t("message").split("").map((char)=>{return <span>{char} </span>;})}
                            </label>
                            <textarea id="message" name="message" rows="5"></textarea>

                            <div>
                                <button>
                                    {t("submit")}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </>
    );
}
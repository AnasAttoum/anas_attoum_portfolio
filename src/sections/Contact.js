import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'

import styles from '../styles/contact.module.css';

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

    return (
        <>
            <span id="contact" style={{ visibility:"hidden" }}>contact</span>
            <section id="contact2" className={styles.contact} ref={section}>
                <div className={styles.titleContact} ref={title}>Contact Me</div>

                <div className={styles.containerContact}>

                    <div className={styles.leftContact}>
                        <div className={styles.backdrop}>
                            <h3>Let’s Connect!<br />
                                and make something amazing together</h3>
                            <h6>I’m currently looking for new opportunities, whether it’s a part-time of full-time position, my inbox is always open.<br /> Drop me a message!
                            </h6>
                            <div className={styles.icons}>
                                <Link to={'https://github.com/AnasAttoum'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'https://www.linkedin.com/in/anas-attoum'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'mailto:AnasAttoum.12321@gmail.com'} target="_blank" className={styles.link}><div></div></Link>
                                <Link to={'tel:+963951-931-846'} target="_blank" className={styles.link}><div></div></Link>
                            </div>
                            <p>Code with ❤️</p>
                        </div>

                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>

                    </div>

                    <div className={styles.rightContact}>
                        <form onSubmit={sendEmail}>
                            <label htmlFor="name">N a m e</label>
                            <input type="text" id="name" name="name" /><br/>

                            {/* <label htmlFor="number">N u m b e r</label>
                            <input type="number" id="number" name="number" /><br/> */}

                            <label htmlFor="number">E m a i l</label>
                            <input type="email" id="email" name="email" /><br/>

                            <label htmlFor="message">M e s s a g e</label>
                            <textarea id="message" name="message" rows="5"></textarea>

                            <div>
                                <button>S u b m i t</button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </>
    );
}
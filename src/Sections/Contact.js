import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'

import styles from '../Styles/Contact.module.css';

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


    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_o1gv52m', 'template_1fs9jbt', e.target, 'ohOS6QlC-qLfiY2AG')
        
        e.target.childNodes.forEach(element => {
            element.value=''
        });
    }

    return (
        <section id="contact" className={styles.contact} ref={section}>
            <div className={styles.titleContact} ref={title}>Contact Me</div>

            <div className={styles.containerContact}>

                <div className={styles.leftContact}>
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="number">Number</label>
                        <input type="number" id="number" name="number" />

                        <label htmlFor="number">Email</label>
                        <input type="email" id="email" name="email" />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5"></textarea>

                        <div>
                            <button>S u b m i t</button>
                        </div>
                    </form>
                </div>

                <div className={styles.rightContact}>
                    <div className={styles.backdrop}>
                        <h3>Let’s Connect!<br />
                            and make something amazing together</h3>
                        <h6>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just
                            want to say hi, I’ll try my best to get back to you!
                        </h6>
                        <div className={styles.icons}>
                            <Link to={'https://github.com/AnasAttoum'} target="_blank" className={styles.link}><div></div></Link>
                            <Link to={'https://www.linkedin.com/in/anas-attoum-ab17781a6'} target="_blank" className={styles.link}><div></div></Link>
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

            </div>

        </section>
    );
}
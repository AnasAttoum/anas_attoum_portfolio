import { useEffect } from "react";

import Header from "../components/Header";
import Main from "../sections/Main";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function MainPage() {

    useEffect(() => {
        document.title = 'Anas Attoum | Portfolio'
    }, [])
    
    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
}
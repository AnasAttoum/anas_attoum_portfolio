import { useEffect } from "react";

import Header from "../Sections/Header";
import Main from "../Sections/Main";
import About from "../Sections/About";
import Skills from "../Sections/Skills";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

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
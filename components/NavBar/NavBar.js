import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navButton from '../../public/navButton.png';


export default function NavBar() {

    const [navState, setNavState] = useState(false);

    const navOpen = () => {

        setNavState(!navState);
        console.log("test");

    }


    return (

        <>
        
        <nav className={ navState ? "openNav" : ""}>

            <Link href="/#accueil"><a onClick={navOpen}>Accueil</a></Link>
            <Link href="/#presentation"><a onClick={navOpen}>Présentation</a></Link>
            <Link href="/#competences"><a onClick={navOpen}>Compétences</a></Link>
            <Link href="/honoraires"><a onClick={navOpen}>Honoraires</a></Link>
            <Link href="/actualites"><a onClick={navOpen}>Actualité</a></Link>
            <Link href="/contact"><a onClick={navOpen}>Contact</a></Link>

            

        </nav>
        <div className={ navState ? "navButton open" : "navButton"} onClick={navOpen}>

                <Image src={navButton} alt="menu déroulant navigation avocate loire atlantique" />

            </div>

        </>
    )
}

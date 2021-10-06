import React from 'react'
import Navigation from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Container(props) {
    return (
        <>
            <Navigation/>
            {props.children}
            <Footer/>   
        </>
    )
}

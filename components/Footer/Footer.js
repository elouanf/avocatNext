import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            

            <ul>

                <li>Infos utiles</li>
                <li>06.xx.xx.xx.xx</li>
                <li>Adresse localisation</li>

            </ul>

            <ul>

                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/mentions">Mentions légales</Link></li>
                

            </ul>


        </footer>
    )
}

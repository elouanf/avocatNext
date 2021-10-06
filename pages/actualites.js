import React from 'react'
import styles from '../styles/Actu.module.css'
import Image from 'next/image'

import indemnisationImg from '/public/indemnisationImg.jpg'
import tdaImg from '/public/tdaImg.jpg'
import Link from 'next/link'


export default function actualites() {
    return (
        
            
            <section className={styles.actuSection}>
                <h1>Actualité Juridictionnelle</h1>

                <hr></hr>
                <div className={styles.mainActuContainer}>



                <div className={styles.itemActuContainer}>

                    <div className={styles.itemActuImageContainer}>

                        
                        <Image src={indemnisationImg} alt="marteau de justice posé sur des billets, indemnisation"  width={10000} />

                    </div>

                    <div className={styles.itemActuTextContainer}>

                        <h2>L’indemnisation des victimes d’infractions pénales</h2>

                        <p>

                        L&apos;article 2 du Code de Procédure Pénale dispose que le droit de demander 
                        réparation appartient à tous ceux ayant souffert du dommage directement causé par une infraction.
                        L’indemnisation de la victime consiste à réparer (le plus souvent financièrement) les préjudices subis.

                        </p>

                        <Link href="/indemnisation">Lire l&apos;article</Link>

                    </div>

                </div>
                
                <div className={styles.itemActuContainer}>

                    <div className={styles.itemActuImageContainer}>

                        <Image src={tdaImg} alt="enfant avec un TDA portant un livre entre les mains, souriant." width={10000}/>

                    </div>

                    <div className={styles.itemActuTextContainer}>

                        <h2>Enfant TDA/TSA et signalement</h2>

                        <p>

                        Loin d’être à l’abri d’un signalement, les enfants porteurs d’un TSA, TDA(H) sont au contraire plus exposés que les autres. Pourquoi et comment l’éviter ?

                        </p>

                        <Link href="/tda">Lire l&apos;;article</Link>

                    </div>

                </div>
<hr></hr>
                {/* <div className={styles.itemActuContainer}>

                    <div className={styles.itemActuImageContainer}>


                    </div>

                    <div className={styles.itemActuTextContainer}>

                        <h2>L’indemnisation des victimes d’infractions pénales</h2>

                        <p>

                        L&apos;article 2 du Code de Procédure Pénale dispose que le droit de demander 
                        réparation appartient à tous ceux ayant souffert du dommage directement causé par une infraction.
                        L’indemnisation de la victime consiste à réparer (le plus souvent financièrement) les préjudices subis.

                        </p>

                        <a href="/plaintepenale">Lire l&apos;article</a>

                    </div>

                </div> */}

                </div>

            </section>


        
    )
}

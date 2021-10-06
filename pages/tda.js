import React from 'react'
import styles from '../styles/Article.module.css'
import Image from 'next/image'

import tdaImg from '/public/tdaImg.jpg'

export default function tda() {
    return (
        <section className={styles.articleContainer}>

            <div className={styles.textContent}>


            <h1>Trouble déficitaire de l&apos;attention</h1>

            <Image src={tdaImg} alt="enfant atteint de TDA, surpris tenant un livre à la main" /> 

            <hr></hr>
            <h2>Loin d’être à l’abri d’un signalement, les enfants porteurs d’un TSA, TDA(H) sont au contraire plus exposés que les autres. Pourquoi et comment l’éviter ?</h2>

            <p>Elever et éduquer des enfants n’est jamais une mince affaire.</p>
            <p>Elever et éduquer un enfant porteur d’un TSA (Trouble du Spectre Autistique) ou TDA (Trouble Déficit de l’Attention, avec ou sans Hyperactivité) et plus généralement de tous trouble neurodéveloppemental, relève de la gageure. 
            </p>
            <p>Entre la détection des manifestations des troubles, leur analyse par des professionnels compétents, le diagnostic, la mise en place d’une prise en charge globale adaptée et l’adaptation du cursus scolaire, un temps beaucoup trop long s’écoule ( tout au moins si l’on y arrive).</p>
            <p>Trouver le ou les professionnel(s) à même d’orienter les parents vers le diagnostic est déjà un combat, entre leur raréfaction et les délais de rendez-vous devenus indécents.</p>
            <p>Le diagnostic posé, beaucoup d’aménagements vont dépendre en pratique d’une reconnaissance MDPH qui en elle-même (si l’on parvient à monter le dossier kafkaïen correctement) prend entre 6 et 8 mois… Viendra le moment de trouver une école inclusive, qui ne rechigne pas à mettre en place rapidement et efficacement les adaptations nécessaires à la réussite de l’enfant.</p>
            <p>Pendant tout ce temps, l’enfant et ses parents sont bien souvent livrés à eux-mêmes, à chercher à droite et à gauche le médecin ou le spécialiste qui pourra prendre en charge certains troubles, à tenter de négocier avec l’école des aménagements dont on ignore s’ils conviendront et/ou suffiront à permettre la réussite scolaire, <i>a minima</i> son maintien.</p>
            <p>Pendant tout ce temps, l’enfant et ses parents sont surtout en souffrance, face à l’attente, aux difficultés du quotidien et à l’incompréhension des institutionnels qui mène <i>de fait</i> à la maltraitance.</p>
            <p>Et c’est là que la méconnaissance massive par ces institutionnels des particularités de ces enfants à besoins spécifiques va mener à des signalements.</p>
            <p>Les motifs récurrents de ces signalements :</p>
            <p><strong>« échec scolaire ». « errance médicale ».</strong></p>
            <p>Sans les aménagements scolaires nécessaires, l’enfant TSA/TDA sera très souvent en échec.
Or (et au surplus sans reconnaissance MDPH), ces aménagements se heurtent en pratique à la faiblesse des moyens humains et matériels des établissements scolaires, lorsque ce n’est pas une franche mauvaise volonté ou une ignorance totale qui empêche toute avancée…</p>
            <p>Le dialogue se tend avec les parents, pouvant mener à une déscolarisation (parfois imposée par l’établissement lui-même) et une information préoccupante est émise par l’école, schéma malheureusement classique.
</p>
            <p>Malgré la médiatisation des troubles du développement chez l’enfant, l’instauration d’une « journée mondiale de l’autisme », des « journées européennes du TDAH », on ne peut que déplorer l’ignorance tant des manifestations de ces troubles que de leurs modalités de prise en charge par de trop nombreux professionnels concernés (protection de l’enfance, personnels enseignants, personnels médicaux etc.)</p>
            <p>Une des particularités des TSA et TDAH est la nécessité d’une part d’un diagnostic pluridisciplinaire et d’autre part d’une prise en charge multimodale.</p>
            <p>Le résultat ? Une multitude d’intervenants autour de l’enfant notamment : médecin ou pédiatre, neuropsychologue et psychologue, orthophoniste, ergothérapeute, psychomotricien, etc.</p>
            <p>S’ils ne sont pas tous nécessaire selon les situations, le tableau clinique présenté par les enfants à besoins spécifiques implique la plupart du temps qu’il ne peut être traité par un ou deux spécialistes seulement.</p>
            <p>En outre, les besoins vont évoluer avec l’âge de l’enfant, certains suivis seront arrêtés puis éventuellement repris, de nouveaux devront peut-être se mettre en place.</p>
            <p>Face à la méconnaissance de cette nécessité d’intervention pluridisciplinaire, des informations préoccupantes peuvent encore être émises, soit par des professionnels de santé non formés spécifiquement, soit encore une fois par les établissements scolaires qui ne comprennent pas qu’autant d’intervenants gravitent autour des enfants.</p>
            <p>Ce qui est dénoncé à tort comme du « nomadisme thérapeutique » est en réalité le « passage obligé » pour toutes les familles confrontées au TSA/TDA.</p>
            
            <p className={styles.strongP}><strong>Comment réagir en situation de blocage avec un soignant ou un établissement scolaire ?</strong></p>

            <ul>
                
                <li>Eviter à tout prix la rupture de dialogue qui mènera presque inévitablement à un signalement aux Services de Protection de l’Enfance.</li>
                <li>Portez par tous moyens à la connaissance des tiers « récalcitrants » les informations essentielles sur les particularités de votre enfant : manifestation des troubles, modalités de prise en charge</li>
                <li>Appuyez-vous sur des textes fiables : Code de l’Education, Code de la Santé Publique, guides de recommandations et de bonnes pratiques de la HAS (ces derniers ont pour avantages de présenter une vision globale et une étude comparée des pratiques internationales qui met en exergue le retard grotesque de la France par rapport aux autres pays…)
</li>
                <li>Trouvez rapidement les bons interlocuteurs dans le milieu médical, et entourez-vous uniquement de ceux sensibilisés et formés au TSA/TDA, ils seront un appui de taille en cas de difficultés avec l’école.</li>
                <li>Trouver soutien et informations auprès du milieu associatif, souvent géré en ce domaine par des parents concernés.</li>


            </ul>

            <p>En cas d’enquête sociale, faites de même et n’hésitez pas à prendre attache avec un avocat sensibilisé à la spécificité de la situation.
</p>
            </div>
            
        </section>
    )
}

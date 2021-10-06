import React from 'react'
import styles from '../styles/Article.module.css'
import Image from 'next/image'

import indemnisationImg from '/public/indemnisationImg.jpg'

export default function indemnisation() {
    return (
        <section className={styles.articleContainer}>
            
            


            <h1>L’indemnisation des victimes d’infractions pénales</h1>

            <div className={styles.textContent}>

        <hr></hr>


            <h2>Le droit commun de la réparation</h2>

            <Image src={indemnisationImg} alt="Marteau de juge sur des billets représentant l&apos;indemnisation" width={10000}/>

                <p>L&apos;article 2 du Code de Procédure Pénale dispose que le droit de demander réparation appartient à tous ceux ayant souffert du dommage directement causé par une infraction. 
                    La victime directe d&apos;une infraction pénale est celle qui a souffert d&apos;un préjudice découlant de façon certaine, directe et personnelle d&apos;une infraction.</p>

                    <p>Peuvent aussi prétendre à la qualité de victime, les victimes dites indirectes : famille, amis proches </p>

                    <p>

                    L’indemnisation de la victime consiste à réparer (le plus souvent financièrement) les préjudices subis.

                    </p>

                    <p>

                    Le droit français de la réparation des victimes connaît des régimes spéciaux (accident médicaux, accident de la circulation…).

                    </p>

                    <p>

                    Sera envisagé ici le « droit commun » de la réparation.

                    </p>
            </div>
            <hr></hr>
            <div className={styles.textContent}>

                <h2>Les préjudices indemnisables</h2>

                <span>Les préjudices sont classifiés en différents postes.</span>

                <hr></hr>

                <h3>Préjudice matériel :</h3>

                    <p>Il s’agit des dégâts et dégradations matériels d&apos;un bien mobilier ou immobilier, 
                        ou encore la perte de salaire ou les frais exposés par la victime pour remédier aux conséquences de l’infraction.</p>


                <h3>Préjudice moral :</h3>

                    <p>Il s&apos;agit des dommages d&apos;ordre psychiques, affectifs touchant à l&apos;honneur, aux sentiments, au bien-être de la victime. </p>


                <h3>Préjudice économique :</h3>

                    <p>Il s&apos;agit de tous les préjudices liés à une activité économique de production ou de service. A titre d’exemple, les pertes d&apos;exploitation pour une entreprise.</p>


                <h3>Préjudice résultant d’une atteinte à l’intégrité physique ou psychique :</h3>

                    <p>Cette catégorie recouvre plusieurs types de préjudices. Une nomenclature a été élaborée par le groupe de travail Dinthilac, qui est aujourd&apos;hui utilisée par les assureurs et les juridictions judiciaires et administratives :
Voir <a href="http://www.justice.gouv.fr/publication/dacs/consult/20141120-projetannexe.pdf"> le lien ci-dessous</a></p>

                    <strong><p>Comment et à qui demander l’indemnisation ?</p></strong>

                    <p>Le « circuit » d’indemnisation va dépendre des suites données par le Procureur à la commission de l’infraction.</p>

                    <hr></hr>

              <h4>En cas de poursuites contre l’auteur</h4>

                    <p>La victime a la possibilité de se constituer partie civile et de solliciter l’indemnisation de ses préjudices au Tribunal.</p>
                    <p>Cette constitution peut intervenir au plus tard jusqu’au jour de l’audience.
Dans le cadre d&apos;une ordonnance pénale ou d&apos;une comparution sur reconnaissance préalable de culpabilité, 
la demande d&apos;indemnisation est faite par courrier dans le délai indiqué par le Parquet dans l&apos;avis à victime.</p>


              <h4>En cas d’alternative aux poursuites</h4>

                    <p>Dans le cadre d&apos;une composition pénale, le procureur de la République doit proposer à l&apos;auteur des faits de réparer les dommages 
                        causés par l&apos;infraction, dans un délai qui ne peut être supérieur à six mois. La victime est avisée de cette proposition.</p>
                    <p>La médiation pénale a pour but de parvenir à un accord librement négocié entre la victime et l&apos;auteur sur la réparation du préjudice.</p>


              <h4>En cas de classement sans suite</h4>

                    <p>Cela va dépendre du motif du classement.</p>
                    <p>Si le Procureur estime que les faits commis ne revêtent pas la qualification d’infraction, 
                        ou que cette dernière n’est pas suffisamment caractérisée, aucune indemnisation ne sera possible sur le plan pénal.</p>

                    <p>Il est néanmoins possible que ces faits constituent une faute civile. Une demande d’indemnisation sera donc possible devant les 
                        juridictions civiles, à condition de connaître l’identité de l’auteur et de pouvoir démontrer la faute et le préjudice.</p>

                    <p>Si l’auteur n’a pu être identifié ou est décédé, et dès lors que la matérialité de l’infraction est établie, 
                        la victime peut se tourner vers un fonds d’indemnisation : la CIVI (Commission d’indemnisation des Victimes d’Infractions)</p>

                    <p>Quel que soit le motif de classement sans suite, la victime peut toujours : </p>

                    <hr></hr>

                    <ul>

                        <li>Exercer un recours auprès du Procureur Général </li>
                        <li>Déposer une plainte avec constitution de partie civile auprès du Juge d&apos;Instruction </li>
                        <li>Agir par voie de citation directe devant le tribunal de police ou le tribunal correctionnel en faisant citer le mis en cause à comparaître. 
                            Ici, il est nécessaire qu&apos;il existe suffisamment d&apos;éléments pour établir sa culpabilité et le préjudice de la victime.</li>

                    </ul>
                    <hr></hr>
                    <strong><p>Prouver et chiffrer son préjudice</p></strong>

                    <p>Le chiffrage et la démonstration du préjudice doivent être précis et rigoureux.
L’assistance d’un avocat, si elle n’est pas obligatoire, est nécessaire pour parvenir à obtenir une juste indemnisation.</p>

                    <h5>Le préjudice patrimonial ou matériel doit être chiffré à sa juste valeur</h5>

                    <p>Le principe de réparation intégrale implique que tout le préjudice doit être indemnisé, mais rien de plus que le préjudice.</p>

                    <p>Pour établir la réalité d’un préjudice matériel, il faudra le justifier par la production : </p>

                    <hr></hr>

                    <ul>

                        <li>De factures, preuves d’achat </li>
                        <li>De conclusions d’expertise (comptable, immobilière…)</li>
                        <li>De bulletins de salaires (si perte de revenus….) etc. </li>

                    </ul>

                    <hr></hr>

                    <h5>Les préjudices moraux sont particuliers</h5>

                            <p>Il est en effet compliqué d’estimer financièrement comme de démontrer la douleur, la tristesse, l’angoisse ou la peur.</p>
                            <p>Ici, plusieurs modes de preuve sont envisageables comme la production de certificats médicaux ou d’attestations sur l’honneur de la famille ou de l’entourage proche.
En tout état de cause, il appartient à la victime de prouver son préjudice et son imputabilité à l’infraction.</p>

                            <strong><p>Comment recouvrer son indemnisation ?</p></strong>
                            <p>Obtenir une décision octroyant une indemnisation est une étape, obtenir l’indemnisation en est une autre, et le chemin peut s’avérer long entre les deux.</p>
                            <p>Concrètement, comment recouvrer les sommes dues si l’auteur ne peut pas payer ou refuse ?</p>




                    <h5>L’exécution forcée contre l’auteur condamné</h5>

                        <p>Il est possible de contraindre l’auteur condamné à verser l’indemnisation. </p>

                        <ul>

                            <li>S’il est libre<br/>
Il peut être fait appel à un huissier de justice. Cependant, ce sera à la victime d’avancer les frais de procédure.<br/>
Saisir un huissier est inutile si l’auteur est insolvable.</li>
                            <li>S’il est condamné à une peine de sursis mise à l’épreuve <br/>
Il est possible de contacter le SPIP (Service Pénitentiaire d’Insertion et de Probation) ou le Juge d’Application des Peines qui suit la personne condamnée</li>
                            <li>S’il est incarcéré <br/>
Il faut contacter le Directeur du centre pénitentiaire.</li>

                        </ul>

                       <strong><p>Auteur inconnu, décédé ou insolvable</p></strong>

                        <p>Des fonds de garantie peuvent prendre le relais lorsque la victime ne peut pas recouvrer son indemnisation.</p>

                        <hr></hr>

                    <h5>La CIVI (Commission d’Indemnisation des Victimes d’Infractions)</h5>

                        <p>Présente dans chaque Tribunal de Grande Instance, la CIVI est une juridiction autonome qui peut être saisie indépendamment de la procédure pénale engagée.</p>
                        <p>Elle instruit de façon indépendante les demandes d&apos;indemnisation présentées par les victimes d&apos;infractions ou leurs ayants droit.</p>
                        <p>Elle doit être saisie dans les 3 ans de la commission des faits, ce délai étant prolongé d&apos;un an après qu&apos;une décision définitive d&apos;une juridiction soit intervenue. Les règles et conditions d&apos;indemnisation diffèrent selon l&apos;infraction, le préjudice et la situation de la victime, un avocat vous guidera selon votre situation. - Victimes d&apos;infractions ayant entraînées la mort, une incapacité permanente ou une ITT supérieure à 30 jours, victimes de viol, d’agression sexuelle, de traite des êtres humains, ou d’atteinte sexuelle sur mineur de quinze ans.</p>
                        <p>Dans ces cas, l&apos;indemnisation couvre l&apos;intégralité du préjudice sans condition particulière. - Victimes d&apos;infractions ayant entraînées une ITT inférieure à 30 jours, ou un préjudice matériel du fait d&apos;une infraction de vol, abus de confiance, extorsion, escroquerie, destruction ou dégradation de bien.</p>
                        <p>Ici, l&apos;indemnisation est plafonnée à 4 116 euros et soumise à trois conditions : - ne pas dépasser le plafond de ressources pour bénéficier de l&apos;aide juridictionnelle - être dans l’impossibilité d’obtenir une réparation effective et suffisante de son préjudice par une entreprise d’assurances, un organisme social ou tout autre débiteur - se trouver dans une situation matérielle ou psychologique grave en raison de l’infraction. - Victime d&apos;un préjudice matériel résultant de la destruction d’un véhicule par un incendie volontaire commis par un tiers sur le territoire national à compter du 1er octobre 2008.</p>
                        <p>Ici aussi, l&apos;indemnisation est plafonnée à 4 116 euros et soumise à trois conditions : - Au moment de l&apos;incendie, le véhicule était immatriculé, il avait fait l&apos;objet d&apos;un contrôle technique et était couvert par un contrat d&apos;assurance, - Etre dans l’impossibilité d’obtenir une réparation effective et suffisante de son préjudice par une entreprise d’assurances, un organisme social ou tout autre débiteur - Ne pas dépasser 1,5 fois le plafond de ressources pour bénéficier de l&apos;aide juridictionnelle La CIVI est saisie par demande écrite et commence par une phase amiable, suivie d’une audience le cas échéant.</p>

                    <hr></hr>

                    <h5>Le SARVI (Service d’Aide au Recouvrement des Victimes d’Infractions)</h5>


                    <p>Le SARVI aide au recouvrement des dommages-intérêts alloués par les juridictions répressives. Il s&apos;adresse aux victimes qui ont subi des préjudices corporels légers ou certains dommages aux biens.</p>
                    <p>Les conditions de saisine du SARVI : - avoir obtenu une décision de justice pénale définitive accordant des dommages et intérêts à partir du 1er octobre 2008, - ne pas pouvoir être indemnisé devant les CIVI. Le SARVI peut être saisi au plus tôt deux mois après la condamnation définitive accordant des dommages-intérêts, et au plus tard un an après celle-ci ou après la notification de rejet d&apos;une demande d&apos;indemnisation auprès de la CIVI.</p>
                    <p>L&apos;indemnisation par le SARVI est plafonnée selon le montant des dommages-intérêts accordé. Ainsi, la victime peut obtenir : - la totalité de la somme si le montant est inférieure à 1 000 €, - 30 % de la somme si le montant est supérieur à 1 000 €, avec un minimum de 1 000 € et un maximum de 3 000 €</p>
                    <p>En tout état de cause, il est toujours possible pour la victime de solliciter l’indemnisation de son préjudice auprès du Juge civil.</p>
                    <p>La victime dispose en effet d’un droit d’option entre l’indemnisation par la voir pénale ou la voie civile.</p>
                    <p>L’opportunité de choisir l’une ou l’autre de ces voies va dépendre notamment de la situation de la victime et de celle de l’auteur.</p>
                    <p>Les procédures étant différentes et leur articulation complexe, il est nécessaire de recourir aux conseils d’un avocat.</p>


            </div>

        </section>
    )
}

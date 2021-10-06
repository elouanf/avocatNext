import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profilImg from '/public/photoProfil.jpg'
import droitFamille from '/public/droitFamille.jpg'
import droitMineur from '/public/droitMineur.jpg'
import droitSurendettement from '/public/droitSurendettement.jpg'
import droitCredit from '/public/droitCredit.jpg'
import droitPenal from '/public/droitPenal.jpg'



export default function Home() {
  return (
    <section className={styles.smoothContainer}>
    <header className={styles.accueil} id="accueil">

    <div className={styles.accueilContainer}>

        <h1>Maître HOUDOUX Floriane | Avocate à St-Nazaire</h1>
        <hr></hr>
        <h2>Avocate au barreau en Loire-Atlantique</h2>

    </div>

    <svg width="250" height="171" viewBox="0 0 250 171" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
        <g id="Group_2">
        <path id="Vector" d="M243.581 102.409L213.277 33.1886L182.975 102.409L181 102L213.277 28.4736L245.5 102L243.581 102.409Z" fill="white"/>
        <path id="Vector_2" d="M212.333 30.8308H214.223V102.032H212.333V30.8308Z" fill="white"/>
        </g>
        <path id="Vector_3" d="M67.0249 102.409L36.7236 33.1886L6.4189 102.409L4.5 102L36.7236 28.4736L69 102L67.0249 102.409Z" fill="white"/>
        <path id="Vector_4" d="M35.7773 30.8308H37.6671V102.032H35.7773V30.8308Z" fill="white"/>
        <path id="Vector_5" d="M6 107.5H5.40282L5.50778 108.088C8.62983 125.574 25.3355 137.218 42.8214 134.096C56.0818 131.729 66.4624 121.348 68.8297 108.088L68.9346 107.5H68.3374H6Z" fill="white" stroke="white"/>
        <path id="Vector_6" d="M2.6656 102.501L2.67384 102.501H2.68208H70.7565C71.8567 102.542 72.739 103.426 72.7752 104.528L73.275 104.511L72.7752 104.528C72.8133 105.682 71.91 106.65 70.7565 106.692H2.68208H2.67458L2.66709 106.692C2.62035 106.694 2.57363 106.694 2.5269 106.692C1.37008 106.654 0.46302 105.685 0.501166 104.528C0.539326 103.371 1.50855 102.463 2.6656 102.501Z" stroke="white"/>
        <path id="Vector_7" d="M182 107.5H181.403L181.508 108.088C184.63 125.574 201.336 137.218 218.821 134.096C232.082 131.729 242.462 121.348 244.83 108.088L244.935 107.5H244.337H182Z" fill="white" stroke="white"/>
        <path id="Vector_8" d="M178.666 102.501L178.674 102.501H178.682H246.756C247.857 102.542 248.739 103.426 248.775 104.528L249.275 104.511L248.775 104.528C248.813 105.682 247.91 106.65 246.756 106.692H178.682H178.675L178.667 106.692C178.62 106.694 178.574 106.694 178.527 106.692C177.37 106.654 176.463 105.685 176.501 104.528C176.539 103.371 177.509 102.463 178.666 102.501Z" stroke="white"/>
        <path id="Vector_9" d="M215.456 28.1103C215.551 27.8376 215.608 27.5535 215.626 27.2654C215.628 25.4177 214.133 23.9168 212.285 23.914C210.437 23.9111 208.937 25.4063 208.934 27.2545C208.931 28.5949 209.73 29.8071 210.961 30.3355C210.612 30.7363 210.236 31.1127 209.834 31.4623C208.487 32.5828 206.93 33.4249 205.255 33.9408C201.724 34.7299 198.044 34.5449 194.609 33.4056C192.82 32.839 191.072 32.1472 189.379 31.3353C187.645 30.5541 185.963 29.6585 184.347 28.6541C181.049 26.7643 177.362 24.4691 173.664 22.7934C166.182 19.2599 158.255 16.7586 150.099 15.3585C146.019 14.612 141.894 14.1315 137.752 13.9191C133.502 13.6595 129.238 13.7357 125 14.1474L126.56 23.799C130.206 23.1926 133.893 22.864 137.589 22.8162C141.392 22.7268 145.196 22.884 148.978 23.2865C156.597 24.0119 164.082 25.7702 171.228 28.514C174.889 29.8657 178.088 31.5556 181.828 33.3469C183.667 34.3029 185.567 35.1382 187.515 35.8476C189.47 36.6072 191.476 37.2284 193.519 37.7067C197.764 38.7566 202.217 38.6171 206.387 37.3041C210.33 35.8288 213.49 32.794 215.124 28.9143C215.262 28.6729 215.368 28.4144 215.439 28.1456L215.456 28.1103Z" fill="white"/>
        <path id="Vector_10" d="M33.3211 28.1103C33.2266 27.8376 33.1696 27.5534 33.152 27.2653C33.1514 25.4188 34.6477 23.9219 36.4937 23.9214C38.3402 23.9208 39.8371 25.4171 39.8376 27.2631C39.8382 28.5994 39.0428 29.8076 37.8152 30.3354C38.1642 30.7363 38.5406 31.1126 38.942 31.4622C40.2897 32.5828 41.8464 33.4249 43.5215 33.9408C47.0534 34.7299 50.7327 34.5449 54.1672 33.4055C55.9568 32.839 57.7048 32.1472 59.397 31.3353C61.1319 30.5541 62.8133 29.6584 64.4297 28.6541C67.7276 26.7643 71.4143 24.4691 75.1124 22.7934C82.5935 19.2604 90.5199 16.7591 98.6745 15.3585C102.756 14.612 106.881 14.1314 111.024 13.9191C115.273 13.6543 119.537 13.7249 123.774 14.1303L122.214 23.7819C118.568 23.1755 114.881 22.8469 111.185 22.7991C107.382 22.7097 103.578 22.8669 99.7956 23.2694C92.1762 23.9948 84.6911 25.7531 77.546 28.4969C73.8849 29.8486 70.6855 31.5385 66.9453 33.3298C65.1062 34.2858 63.2067 35.1211 61.2589 35.8305C59.303 36.5901 57.2971 37.2107 55.2542 37.6896C51.0094 38.7395 46.5569 38.6 42.3862 37.287C38.4381 35.8152 35.2724 32.7798 33.636 28.8972C33.4976 28.6558 33.3917 28.3973 33.3205 28.1285L33.3211 28.1103Z" fill="white"/>
        <path id="Vector_11" d="M120.5 13.5H129.5V169.5H120.5V13.5Z" fill="white" stroke="white"/>
        <path id="Vector_12" d="M173.85 161.5H130V128.126H120V161.5H76.1497C73.1212 161.504 70.6694 161.796 70.6729 164.824C70.6763 167.848 73.1263 170.297 76.1497 170.301H173.85C176.879 170.305 179.337 167.853 179.34 164.824C179.344 161.796 176.879 161.503 173.85 161.5C173.85 163.666 173.846 161.5 173.85 161.5Z" fill="white"/>
        <path id="Vector_13" d="M122.698 5.80198C122.698 4.5305 123.729 3.5 125 3.5C126.271 3.5 127.302 4.53029 127.302 5.80198V22.2645H122.698V5.80198Z" stroke="white" strokeWidth="7"/>
        </g>
        </svg>

      <div className={styles.headerLink}>

        <a href="#presentation">En savoir plus</a>
        <a href="#presentation">Me contacter</a>

      </div>
    </header>

    <div className={styles.moduleContainer}>


    <section className={styles.presentation} id="presentation">
    <div>

    <h2>&quot;Je jure, comme avocat, d&apos;exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité&quot;</h2>
    <hr></hr>
    <span>- Serment de l&apos;avocat -</span>

    </div>

    <div className={styles.presentationContainer}>

    
    <Image src={profilImg} alt="Portrait avocate Maître HOUDOUX St Nazaire" width={10000}/>


    <h3>Votre avocat à St Nazaire</h3>

    <p>

      Maître Floriane HOUDOUX, avocat pluridisciplinaire de par sa formation, peut intervenir dans de nombreux domaines. 
      Avocat en divorce, Maître HOUDOUX a eu à traiter de nombreux dossiers dans le droit des personnes et de la famille tout comme dans le droit pénal.​
      
      </p>

    <p>

    Avocat à St Nazaire, Maître HOUDOUX vous garantit une approche dynamique et efficace de votre dossier. 
    Sa formation lui a permis d&apos;exercer dans le cadre de stages dans plusieurs cabinets d&apos;avocats nazairiens et auprès d&apos;une association 
    conventionnée d&apos;aide aux victimes d&apos;infractions pénales.

    </p>


    <p>

    Maître Floriane HOUDOUX est diplômée d&apos;un Master I de sciences criminelles et d&apos;un Master II de droit privé général obtenu à l&apos;Université de Rennes 1. 
    Elle est titulaire du Certificat d&apos;Aptitude à la Profession d&apos;Avocat délivré par l&apos;Ecole des Avocats du Grand Ouest. 
    Elle met aujourd&apos;hui son savoir-faire au service de ses clients, au sein de son cabinet d&apos;avocat à St Nazaire en Loire-Atlantique.

    </p>

    </div>

    </section>

    <section className={styles.skills} id="competences">

    <div className={styles.skillHeader}>

    <h2>Compétences et domaine d&apos;activité de votre avocat</h2>

    </div>
    <div className={styles.skillContainer}>

      <div className={styles.itemSkill}>

        <div className={styles.itemSkillImg}>

        <Image src= {droitFamille} alt="jeune famille avec parents et enfants, soutenant le droit des familles" width={10000} />

        </div>

        <h3>Droit des personnes et de la famille</h3>
      



      </div>

      <div className={styles.itemSkill}>

<div className={styles.itemSkillImg}>

<Image src={droitMineur} alt="jeune famille avec parents et enfants, soutenant le droit des familles" width={10000} />

</div>

<h3>Droit des mineurs</h3>



</div>


<div className={styles.itemSkill}>

  <div className={styles.itemSkillImg}>

  <Image src={droitSurendettement} alt="jeune famille avec parents et enfants, soutenant le droit des familles" width={10000} />


</div>

<h3>Droit du surendettement</h3>


</div>


<div className={styles.itemSkill}>

<div className={styles.itemSkillImg}>

<Image src={droitCredit} alt="jeune famille avec parents et enfants, soutenant le droit des familles" width={10000} />


</div>

<h3>Droit du crédit et de la consommation</h3>


</div>


<div className={styles.itemSkill}>

<div className={styles.itemSkillImg}>

<Image src={droitPenal} alt="jeune famille avec parents et enfants, soutenant le droit des familles" width={100000} />

</div>

<h3>Droit pénal</h3>




</div>

    </div>

    </section>

      </div>

      <section className={styles.homeContact}>

        <div className={styles.homeContactItem}>

          <ul>

            <h4>Coordonnées</h4>

            <li>

            <svg enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 0c-4.962 0-9 4.066-9 9.065 0 7.103 8.154 14.437 8.501 14.745.143.127.321.19.499.19s.356-.063.499-.189c.347-.309 8.501-7.643 8.501-14.746 0-4.999-4.038-9.065-9-9.065zm0 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/></svg>

              63 avenue de la République
              
              </li>
            <li>

         

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512">
<g>
	<g>
		<path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055
			c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605
			c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432
			c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899
			c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051
			c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034
			c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034
			l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339
			c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648
			c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128
			C391.911,345.502,391.926,352.363,387.703,356.605z"/>
	</g>
</g>

</svg>

              
              06 64 47 49 05
              
              </li>
          

          </ul>

          <ul>

              <h4>Stationnement</h4>

              <li>
                
              <svg id="Capa_1" enableBackground="new 0 0 458.706 458.706" height="512" viewBox="0 0 458.706 458.706" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m229.353 163.824h-32.765v65.529h32.765c18.062 0 32.765-14.703 32.765-32.765s-14.703-32.764-32.765-32.764z"/>
                <path d="m425.941 0h-393.176c-18.094 0-32.765 14.671-32.765 32.765v393.176c0 18.094 14.671 32.765 32.765 32.765h393.176c18.094 0 32.765-14.671 32.765-32.765v-393.176c0-18.094-14.671-32.765-32.765-32.765zm-196.588 294.882h-32.765v65.529h-65.529v-262.117h98.294c54.203 0 98.294 44.091 98.294 98.294s-44.091 98.294-98.294 98.294z"/>
              </svg>

                Parking avenue Albert de Mun <i>/gratuit</i></li>
              <li>
                
              <svg id="Capa_1" enableBackground="new 0 0 458.706 458.706" height="512" viewBox="0 0 458.706 458.706" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m229.353 163.824h-32.765v65.529h32.765c18.062 0 32.765-14.703 32.765-32.765s-14.703-32.764-32.765-32.764z"/>
                <path d="m425.941 0h-393.176c-18.094 0-32.765 14.671-32.765 32.765v393.176c0 18.094 14.671 32.765 32.765 32.765h393.176c18.094 0 32.765-14.671 32.765-32.765v-393.176c0-18.094-14.671-32.765-32.765-32.765zm-196.588 294.882h-32.765v65.529h-65.529v-262.117h98.294c54.203 0 98.294 44.091 98.294 98.294s-44.091 98.294-98.294 98.294z"/>
              </svg>
                
                Parking des Halles <i>/payant</i></li>


              <li>
                
              <svg id="Capa_1" enableBackground="new 0 0 458.706 458.706" height="512" viewBox="0 0 458.706 458.706" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m229.353 163.824h-32.765v65.529h32.765c18.062 0 32.765-14.703 32.765-32.765s-14.703-32.764-32.765-32.764z"/>
                <path d="m425.941 0h-393.176c-18.094 0-32.765 14.671-32.765 32.765v393.176c0 18.094 14.671 32.765 32.765 32.765h393.176c18.094 0 32.765-14.671 32.765-32.765v-393.176c0-18.094-14.671-32.765-32.765-32.765zm-196.588 294.882h-32.765v65.529h-65.529v-262.117h98.294c54.203 0 98.294 44.091 98.294 98.294s-44.091 98.294-98.294 98.294z"/>
              </svg>
                
                Parking des Martyres <i>/payant</i></li>

          </ul>

        </div>

        <div className={styles.homeContactItem}>

            <span>Rendez-vous en cabinet</span>

            <a href="">Consultation de 60 minutes pour 50€</a>

            <span>Question simple</span>

            <a href="">Réponse pour 15€</a>

            <span>Consultation écrite</span>

            <a href="">Réponse pour 100€</a>

        </div>



      </section>

  </section>
  )
}

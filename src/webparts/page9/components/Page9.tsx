import * as React from 'react';
import styles from './Page9.module.scss';
import type { IPage9Props } from './IPage9Props';


export default class Page9 extends React.Component<IPage9Props, {}> {
  public render(): React.ReactElement<IPage9Props> {
    const { } = this.props;

    return (
      <>
        <section>
          <div className={styles.container}>
            <img
              src='https://geoapps.esri.co/Recursos/RH_sharepoint/banner.jpg'
              alt="Background"
              className={styles.backgroundImage}
            />
          </div>
        </section>
        <section className={styles.cardsSection}>
          <div className={styles.card}>
            <h3 className={styles.titleObjectivos}>OBJETIVO</h3>
            <p>
              Encontrar el profesional idóneo que cumpla con las competencias laborales y profesionales con relación a las necesidades y estructuras funcionales de Esri.
            </p>
          </div>
        </section>
        <section className={styles.procesoSeleccion}>
          <img className={styles.imgProceso} src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Seguridad%20y%20salud%20en%20el%20trabajo/Infografía-Proceso-de-Selección%201%20(1).png" alt="" />
        </section>
        <section className={styles.div3070}>
          <div className={styles.div30}>
            <img src="https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/2ba3d469-e574-4674-8b4e-ea3efea979f1/driveItem/thumbnails/0/c400x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart&vl=175&vt=0&vw=2142&vh=2142" width='90%' height='90%' />
          </div>
          <div className={styles.div70}>
            <h3>Genomawork</h3>
            <p>Mejoramos nuestro proceso de selección con el uso de Genomawork, una herramienta que usa Inteligencia Artificial para detectar los rasgos de personalidad y habilidades cognitivas que poseen los candidatos para evaluarlos con los mejores talentos de Esri.</p>
            <p>Este programa consiste evaluar a los postulantes con juegos psicométricos para identificar los rasgos de personalidad y habilidades cognitivas para de esta manera coincidir a la persona adecuada en el cargo.</p>
          </div>
        </section>
        <section className={styles.globit}>
          <a href='https://app.genoma.work/jobs/esri' target='_blank'>
            <img src="https://geoapps.esri.co/Recursos/RH_sharepoint/globit.png" className={styles.zoomableImage} />
          </a>
        </section>
        <section>
          <div>
            <h2>Convocatorias internas</h2>
            <ul>
              <li>
                <p>Las convocatorias se envían por Esri Comunica como flujo de comunicación interna de Esri.</p>
                <p>Si estás interesado/a en postularte a nuestras convocatorias internas, por favor envía tu hoja de vida actualizada al correo
                  kpacheco@esri.ec
                </p>
              </li>
            </ul>
          </div>
          <div style={{ display: 'flex', justifyContent:"space-around", width: '100%', }}>
            <a href="https://app.powerbi.com/groups/1e6b5075-e460-4276-829f-4a96faa2f69b/reports/e5180410-b3b7-4607-817b-44d7c44aec1b/ReportSection?experience=power-bi" target="_blank" rel="noopener noreferrer" className={styles.powerBiBanner}>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height:"100%", width:"100%", marginBlockStart:"0", marginBlockEnd:"0" }}>¡Conoce las métricas de nuestro proceso en Power BI! <img src="https://geoapps.esri.co/Recursos/RH_sharepoint/powerBi.png" /></p>
            </a>
          </div>
        </section>
      </>
    );
  }
}

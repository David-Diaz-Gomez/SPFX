import * as React from 'react';
import styles from './Page9.module.scss';
import type { IPage9Props } from './IPage9Props';


export default class Page9 extends React.Component<IPage9Props, {}> {
  public render(): React.ReactElement<IPage9Props> {
    const {} = this.props;

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
            <h3>OBJETIVO</h3>
            <p>
            Encontrar el profesional idóneo que cumpla con las competencias laborales y profesionales con relación a las necesidades y estructuras funcionales de Esri.
            </p>
          </div>
        </section>
        <section className={styles.div3070}>
          <div className={styles.div30}>
            <img src="https://esricolombia.sharepoint.com/_api/v2.1/sites/esricolombia.sharepoint.com,4952de7d-e2ae-4622-8c80-cd64dedc02af,fa6a5fd9-c88e-48c3-b29d-df4ae270e9a4/lists/1f9b9914-0315-4214-8b61-6b6444e1140c/items/2ba3d469-e574-4674-8b4e-ea3efea979f1/driveItem/thumbnails/0/c400x99999/content?prefer=noRedirect,extendCacheMaxAge&clientType=modernWebPart&vl=175&vt=0&vw=2142&vh=2142" width='90%' height='90%'/>
          </div>
          <div className={styles.div70}>
            <h3>Genomawork</h3>
            <p>Mejoramos nuestro proceso de selección con el uso de Genomawork, una herramienta que usa Inteligencia Artificial para detectar los rasgos de personalidad y habilidades cognitivas que poseen los candidatos para evaluarlos con los mejores talentos de Esri.</p>
            <p>Este programa consiste evaluar a los postulantes con juegos psicométricos para identificar los rasgos de personalidad y habilidades cognitivas para de esta manera coincidir a la persona adecuada en el cargo.</p>
          </div>
        </section>
        <section className={styles.globit}>
          <a href='https://app.genoma.work/jobs/esri' target='_blank'>
          <img src="https://geoapps.esri.co/Recursos/RH_sharepoint/globit.png" className={styles.zoomableImage}/>
          </a>
        </section>
        <section>
        <div>
      <h2>Flujo proceso de selección</h2>
      <ul>
        <li>
          <ul>
            <li>1. El área solicitante genera el formulario de requisición de colaboradores.</li>
            <li>2. Solicitud de aprobación a la Dirección de Gestión Humana</li>
            <li>3. Publicación de convocatoria interna (Esri Comunica) y externa (Portales de empleo, página web).</li>
            <li>4. Entrevista gestión humana y aplicación de pruebas psicotécnicas.</li>
            <li>5. Entrevista líder del proceso</li>
            <li>6. Selección del candidato y formalización de oferta contractual</li>
            <li>7. Vinculación y onboarding</li>
          </ul>
        </li>
      </ul>
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
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
    <a href="https://app.powerbi.com/groups/me/reports/5af2c88c-2166-470b-8082-56db1dba034e?ctid=249bb730-97be-413c-815a-77ccfa75c445&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className={styles.powerBiBanner}>
      <p style={{display:'flex',alignItems:'center', justifyContent:'center', textAlign:'center'}}>¡Conoce las métricas de nuestro proceso en Power BI! <img src="https://geoapps.esri.co/Recursos/RH_sharepoint/powerBi.png" width={'30px'} height={'25px'}/></p>
    </a>
    </div>
        </section>
      </>
    );
  }
}
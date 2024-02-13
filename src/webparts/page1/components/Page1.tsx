/* Page1.tsx */
import * as React from 'react';
import styles from './Page1.module.scss';
import { IPage1Props } from './IPage1Props';
import Page2 from '../../page2/components/Page2';
import Page3 from '../../page3/components/Page3';
import Calendar from '../../calendar/components/Calendar';

export default class Page1 extends React.Component<IPage1Props, { currentSlide: number }> {
  constructor(props: IPage1Props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }


  handleNextSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide + 1) % 2 });
  };

  handlePrevSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide - 1 + 2) % 2 });
  };

  renderSlider() {
    const { currentSlide } = this.state;

    return (
      <div className={styles.slider} id="organizacion">
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className={styles.slide}>
            <img alt="Image 1" src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/image.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 2" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1697119674136.jpeg" />
          </div>
        </div>
        <button className={styles.navButton} onClick={this.handlePrevSlide}>
          {'>'}
        </button>
        <button className={styles.navButton} onClick={this.handleNextSlide}>
          {'<'}
        </button>
      </div>
    );
  }

  render() {
    const {
      hasTeamsContext, userDisplayName,
      url4, url5, url6, url7, url8, url9
    } = this.props;

    const imageInfo = [
      {
        imageUrl: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1291/1695066754297.jpg',
        labor: 'DIRECTORA DE GESTIÓN HUMANA',
        name: 'LUISA MATIZ ',
        description: 'Contribuir a la productividad de la organización y a la construcción de una cultura empresarial positiva y eficiente, desarrollando un recurso humano altamente calificado y motivado, planificando estrategias y programas, capacitación, formación y gestión de talento en la organización, generando un ambiente empresarial de desarrollo y satisfacción, de forma tal, que le permita a nuestros colaboradores progresar con base en el mérito, aptitudes y habilidades.',
        location: '',
        phone: '',
        email: 'lmatiz@esri.co',
      },
      {
        imageUrl: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699589411358.jpeg',
        labor: 'LÍDER DE GESTIÓN HUMANA',
        name: 'MARÍA MORENO ',
        description: 'Generar iniciativas que aporten a la calidad de vida laboral de los colaboradores, coordinando y gestionando junto a la Dirección de GH actividades en pro de la salud y bienestar de los colaboradores y sus familias; así mismo proveer personal calificado e idóneo a las áreas de la organización, analizando, filtrando y seleccionando hojas de vida para los procesos de reclutamiento y selección.',
        location: '',
        phone: '',
        email: 'amoreno@esri.co',
      },
      {
        imageUrl: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2505/1699589153932.png',
        labor: 'COORDINADORA DE SELECCIÓN',
        name: 'KHATERINE PACHECO',
        description: 'Coordinar y ejecutar los procesos de selección con el fin de lograr resultados satisfactorios, implementando estrategias para asegurar un reclutamiento eficiente y procesos de incorporación del personal óptimo.',
        location: '',
        phone: '',
        email: 'kpacheco@esri.co',
      },
      {
        imageUrl: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2506/1699589253037.png',
        labor: 'ANALISTA DE BASE DE DATOS E INFORMACIÓN',
        name: 'MONICA QUIROGA ',
        description: '',
        location: '',
        phone: '',
        email: 'mquiroga@esri.co',
      },
      {
        imageUrl: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2507/1699589322021.png',
        labor: 'COORDINADORA ADMINISTRATIVA DEL SST',
        name: 'TERESA ALVAREZ',
        description: 'Estructurar, programar y ejecutar actividades de prevención en salud y seguridad en el trabajo, con el fin de promover y mantener la salud laboral de los colaboradores de Esri Nosa.',
        location: '',
        phone: '',
        email: 'talvarez@esri.co ',
      }
      // Repite esta estructura para cada imagen
    ];
    return (
      <>
        <section className={`${styles.page1} ${hasTeamsContext ? styles.teams : ''}`}>
          <div>
            {/* Resto del contenido */}
          </div>
          {this.renderSlider()}
        </section>
        <section>
          <div style={{ display: 'flex' }}>
            {imageInfo.map((info, index) => (
              <div key={index} className={styles.card}>
                <img src={info.imageUrl} alt={`Imagen ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                <div className={styles.cardOverlay}><div className={styles.infoLabel}>{info.labor}</div></div>
                <div className={styles.overlay}>
                  <h4>{info.name}</h4>
                  <p className={styles.description}>{info.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className={styles.location}>
                      <span className={styles.icon}>📍</span> {info.location}
                    </p>
                  </div>
                  <div>
                    <p className={styles.phone}>
                      <span className={styles.icon}>📞</span> {info.phone}
                    </p>
                  </div>
                  <div>
                    <p className={styles.email}>
                      <span className={styles.icon}>✉️</span> {info.email}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        <section style={{ position: "relative" }}>
          <div className={styles.imageContainer}>
            <img
              src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/banner_1.png"
              alt="Nuestra Misión y Nuestro Objetivo"
              style={{ width: '98%', height: '90vh', marginBottom: '2vh' }}
            />
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.column}>
              <h3>Nuestra Misión</h3>
              <p>
                Potencializar las capacidades de nuestro capital humano a través de la excelencia, compromiso y responsabilidad,
                velando por mantener un clima laboral que fomente el buen desempeño, compromiso, responsabilidad y excelencia,
                los cuales se vean reflejados en la atención que damos a nuestros clientes.
              </p>
            </div>
            <div className={styles.column}>
              <h3>Nuestro Objetivo</h3>
              <p>
                Manejar con responsabilidad y ética a nuestros colaboradores, brindando programas de formación, bienestar,
                selección, seguridad y salud en el trabajo y fomentar el sentido de pertenencia y la eficiencia en su gestión.
              </p>
            </div>
          </div>
        </section>

        <Calendar
          hasTeamsContext={hasTeamsContext}
          userDisplayName={userDisplayName}
          description="Descripción predeterminada"
          isDarkTheme={false}
          environmentMessage="Mensaje predeterminado"
        />

        {/* Renderizar el componente Page2 */}
        <Page2
          url4={url4}
          url5={url5}
          url6={url6}
          url7={url7}
          url8={url8}
          url9={url9}
          hasTeamsContext={hasTeamsContext}
          userDisplayName={userDisplayName}
          description="Descripción predeterminada"
          isDarkTheme={false}
          environmentMessage="Mensaje predeterminado"
        />

        {/* Renderizar el componente Page3 */}
        <Page3
          hasTeamsContext={hasTeamsContext}
          userDisplayName={userDisplayName}
          description="Descripción predeterminada"
          isDarkTheme={false}
          environmentMessage="Mensaje predeterminado"
        />

        <section className={styles.clickableImageSection}>
          <a
            href="https://app.genoma.work/jobs/esri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.clickableImageLink}
          >
            <img
              src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/1699660816643.png"
              alt="Enlace Clickeable"
              className={styles.clickableImage}
            />
          </a>
        </section>

        <section className={styles.clickableImageSection1}>
          <a
            href="https://esricolombia.sharepoint.com/Areas/GC/SitePages/Forms/ByAuthor.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.clickableImageLink1}
          >
            <img
              src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/1700083790590.png"
              alt="Enlace Clickeable"
              className={styles.clickableImage1}
            />
          </a>
        </section>
      </>
    );
  }
}

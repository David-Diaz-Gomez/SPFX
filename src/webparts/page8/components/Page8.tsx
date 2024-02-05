import * as React from 'react';
import styles from './Page8.module.scss';
import type { IPage8Props } from './IPage8Props';


export default class Page8 extends React.Component<IPage8Props, {showModal: boolean; modalImages: string[];currentImageIndex: number; showPausasActivasModal: boolean;focusedIndex: number | null;modalTab: 'pausas' | 'ejercicios';}> {
    constructor(props: IPage8Props) {
      super(props);
      this.state = {
        showModal: false,
        modalImages: [],
        currentImageIndex: 0,
        showPausasActivasModal: false,
        focusedIndex: null,
        modalTab: 'pausas',
      };
    }
    
    handleModalTabClick = (tab: 'pausas' | 'ejercicios') => {
      this.setState({ modalTab: tab });
    };

  openModal = (images: string[]): void => {
    this.setState({ showModal: true, modalImages: images });
  }

  closeModal = (): void => {
    this.setState({ showModal: false, modalImages: [] });
  }

  openPausasActivasModal = () => {
    this.setState({ showPausasActivasModal: true });
  }

  closePausasActivasModal = () => {
    this.setState({ showPausasActivasModal: false });
  }

  navigateImages = (direction: 'prev' | 'next', event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  
    const { modalImages, currentImageIndex } = this.state;
    const totalImages = modalImages.length;
  
    if (direction === 'prev') {
      this.setState({
        currentImageIndex: (currentImageIndex - 1 + totalImages) % totalImages,
      });
    } else if (direction === 'next') {
      this.setState({
        currentImageIndex: (currentImageIndex + 1) % totalImages,
      });
    }
  };

  renderIframeContent(index: number): React.ReactNode {
    // Asume que este método devolverá el contenido del iframe según el índice proporcionado.
    // Adaptar según tus necesidades.
    switch (index) {
      case 0:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa2%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 1:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 2:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa3%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 3:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa4%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 4:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa5%2Emp4" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 5:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FPausasActivas%2FEjercicio%20para%20pausa%20activa6%2Emp4&nav=eyJwbGF5YmFja09wdGlvbnMiOnsic3RhcnRUaW1lSW5TZWNvbmRzIjoyNC41NDM0OTJ9fQ%3D%3D&referrer=SharePointFileViewer%2EWeb&referrerScenario=PopOut%2Emis%2E65c35079%2Db8f3%2D4530%2Daa65%2D2482c5654e09" style={{ width: '100%', height: '100%', border: 'none' }} />;
      // Añadir más casos según sea necesario
      default:
        return null;
    }
  }

  handleFocusChange = (index: number | null) => {
    this.setState({ focusedIndex: index });
  };
  public render(): React.ReactElement<IPage8Props> {
    const { showModal, modalImages, currentImageIndex, showPausasActivasModal, focusedIndex,modalTab } = this.state;
    return (
      <section>
        {/* Imagen */}
        <img
          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701959696568.jpeg"
          alt="Imagen"
          style={{ height: '25vh', width: '100%', objectFit: 'fill' }}
        />

        {/* Párrafo */}
        <p style={{ margin: '1% 5% 1% 5%' ,fontSize:'.7rem'}}>
          Nuestro propósito fundamental es proteger la salud, seguridad y bienestar físico, mental y social de los colaboradores en las instalaciones de la compañía; promoviendo y manteniendo ambientes de trabajo saludables y sostenibles, identificando y evaluando los riesgos relacionados con la actividad realizada y fomentando hábitos de vida saludables, programas de salud y bienestar y generando espacios de formación y capacitación.
        </p>

        {/* Contenedor con borde azul claro */}
        <div style={{ borderTop: '5px double #add8e6', borderBottom: '5px double #add8e6', display:'flex', marginBottom:'2%'}}>
          {/* Primera división */}
          <div style={{ width: '50%' }}>
            <h2 style={{ color: '#000080',fontWeight:'600' }}>Objetivos</h2>
            <ul style={{ fontSize: '1.rem', marginRight: '5%' }}>
              <li>Conocer las generalidades del SG-SST</li>
              <li>Actualizar y reforzar en los colaboradores temas relevantes y relacionados con SST</li>
              <li>Fortalecer los conocimientos para identificación de peligros y control de riesgos, prevención AT, EL</li>
            </ul>
          </div>

          {/* Segunda división con botones */}
          <div style={{ width: '50%' }}>
            <button style={{ width: '100%', backgroundColor: '#000080', color: 'white', borderRadius: '25px', padding:'13px',margin: '1rem 0px .2rem;',fontWeight:'600' }}onClick={this.openPausasActivasModal}>Pausas activas</button>
            <button style={{ width: '100%', backgroundColor: '#add8e6', borderRadius: '25px', margin: '.5rem 0px .2rem',color: 'white', padding:'13px',fontWeight:'600' }}onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_732/1692247926893.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_733/1692247997403.jpg'])}>Riesgos y accidentes de trabajo</button>
            <button style={{ width: '100%', backgroundColor: '#008000', color: 'white', borderRadius: '25px', padding:'13px', margin: '.5rem 0px .2rem',fontWeight:'600' }}onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_734/1692248160818.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_735/1692248189473.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_736/1692248234468.jpg'])}>Comités de Esri NOSA</button>
          </div>
        </div>

        {/* Div con imagen y título */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '11vh', backgroundColor: 'rgba(0, 0, 0, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'white', textTransform: 'uppercase' }}>DERECHOS Y DEBERES</h2>
          </div>
          <img
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1693843795742.jpeg"
            alt="Imagen Derechos y Deberes"
            style={{ width: '100%', height: '11vh', objectFit: 'cover' }}
          />
        </div>

         {/* Contenedor con tres columnas y listas */}
        <div style={{ display: 'flex', flexDirection: 'row', height: 'auto' }}>
          {/* Columna 1 */}
          <div style={{ flex: 1, padding: '1rem'}}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>Procurar el cuidado integral de su salud.</li>
              <li>Suministrar información clara, veraz y completa sobre su estado de salud.</li>
              <li>Cumplir las normas de seguridad e higiene propias de la empresa.</li>
              <li>Participar en la prevención de los riesgos profesionales mediante las actividades que determinen de manera conjunta la empresa y la ARL.</li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>El derecho a un proceso de inducción y de entrenamiento en seguridad.</li>
              <li>Garantía de la salud y la seguridad.</li>
              <li>La inducción y el entrenamiento de una persona que ingresa a una empresa o que es cambiada de puesto de trabajo debe ser integral.</li>
              <li>Conocer las normas de seguridad es una condición necesaria para el desarrollo de la ocupación del trabajador y en consecuencia, el logro de buenos resultados para la empresa.</li>
              <li>Conocer claramente nuestro oficio y estar capacitado para hacerlo.</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <ul style={{ fontSize: '0.8rem', margin: 0 }}>
              <li>Implementar y mantener SG-SST.</li>
              <li>Reportar e investigar los accidentes e incidentes de trabajo.</li>
              <li>Realizar actividades de promoción y prevención.</li>
              <li>Velar por el bienestar y salud de los colaboradores en sus áreas de trabajo.</li>
              <li>Identificar, evaluar y valorar riesgos y peligros y establecer.</li>
            </ul>
          </div>
        </div>

        <div style={{ height: '50vh', width: '100%', border:'none' }}>
          <iframe
            src="https://esricolombia.sharepoint.com/Areas/GH/SiteAssets/Forms/AllItems.aspx?id=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FSST%2Fcertificacion%2Dautoevaculaci%C3%B3n%2Destandares%2D2022%5F29MAYO023%2Epdf&parent=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FSST"
            title="Certificación Autoevacuación Estándares 2022"
            style={{ width: '100%', height: '100%', border:'none' }}
          />
        </div>
        {showPausasActivasModal && (
          <div className={styles.pausasActivasModalOverlay}>
          <div className={styles.pausasActivasModalContent}>
          <div className={styles.modalTabs}>
                <div
                  className={`${styles.modalTab} ${modalTab === 'pausas' ? styles.activeTab : ''}`}
                  onClick={() => this.handleModalTabClick('pausas')}
                >
                  Pausas
                </div>
                <div
                  className={`${styles.modalTab} ${modalTab === 'ejercicios' ? styles.activeTab : ''}`}
                  onClick={() => this.handleModalTabClick('ejercicios')}
                >
                  Ejercicios
                </div>
              </div>
              <button className={styles.closeButton} onClick={this.closePausasActivasModal}>&times;</button>
           <div style={{ display:'flex',justifyContent:'center'}}>
                {modalTab === 'pausas' ? ( 
                <div style={{width:'100%',height:'100%'}}>
                  <img title="" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_611/1692200405315.png"
                   alt=""
                  style={{display: 'block', objectFit: 'fill', objectPosition: '50% 50%', height:'100%', width:'100%'}}/>
                </div>  ):(
                  <div style={{width:'100%',height:'100%'}}>
            
              {/* Contenido del modal de "Pausas activas" */}
              <div className={styles.modalRow}>
                {/* Primer div */}
                <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(0)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 0 ? (
                  this.renderIframeContent(0)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246906296.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#004675' }}>
                    <div className={styles.flexibilityText}><p>FLEXIBILIDAD DE TRICEPS</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicios de brazos y hombros</em></strong></div>
                </div>
                </div>
                )}
                </div>
                <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(1)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 1 ? (
                  this.renderIframeContent(1)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246913963.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#004675' }}>
                    <div className={styles.flexibilityText}><p>FLEXIÓN DE TOBILLOS</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicio de piernas</em></strong></div>
                </div>
                </div>
                )}
                </div>
                <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(2)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 2 ? (
                  this.renderIframeContent(2)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246925131.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#004675' }}>
                    <div className={styles.flexibilityText}><p>SEMICÍRCULO DE CUELLO</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicios de cuello y hombros</em></strong></div>
                </div>
                </div>
                )}
                </div>
                {/* ... Repite esto para los demás divs */}
              </div>
              <div className={styles.modalRow}>
              <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(3)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 3 ? (
                  this.renderIframeContent(3)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246929500.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                    <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBRO</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicios de brazos y hombros</em></strong></div>
                </div>
                </div>
                )}
                </div>
                <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(4)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 4 ? (
                  this.renderIframeContent(4)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246936616.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                    <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBROS Y BICEPS</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicios de brazos y hombros</em></strong></div>
                </div>
                </div>
                )}
                </div>
                <div className={styles.modalColumn} onMouseEnter={() => this.handleFocusChange(5)}
              onMouseLeave={() => this.handleFocusChange(null)}>
                {focusedIndex === 5 ? (
                  this.renderIframeContent(5)
                ) : (
                  <div style={{position:'relative',width:'100%',height:'100%'}}>
                  <div className={styles.imageContainer}>
                    {/* Contenido de la imagen */}
                    <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1692246941402.jpeg' alt="Imagen" className={styles.modalImage} />
                  </div>
                  <div className={styles.blankContainer} style={{ background: '#2b7434' }}>
                    <div className={styles.flexibilityText}><p>EXTENSIÓN DE HOMBROS Y PECTORAL</p></div>
                    <div className={styles.curva}><strong style={{color:'var(--light-200)',fontSize:'20px',fontWeight:'400'}}><em style={{color:'white'}}>Ejercicios de brazos y hombros</em></strong></div>
                </div>
                </div>
                )}
                </div>
                {/* ... Repite esto para los demás divs */}
              </div>
              </div>
              )}
            </div>
          </div>
          </div>
        )}
        {showModal && (
          <div className={styles.modalOverlay} onClick={this.closeModal}>
            <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={this.closeModal}>&times;</button>
              <div className={styles.modalSlider}>
              <button className={styles.sliderButton} onClick={(e) => this.navigateImages('prev', e)}>&lt;</button>
              <img
              className={styles.modalImage}
              src={modalImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              />
            <button className={styles.slideButton} onClick={(e) => this.navigateImages('next', e)}>&gt;</button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

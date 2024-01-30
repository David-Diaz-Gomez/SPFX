import * as React from 'react';
import styles from './Page6.module.scss';
import type { IPage6Props } from './IPage6Props';

export default class Page6 extends React.Component<IPage6Props, { slideIndex: number; showOverlay: boolean,currentSlide: number }> {
  private intervalId: number | null = null;

  constructor(props: IPage6Props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slideIndex: 0,
      showOverlay: false, // Nuevo estado para controlar la visibilidad del overlay
    };
  }

  handleNextSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide + 1) % 9 });
  };

  handlePrevSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide - 1 + 5) % 9 });
  };


  componentDidMount() {
    // Inicia el intervalo para cambiar los slides cada 5 segundos
    this.intervalId = window.setInterval(this.nextSlide, 5000);
  }

  componentWillUnmount() {
    // Limpia el intervalo al desmontar el componente
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }
  }

  private nextSlide = () => {
    this.setState((prevState) => ({
      slideIndex: prevState.slideIndex < 5 ? prevState.slideIndex + 1 : 0,
    }));
  };

  private prevSlide = () => {
    this.setState((prevState) => ({
      slideIndex: prevState.slideIndex > 0 ? prevState.slideIndex - 1 : 5,
    }));
  };

  private handleMouseEnter1 = () => {
    this.setState({ showOverlay: true });
  };

  private handleMouseLeave1 = () => {
    this.setState({ showOverlay: false });
  };

  private handleMouseEnter = () => {
    // Detiene el intervalo cuando el mouse entra al área del contenedor
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }
  };

  private handleMouseLeave = () => {
    // Reinicia el intervalo cuando el mouse sale del área del contenedor
    this.intervalId = window.setInterval(this.nextSlide, 5000);
  };

  public render(): React.ReactElement<IPage6Props> {
    const { slideIndex, showOverlay } = this.state;

    return (
      <>
        <section>
          <div className={styles.container}>
            <img
              src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701959141245.jpeg'
              alt="Background"
              className={styles.backgroundImage}
            />
          </div>
        </section>
        <section>
          <div className={styles.contenedorPrincipal}>
          <div
            className={styles.contenedor20}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
              <div className={styles.slideContenedor} style={{ transform: `translateX(-${slideIndex * 16.7}%)` }}>
              <div
            className={`${styles.tarjeta} ${styles.otro1}`}
            onMouseEnter={this.handleMouseEnter1}
            onMouseLeave={this.handleMouseLeave1}
          >
            <p className={styles.unique} style={{ fontWeight: '600' }}>¿QUÉ QUIERES APRENDER HOY?</p>    
            {/* Nuevo overlay con la información */}
            {showOverlay && (
              <div className={styles.overlay}>
                <p style={{textAlign:'justify'}}>
                  Empieza esta experiencia de formación la cual podrá transformar tu carrera profesional. Tienes en tu poder
                  la plataforma de E-Learning más grande de Latinoamérica, con más de 4000 cursos que te brindarán nuevos
                  conocimientos y habilidades semana a semana, los cuales funcionan con la metodología microlearning:
                  aprendizaje profundo en corto tiempo. Puedes utilizar la plataforma en cualquier momento, es de fácil acceso
                  y cuenta con mucha información para fortalecer tus habilidades.
                </p>
              </div>
            )}
          </div>
                <div className={styles.tarjeta}>
                  <p style={{fontWeight:'600'}}>Aprende temas de actualidad con los mejores expertos en inglés.</p>
                </div>
                <div className={`${styles.tarjeta} ${styles.otro}`} >
                  <p style={{fontWeight:'600'}}>Aprender a mejorar tus habilidades en escritura, lectura, compresión y conversación en tu segundo idioma.</p>
                </div>
                <div className={styles.tarjeta}>
                  <p style={{fontWeight:'600'}}>Aprende a navegar y a conocer todo sobre lo que nuestra licencia MAX tiene para ti.</p>
                </div>
                <div className={styles.tarjeta}>
                <p>Sigue creciendo gracias a tus nuevos conocimientos y habilidades. 
                <span className={styles.textoSubrayado}>
                ¿Te animas a comenzar a potenciar tu talento?
                </span>
                </p>
                </div>
                <div className={`${styles.tarjeta} ${styles.col}`}>
                  <p style={{marginTop:'100%'}}> <span style={{fontWeight:'600'}}>El HUB de aprendizaje</span> más completo de habla hispana.</p>
                  <a href='https://www.ubits.com/cursos/catalogo' target='_blank' className={styles.conoceCatalogo}>
                    Conoce el catálogo
                  </a>
                </div>
              </div>
              <div className={styles.buttonContainer}>
              <button className={styles.botonIzquierda} onClick={this.prevSlide}>{'<'}</button>
              <button className={styles.botonDerecha} onClick={this.nextSlide}>{'>'}</button>
              </div>
            </div>
            <div className={styles.contenedor60}>
              <iframe
                src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/embed.aspx?UniqueId=9ca12444-1b5d-418f-80dc-5d6a710b0bf6&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                title="iframe"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
            <div className={styles.contenedor20}>
              <div className={styles.divisiones}>
                <div className={styles.fraseCentrada}>
                  <p>CONOCE NUESTROS CONVENIOS DE</p>
                </div>
                <a href="https://universidadean.edu.co/">
                  <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1699544636055.png" alt="Convenio 1" />
                </a>
                <a href="https://ucompensar.edu.co/">
                  <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1699544733747.png" alt="Convenio 2" />
                </a>
                <a href="https://ucompensar.edu.co/">
                  <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1699545244683.png" alt="Convenio 3" />
                </a>
                <a href="https://marstals.com/">
                  <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1699544938353.png" alt="Convenio 4" />
                </a>
                <a href="https://www.colmenaseguros.com/Paginas/default.aspx">
                  <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1699545042413.png" alt="Convenio 5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section style={{ height: '90vh', width: '100%' }}>
  <iframe
    src="https://www.arcgis.com/apps/dashboards/0811b51f62a84b2ab1121e5d1e001d5f"
    title="ArcGIS Dashboard"
    width="100%"
    height="100%"
    frameBorder="0"
  ></iframe>
</section>
<section>
          {/* Nuevo Slider de 2 imágenes y contenedor */}
          <div className={styles.slider2andContainer}>
            <div className={styles.slides2} style={{ transform: `translateX(-${this.state.currentSlide * 100}%)` }}>
              {/* Imágenes del slider */}
              <div className={styles.slide2}>
                <img
                  alt="Image 1"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2698/1700169282037.png"
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 2"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2699/1700169392078.png"
                  className={styles.imguni2}
                />
              </div>   
              <div className={styles.slide2}>
                <img
                  alt="Image 3"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2700/1700175648917.png"
                  className={styles.imguni2}
                />
              </div>   
              <div className={styles.slide2}>
                <img
                  alt="Image 4"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2701/1700175788356.png"
                  className={styles.imguni2}
                />
              </div>   
              <div className={styles.slide2}>
                <img
                  alt="Image 5"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2702/1700175927136.png"
                  className={styles.imguni2}
                />
              </div>  
              <div className={styles.slide2}>
                <img
                  alt="Image 6"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2737/1700176109895.png"
                  className={styles.imguni2}
                />
              </div>  
              <div className={styles.slide2}>
                <img
                  alt="Image 7"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2738/1700176233423.png"
                  className={styles.imguni2}
                />
              </div>  
              <div className={styles.slide2}>
                <img
                  alt="Image 8"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2739/1700176370037.png"
                  className={styles.imguni2}
                />
              </div>  
              <div className={styles.slide2}>
                <img
                  alt="Image 9"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2740/1700176513333.png"
                  className={styles.imguni2}
                />
              </div>              
            </div>
            <div className={styles.controls}>
            <span className={styles.span} onClick={this.handlePrevSlide}>{'<'}</span>
            <span className={styles.span} onClick={this.handleNextSlide}>{'>'}</span>
          </div>
            {/* Contenedor */}
            <a className={styles.container40} href='https://app.powerbi.com/groups/me/reports/cba9747d-757e-468a-b040-a9b860e67548?ctid=249bb730-97be-413c-815a-77ccfa75c445&pbi_source=linkShare' target='_blank'>
            <div>
            </div>
            </a>
          </div>
          {/* Controles del slider */}
        </section>
      </>
    );
  }
}

import * as React from 'react';
import styles from './Page5.module.scss';
import type { IPage5Props } from './IPage5Props';

export default class Page5 extends React.Component<IPage5Props, { currentSlide: number, isModalOpen: boolean, sliderImages: string[],currentSlideNew: number }> {
  constructor(props: IPage5Props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentSlide: 0,
      sliderImages: [], // Agregamos un array para manejar las imágenes del slider
      currentSlideNew: 0,
    };
  }

  handleNextSlide = (): void => {
    const { currentSlideNew } = this.state;
    this.setState({ currentSlideNew: (currentSlideNew + 1) % 14 });
  };

  handlePrevSlide = (): void => {
    const { currentSlideNew } = this.state;
    this.setState({ currentSlideNew: (currentSlideNew - 1 + 14) % 14 });
  };

  renderSlider() {
    const { currentSlideNew } = this.state;

    return (
      <div className={styles.slider}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlideNew * 100}%)` }}>
          <div className={styles.slide}>
            <img alt="Image 1" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2673/1700188172209.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 2" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2674/1700085487668.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 3" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2732/1700174409729.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 4" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2677/1700085898845.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 5" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2676/1700085785454.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 6" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2679/1700086193649.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 7" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2678/1700086003309.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 8" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2681/1700086537963.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 9" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2680/1700086311866.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 10" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2683/1700086828288.png"/>
          </div>
          <div className={styles.slide}>
            <img alt="Image 11" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2682/1700086624978.png" />
          </div>
          <div className={styles.slide}>
            <img alt="Image 12" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2685/1700086956381.png" />
          </div>
          <div className={styles.slide}>
            <img alt="Image 13" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2684/1700086895758.png" />
          </div>
          <div className={styles.slide}>
            <img alt="Image 14" src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2733/1700176749472.png" />
          </div>
        </div>
        <button className={styles.navButton} onClick={this.handleNextSlide}>
          {'>'}
        </button>
        <button className={styles.navButton} onClick={this.handlePrevSlide}>
          {'<'}
        </button>
      </div>
    );
  }

  private openModal = (sliderImages: string[] = []) => {
    this.setState({
      isModalOpen: true,
      sliderImages,
    });
  };

  private closeModal = () => {
    this.setState({
      isModalOpen: false,
      sliderImages: [],
      currentSlide: 0,
    });
  };

  private slidePrev = () => {
    const { currentSlide } = this.state;
    if (currentSlide > 0) {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  private slideNext = () => {
    const { currentSlide, sliderImages } = this.state;
    if (currentSlide < sliderImages.length - 1) {
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  public render(): React.ReactElement<IPage5Props> {
    const { isModalOpen, currentSlide, sliderImages } = this.state;

    return (
      <>
      <div className={styles.pageContainer}>
        <section>
          <div className={styles.container}>
            <img
              src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701875485253.jpeg'
              alt="Background"
              className={styles.backgroundImage}
            />
          </div>
        </section>
        <section>
          <div className={styles.container1}>
            <div className={styles.card} onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1964/1696484347516.png'])}>
              <p>Conoce los objetivos y beneficios del plan carrera</p>
            </div>
            <div className={styles.card} onClick={() => this.openModal(['https://geoapps.esri.co/Recursos/RH_sharepoint/Slide1.png', 'https://geoapps.esri.co/Recursos/RH_sharepoint/Slide2.png', 'https://geoapps.esri.co/Recursos/RH_sharepoint/Slide3.png', 'https://geoapps.esri.co/Recursos/RH_sharepoint/Slide4.png'])}>
              <p>Formas de avanzar en el plan carrera</p>
            </div>
            <div className={styles.card} onClick={() => this.openModal(['https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1981/1696486137723.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1982/1696486249699.jpg', 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1983/1696486322276.jpg'])}>
              <p>Perfiles y escalafones</p>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={this.closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={this.closeModal}>
                X
              </button>
              {/* Contenido del modal */}
              {sliderImages.length > 1 ? (
                // Slider para más de una imagen
                <div>
                <div>
                  <img
                    src={sliderImages[currentSlide]}
                    alt={`Imagen ${currentSlide + 1}`}
                    className={styles.modalImage}
                  />
                </div>
                <button onClick={this.slidePrev}>&#8249; Anterior</button>
                <button onClick={this.slideNext}>&#8250; Siguiente</button>
                </div>
              ) : (
                // Solo una imagen
                <img
                  src={sliderImages[0]}
                  alt={`Imagen ${currentSlide + 1}`}
                  className={styles.modalImage}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <section className={styles.section2}>
      <iframe src="https://geoapps.esri.co/AppGestionHumana/"></iframe>
      </section>
      <section className={styles.section3}>
        <img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2671/1700083311160.png"/>
      </section>
      <section style={{marginTop:'2%'}}>
      {this.renderSlider()}
      </section>
      <section style={{marginTop:'2%'}}>
      <a href="https://www.esri.co/es-co/nosotros/geogeeks/inicio" target='_blank' className={styles.containerLink}>
        <div className={styles.container4}>
          <div className={styles.textContainer}>
            SEMILLERO DE INNOVACION GEOGRAFICA GEOGEEKS
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2625/1699661118195.png"
              alt="Geogreks Logo"
              className={styles.image}
            />
          </div>
        </div>
      </a>
      </section>
      </>
    );
  }
}

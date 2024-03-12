import * as React from 'react';

import styles from './Page5.module.scss';
import type { IPage5Props } from './IPage5Props';
import axios, { AxiosRequestConfig } from 'axios';
var XLSX = require("xlsx");

export default class Page5 extends React.Component<IPage5Props, { currentSlide: number, isModalOpen: boolean, sliderImages: string[],currentSlideNew: number,img_testimonios_plan_carrera:string[] }> {
  constructor(props: IPage5Props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentSlide: 0,
      sliderImages: [], // Agregamos un array para manejar las imágenes del slider
      currentSlideNew: 0,
      img_testimonios_plan_carrera: [],
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

  getTestominiosPlanCarrera = async(url:string) => {
    const options: AxiosRequestConfig<any> = {
      url,
      responseType: "arraybuffer"
    }

    let axiosResponse = await axios(options)

    const workbook = XLSX.read(axiosResponse.data, { type: 'binary' });

    let worksheets = workbook.SheetNames.map((sheetName: string) => {
      return { sheetName, data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false, dateNF: 'yyyy-mm-dd' }) };
    });

    console.log("este es el worksheet que voy a recorrer", worksheets);
    const allTestimonios: any = []

    worksheets[0].data.forEach((element: any) => {
      allTestimonios.push(element);
    });

    return allTestimonios;
  };

  componentDidMount(){
    this.getTestominiosPlanCarrera("https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Plan_carrera/Testimonios_plan_carrera/Urls_Imagenes_plan_carrera.xlsx")
    .then((testimonios: any) => {
      console.log("Estos son los testimonios", testimonios);
      this.setState({ img_testimonios_plan_carrera: testimonios });
    });
  }
  
  renderSlider() {
    const { currentSlideNew } = this.state;

    return (
      <div className={styles.slider}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentSlideNew * 100}%)` }}>
          {this.state.img_testimonios_plan_carrera &&(
            this.state.img_testimonios_plan_carrera.map((img: any, index: number) => {
              return (
                <div className={styles.slide}>
                  <img alt={`Image ${index + 1}`} src={img.IMG_TESTIMONIO} />
                </div>
              );
            })
          )}
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
              src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701959512498.jpeg'
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
      {/* <iframe src="https://geoapps.esri.co/AppGestionHumana/"></iframe> */}
      <iframe title="Plan_carrera_Caminos" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=29d96bd7-73fb-4109-9403-416213bb58a2&autoAuth=true&ctid=249bb730-97be-413c-815a-77ccfa75c445" frameBorder="0" allowFullScreen={true}></iframe>
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

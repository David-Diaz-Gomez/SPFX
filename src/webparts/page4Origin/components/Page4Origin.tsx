import * as React from 'react';
import styles from './Page4Origin.module.scss';
import type { IPage4OriginProps } from './IPage4OriginProps';

export default class Page4Origin extends React.Component<IPage4OriginProps, { currentSlide: number,currentSlideFirst: number, currentSlideSecond: number }> {
  constructor(props: IPage4OriginProps) {
    super(props);
    this.state = {
      currentSlide: 0,
      currentSlideFirst: 0,
      currentSlideSecond: 0,
    };
  }

  handleNextSlideFirst = (): void => {
    const { currentSlideFirst } = this.state;
    this.setState({ currentSlideFirst: (currentSlideFirst + 1) % 5 });
  };

  handlePrevSlideFirst = (): void => {
    const { currentSlideFirst } = this.state;
    this.setState({ currentSlideFirst: (currentSlideFirst - 1 + 5) % 5 });
  };

  handleNextSlideSecond = (): void => {
    const { currentSlideSecond } = this.state;
    this.setState({ currentSlideSecond: (currentSlideSecond + 1) % 12 });
  };

  handlePrevSlideSecond = (): void => {
    const { currentSlideSecond } = this.state;
    this.setState({ currentSlideSecond: (currentSlideSecond - 1 + 12) % 12 });
  };

  handleNextSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide + 1) % 2 });
  };

  handlePrevSlide = (): void => {
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide - 1 + 2) % 2 });
  };

  public render(): React.ReactElement<IPage4OriginProps> {
    return (
      <>
        <section>
          <div className={styles.container}>
            <img
              src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1701875485253.jpeg'
              alt="Background"
              className={styles.backgroundImage}
            />
          </div>
        </section>
        <section className={styles.cardsSection}>
          <div className={styles.card}>
            <h3>PROGRAMA</h3>
            <p>
              Hemos diseñado este programa para que todos los nuevos colaboradores de Esri Nosa reciban la información necesaria de nuestros procesos internos para que conecten con nuestra cultura empresarial. Además, conozcan sobre las funciones y objetivos del perfil que van a desempeñar en la organización.
            </p>
          </div>
          <div className={styles.card}>
            <h3>OBJETIVO</h3>
            <p>
              Lograr que el nuevo talento de Esri Nosa se sienta bienvenido y contento por formar parte de una organización de primer nivel.
            </p>
          </div>
        </section>
        <section>
          {/* Nuevo Slider de 2 imágenes y contenedor */}
          <div className={styles.slider2andContainer}>
            <div className={styles.slides2} style={{ transform: `translateX(-${this.state.currentSlide * 100}%)` }}>
              {/* Imágenes del slider */}
              <div className={styles.slide2}>
                <img
                  alt="Image 1"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1618/1695078178418.jpg"
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 2"
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1624/1695078491954.jpg"
                  className={styles.imguni2}
                />
              </div>              
            </div>
            <div className={styles.controls}>
            <span className={styles.span} onClick={this.handlePrevSlide}>{'<'}</span>
            <span className={styles.span} onClick={this.handleNextSlide}>{'>'}</span>
          </div>
            {/* Contenedor */}
            <div className={styles.container40}>
              <div className={styles.card1} style={{ backgroundPosition: 'center' }}>
                <h3>ONBOARDING LMS</h3>
                <p>
                  En SuccessFactors creamos el programa online de onboarding con la finalidad que todos los colaboradores de Esri Nosa tengan acceso a esta información y los nuevos talentos puedan completarlo como parte del proceso de entrenamiento.
                </p>
                <a href="https://login.microsoftonline.com/249bb730-97be-413c-815a-77ccfa75c445/saml2?SAMLRequest=fZJBb9swDIX%2FiqC7bMt2pkSIU2QLigXotqB1e%2BhlkBm6FWBLmSg327%2Bf46RFd1iv1ON75Ectr373HXvBQNa7issk4wwd%2BL11TxW%2Fr6%2FFnF%2BtlmT6Lj%2Fo9RCf3S3%2BGpAiGxsd6fNLxYfgtDdkSTvTI%2BkI%2Bm797UbnSaYPwUcPvuNsMzZaZ%2BIU9hzjgXSadv7JuqS3EDz5NnrXWYcJ%2BD7Ny0XTqCITC9WgKGUBYi5nRigF0Bo1g7KcpdMEnF37ADgNWPHWdIScbTcV%2FymbAor5YvRoCiXKUhlhlDECSjQN5GNRnaREA24dReNixfMsL0UmRS5r%2BUnLhS6yZJ7PHjnbXVb5bN0Z0Ud7N2cR6a91vRO7H3c1Zw%2BvqEcBv4DVU3p4T%2FRjY0OE4QSRr14hHo%2FHhAYAJGoNRB%2FoRHCZvg94u%2BP30XG72fnOwh%2B27jp%2F%2FBLQRKx4DANOLHsT%2Fz%2BDTORUsXvRTlI9ODog2NbinqerS%2By%2FH2b1Fw%3D%3D&RelayState=%2Fsf%2Fhome%3Fcompany%3DesricolombP1%26loginMethod%3DSSO%26_s.crb%3DWoOh140c%25252fTktdOZtfEMAUDUN3RLtZfEIXREXjXxP1po%25253d&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=SsY11GVsDv%2BnFJirMX0%2BwABDf3ecj7skR%2FmDW0RYKVI%2F4VTmzXcf3zKI6GkukzhKTp%2BHsaml9CLTf98fYh6ZJOkUc1BA2W0ghLYdjxu0y3NKPHcg7xijgQX%2Baj9rcny0ygW92GcW%2BQl7Z%2BGnp7jnwOmYcwlgfP%2FiLMEeD8ITbOA%3D" target='_blank' className={styles.infoButton}>¡Más información!</a>
              </div>
            </div>
          </div>
          {/* Controles del slider */}
        </section>
        <section className={styles.imageSection} style={{marginBottom:'0'}}>
        <div className={styles.container}>
          <a href="https://app.powerbi.com/groups/me/reports/b251867b-e70d-4382-aee3-86653f549685?ctid=249bb730-97be-413c-815a-77ccfa75c445&pbi_source=linkShare" target='_blank' className={styles.divimg1}>
            <div>
            <img
              className={styles.image1}
              src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2704/1700170921257.png"
              alt="Imagen 1"
            />
            </div>
          </a>
          <div className={styles.divimg2}>
          <img
            className={styles.image2}
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2760/1700179224557.png"
            alt="Imagen 2"
          />
          </div>
        </div>
      </section>
      <section className={styles.imageSection}>
          <div className={styles.container}>
            {/* Primer Slider con 5 imágenes */}
            <div className={`${styles.slider2andContainer} ${styles.firstSlider}`}>
              <div className={styles.slides2} style={{ transform: `translateX(-${this.state.currentSlideFirst * 100}%)` }}>
                {/* Imágenes del primer slider */}
                <div className={styles.slide2}>
                  <img
                    alt="Image 1"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2712/1700172316217.png"
                    className={styles.imguni2}
                  />
                </div>
                <div className={styles.slide2}>
                  <img
                    alt="Image 2"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2713/1700172407300.png"
                    className={styles.imguni2}
                  />
                </div>
                <div className={styles.slide2}>
                  <img
                    alt="Image 3"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2714/1700172481958.png"
                    className={styles.imguni2}
                  />
                </div>  
                <div className={styles.slide2}>
                  <img
                    alt="Image 4"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2715/1700172579065.png"
                    className={styles.imguni2}
                  />
                </div>  
                <div className={styles.slide2}>
                  <img
                    alt="Image 5"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2716/1700172665445.png"
                    className={styles.imguni2}
                  />
                </div>              
              </div>
              {/* Controles del primer slider */}
              <div className={styles.controls1}>
                <span className={styles.span1} onClick={this.handlePrevSlideFirst}>{'<'}</span>
                <span className={styles.span1} onClick={this.handleNextSlideFirst}>{'>'}</span>
              </div>
            </div>

            {/* Segundo Slider con 12 imágenes */}
            <div className={`${styles.slider2andContainer} ${styles.secondSlider}`}>
            <div className={styles.slides2} style={{ transform: `translateX(-${this.state.currentSlideSecond * 100}%)` }}>
              <div className={styles.slide2}>
                <img
                  alt="Image 1"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2717/1700172768837.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 2"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2718/1700172835966.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 3"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2719/1700172895533.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 4"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2720/1700172953819.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 5"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2771/1700181015851.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 6"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2772/1700181164509.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 7"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2773/1700181321465.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 8"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2774/1700181483101.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 9"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2775/1700181630051.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 10"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2776/1700181868715.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 11"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2777/1700182472863.png'
                  className={styles.imguni2}
                />
              </div>
              <div className={styles.slide2}>
                <img
                  alt="Image 12"
                  src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2778/1700182632395.png'
                  className={styles.imguni2}
                />
              </div>
              </div>
              {/* Controles del segundo slider */}
              <div className={styles.controls1}>
                <span className={styles.span1} onClick={this.handlePrevSlideSecond}>{'<'}</span>
                <span className={styles.span1} onClick={this.handleNextSlideSecond}>{'>'}</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

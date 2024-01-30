import * as React from 'react';
import styles from './Banner.module.scss';
import type { IBannerProps } from './IBannerProps';

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    const { hasTeamsContext } = this.props;

    return (
      <>
      <section style={{justifyContent:'center',margin:'0',display:'flex', height:'auto'}}>
      <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
        <div className={styles.bannerImage} style={{justifyContent:'center', backgroundColor:'transparent'}}>
          {/* Imagen principal */}
          <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2012/1696513203238.png"
            alt=""
            style={{ display: "block", objectFit: "contain", width: '100%' }}
          />
        </div>

        <div className={styles.socialIcons} style={{maxWidth:'100%'}}>
          {/* Primer conjunto de iconos */}
          <a href='https://www.facebook.com/EsriColombia' target='_blank' style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '30%',margin:'1%' }}>
          <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2230/1698290028186.png"
            alt=""
            className="w-100 h-100"
            style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '100%',margin:'1%' }}
          />
          </a>
          <a href='https://twitter.com/EsriColombia' target='_blank' style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '30%',margin:'1%' }}>
          <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2231/1698290120830.png"
            alt=""
            className="w-100 h-100"
            style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%",width: '100%',margin:'1%' }}
          />
          </a>
          <a href='https://www.linkedin.com/company/esri-colombia/' target='_blank' style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '30%',margin:'1%' }}>
          <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2232/1698290150589.png"
            alt=""
            className="w-100 h-100"
            style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '100%',margin:'1%' }}
          />
          </a>
        </div>

        <div className={styles.socialIcons} style={{maxWidth:'100%'}}>
          {/* Segundo conjunto de iconos */}
        <a href='https://www.youtube.com/results?search_query=esri+colombia' target='_blank' style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '30%',margin:'1%' }}>          
        <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2234/1698290279219.png"
            alt=""
            className="w-100 h-100"
            style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '100%',margin:'1%' }}
          />
          </a>
          <a href='https://www.instagram.com/esricolombia/' target='_blank' style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '30%',margin:'1%' }}>          
          <img
            title=""
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2233/1698290230104.png"
            alt=""
            className="w-100 h-100"
            style={{ display: "block", objectFit: "contain", objectPosition: "50% 50%", width: '100%',margin:'1%' }}
          />
          </a>
        </div>
      </section>

             {/* Sección 2 (Replica la estructura anterior según sea necesario) */}
        <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
          <div>
            <p>
              <strong>ARCGIS</strong>
            </p>
            <hr style={{ width: '95%', border: '0.2px solid #000', margin: '10px 0' }} />
            <p>
            <a href='https://www.esri.com/es-es/arcgis/about-arcgis/overview' target='_blank' className={styles.lista}>Acerca de ArcGIS</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/capabilities/mapping/overview?rsource=https%3A%2F%2Fwww.esri.com%2Fes-es%2Farcgis%2Fproducts%2Fmapping%2Foverview' target='_blank' className={styles.lista}>Representación cartográfica</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-pro/overview' target='_blank' className={styles.lista}>ArcGIS Pro</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-enterprise/overview' target='_blank' className={styles.lista}>ArcGIS Enterprise</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-online/overview' target='_blank' className={styles.lista}>ArcGIS Online</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/develop-with-arcgis/overview' target='_blank' className={styles.lista}>API para desarrolladores</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-platform/overview' target='_blank' className={styles.lista}>Plataforma ArcGIS</a>
            </p>
            <p>
            <a href='https://www.esri.es/es-es/store/overview' target='_blank' className={styles.lista}>Tienda de Esri</a>
            </p>
          </div>
        </section>

        {/* Sección 3 (Replica la estructura anterior según sea necesario) */}
        <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
          <div>
            <p>
              <strong>COMUNIDAD</strong>
            </p>
            <hr style={{ width: '95%', border: '0.2px solid #000', margin: '10px 0' }} />
            <p>
            <a href='https://community.esri.com/' target='_blank' className={styles.lista}>Comunidad de Esri</a>
            </p>
            <p>
            <a href='https://www.esri.com/arcgis-blog/overview/' target='_blank' className={styles.lista}>Blog de ArcGIS</a>
            </p>
            <p>
            <a href='https://www.esri.com/en-us/industries/blog/overview/' target='_blank' className={styles.lista}>Blog del sector</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/user-research-testing/overview' target='_blank' className={styles.lista}>Investigación y pruebas de usuarios</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/about/ypn/overview' target='_blank' className={styles.lista}>Red de jóvenes profesionales de Esri</a>
            </p>
            <p>
            <a href='https://www.esri.com/en-us/about/events/index/overview' target='_blank' className={styles.lista}>Eventos</a>
            </p>
            </div>
        </section>

        <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
          <div>
            <p>
              <strong>COMPRENDER SIG</strong>
            </p>
            <hr style={{ width: '95%', border: '0.2px solid #000', margin: '10px 0' }} />
            <p>
            <a href='https://www.esri.com/es-es/what-is-gis/overview' target='_blank' className={styles.lista}>¿Qué son los SIG?</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/location-intelligence/overview' target='_blank' className={styles.lista}>Inteligencia de ubicación</a>
            </p>
            <p>
            <a href='https://www.esri.com/training/' target='_blank' className={styles.lista}>Formación</a>
            </p>
            <p>
            <a href='https://www.esri.com/about/newsroom/arcuser/' target='_blank' className={styles.lista}>ArcUser</a>
            </p>
            <p>
            <a href='https://www.esri.com/about/newsroom/arcnews/' target='_blank' className={styles.lista}>ArcNews</a>
            </p>
            <p>
            <a href='https://www.esri.com/about/newsroom/arcwatch/' target='_blank' className={styles.lista}>ArcWatch</a>
            </p>
            <p>
            <a href='https://www.esri.com/en-us/esri-press/overview' target='_blank' className={styles.lista}>Esri Press</a>
            </p>
            <p>
            <a href='https://mediaspace.esri.com/' target='_blank' className={styles.lista}>Vídeos de Esri</a>
            </p>
          </div>
        </section>


        <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
          <div>
            <p>
              <strong>EMPRESA</strong>
            </p>
            <hr style={{ width: '95%', border: '0.2px solid #000', margin: '10px 0' }} />
            <p>
            <a href='https://www.esri.com/es-es/about/about-esri/overview' target='_blank' className={styles.lista}>Acerca de Esri</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/contact' target='_blank' className={styles.lista}>Póngase en contacto con nosotros</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/about/careers/overview' target='_blank' className={styles.lista}>Profesiones</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/open-vision/overview' target='_blank' className={styles.lista}>Visión abierta</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/about/partners/overview' target='_blank' className={styles.lista}>Partners</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/about/code-of-conduct' target='_blank' className={styles.lista}>Código de conducta empresarial</a>
            </p>
            </div>
        </section>

        <section className={`${styles.banner} ${hasTeamsContext ? styles.bannerImage : ''}`}>
          <div>
            <p>
              <strong>PROGRAMAS ESPECIALES</strong>
            </p>
            <hr style={{ width: '95%', border: '0.2px solid #000', margin: '10px 0' }} />
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-for-personal-use/overview' target='_blank' className={styles.lista}>ArcGIS for Personal Use</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/arcgis/products/arcgis-for-student-use/overview' target='_blank' className={styles.lista}>ArcGIS for Student Use</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/industries/conservation/overview' target='_blank' className={styles.lista}>Conservación</a>
            </p>
            <p>
            <a href='https://www.esri.com/en-us/disaster-response/overview' target='_blank' className={styles.lista}>Respuesta ante desastres</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/industries/education/overview' target='_blank' className={styles.lista}>Educación</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/industries/nonprofit/overview' target='_blank' className={styles.lista}>Sin ánimo de lucro</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/covid-19/overview' target='_blank' className={styles.lista}>COVID-19</a>
            </p>
            <p>
            <a href='https://www.esri.com/es-es/racial-equity/overview' target='_blank' className={styles.lista}>Equidad racial</a>
            </p>
          </div>
        </section>
        </section>
      </>
    );
  }
}

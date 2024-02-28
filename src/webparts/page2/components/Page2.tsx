import * as React from 'react';
import styles from './Page2.module.scss';
import type { IPage2Props } from './IPage2Props';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class Page2 extends React.Component<IPage2Props, {}> {
  public render(): React.ReactElement<IPage2Props> {
    const { url4, url5, url6, url7, url8, url9 ,url10} = this.props;
    return (
      <section id="experiencias">
        <div className={styles.container}>
          <img
            src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/1699620717661.png"
            alt="Background"
            className={styles.backgroundImage}
          />

          {/* Pines y descripciones agrupados */}
          <div className={styles.pinContainer}>
            {/* Pin 1 y descripción */}
            <div className={styles.pinGroup1}>
              <a href={url4} target='_blank'>
                <img
                  src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Imagenes/pin_1.gif"
                  alt="Pin 1"
                  className={`${styles.pin} `}
                />
                <div className={styles.description}>SELECCIÓN</div>
              </a>
            </div>

            <div className={styles.pinGroup2}>
              <a href={url5} target='_blank'>
                <img
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2500/1699588711348.gif"
                  alt="Pin 2"
                  className={`${styles.pin}`}
                />
                <div className={styles.description}>ONBOARDING</div>
              </a>
            </div>

            {/* Repite para los demás pines */}
            <div className={styles.pinGroup3}>
              <a href={url6} target='_blank'>
                <img
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2498/1699588620966.gif"
                  alt="Pin 3"
                  className={`${styles.pin} `}
                />
                <div className={styles.description}>PLAN CARRERA</div>
              </a>
            </div>

            <div className={styles.pinGroup4}>
              <a href={url7} target='_blank'>
                <img
                  src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Experiencias/Logos/Pin%20entrenamiento%204.gif"
                  alt="Pin 4"
                  className={`${styles.pin} `}
                  style={{ width: '250px', height: '250px'}}
                />
                <div className={styles.description}>ENTRENAMIENTO</div>
              </a>
            </div>

            <div className={styles.pinGroup5}>
              <a href={url8} target='_blank'>
                <img
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2499/1699588674572.gif"
                  alt="Pin 5"
                  className={`${styles.pin} `}
             
                />
                <div className={styles.description}>BIENESTAR</div>
              </a>
            </div>

            <div className={styles.pinGroup6}>
              <a href={url9} target='_blank'>
                <img
                  src="https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/Experiencias/Logos/Pin%20Salud.gif"
                  alt="Pin 6"
                  className={`${styles.pin} `}
                  style={{ width: '250px', height: '250px'}}
                 
                />
                <div className={styles.description}>SST</div>
              </a>
            </div>
            {/* nuevo  */}
            <div className={styles.pinGroup7}>
              <a href={url10} target='_blank' >
                <img
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2686/1700189452529.gif"
                  alt="Pin 7"
                  className={`${styles.pin} `}
                 
                />
                <div className={styles.description}></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

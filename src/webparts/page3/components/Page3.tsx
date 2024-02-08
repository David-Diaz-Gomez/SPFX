import * as React from 'react';
import styles from './Page3.module.scss';
import type { IPage3Props } from './IPage3Props';


const logos = [
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2847/1701957796111.png',
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2851/1701958521378.png',
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2848/1701957961902.png',
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2849/1701958135066.png',
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2850/1701958351694.png',
  'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2852/1701958682737.png',
];
const urls = [
  'https://esri.okta.com/',
  'https://esricolombia.sharepoint.com/SitePages/Inicio-intranet.aspx',
  'https://performancemanager4.successfactors.com/sf/start/',
  'https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxODM3NTc3ODMwNCJ9/all',
  'https://esricolombia.sharepoint.com/SitePages/Inicio-intranet.aspx',
  'https://esricolombia.sharepoint.com/SitePages/Inicio-intranet.aspx',
  'https://app.genoma.work/jobs/esri',
  'https://esricolombia.sharepoint.com/SitePages/Inicio-intranet.aspx'
]
export default class Page3 extends React.Component<IPage3Props, {}> {
  
  public render(): React.ReactElement<IPage3Props> {
    return (
      <section className={styles.container} id="aplicaciones">
        <div className={styles.backgroundImage}>
          <img
            src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2298/1698323936309.jpg"
            alt="Background"
            className={styles.backgroundImage}
          />
        </div>
        <div className={styles.partitions}>
          {logos.map((logo, index) => (
            <a key={index} href={urls[index]} className={styles.partition} target='_blank'>
              <img src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
            </a>
          ))}
          <a href={urls[6]} className={styles.partition} target='_blank'>
            Convocatorias
          </a>
          <a  href={urls[7]} className={styles.partition} target='_blank'>
            Solicitud de ausentismo
          </a>
        </div>
      </section>
    );
  }
}


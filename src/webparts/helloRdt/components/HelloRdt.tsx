import * as React from 'react';
import styles from './HelloRdt.module.scss';
import type { IHelloRdtProps } from './IHelloRdtProps';

export default class HelloRdt extends React.Component<IHelloRdtProps, {}> {

  public render(): React.ReactElement<IHelloRdtProps> {
    const { url1,url2,url3 } = this.props;
    function handleClick(id:string) {
      console.log(id)
    }
    return (
      <section className={styles.completo}>
        <div className={styles.header}>
          <div className={styles.header_img}>
            <img title=""
              src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1225/1695061740076.png"
               alt=""
              style={{ display: "bloc", objectFit: "contain", objectPosition: "50% 50%", height: "100%", width: "100%" }} />
          </div>
          <div className={styles.header_list}>
            <ul className="list app-root-emotion-cache-ltr-0" role="menu">
              <li title="ORGANIZACIÓN " role="menuitem"
                className="scroll-item nav-item"><a id="jimu-link-app-0"
                  draggable="false" role="button" aria-pressed="true"
                  href={url1}
                  onClick={() => {handleClick("organizacion")}}
                  tabIndex={0}
                  className="jimu-btn jimu-link  app-root-emotion-cache-ltr-nzkanw nav-link jimu-outline-inside active btn btn-default"
                  aria-label="ORGANIZACIÓN "><span
                    className="jimu-nav-link-wrapper">ORGANIZACIÓN</span></a>
              </li>
              <li title="MAPA DE EXPERIENCIAS" role="menuitem"
                className="scroll-item nav-item"><a id="jimu-link-app-1"
                  draggable="false" role="button" aria-pressed="false"
                  href={url2}
                  onClick={() => {handleClick("experiencias")}}
                  tabIndex={0}
                  className="jimu-btn jimu-link  app-root-emotion-cache-ltr-nzkanw nav-link jimu-outline-inside btn btn-default"
                  aria-label="MAPA DE EXPERIENCIAS"><span
                    className="jimu-nav-link-wrapper">MAPA DE
                    EXPERIENCIAS</span></a></li>
              <li title="APLICACIONES" role="menuitem"
                className="scroll-item nav-item"><a id="jimu-link-app-2"
                  draggable="false" role="button" aria-pressed="false"
                  href={url3}
                  onClick={() => {handleClick("aplicaciones")}}
                  tabIndex={0}
                  className="jimu-btn jimu-link  app-root-emotion-cache-ltr-nzkanw nav-link jimu-outline-inside btn btn-default"
                  aria-label="APLICACIONES"><span
                    className="jimu-nav-link-wrapper">APLICACIONES</span></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    );
  }
}
import * as React from 'react';
import styles from './Home.module.scss';
import type { IHomeProps } from './IHomeProps';
import  HelloRdt  from '../../helloRdt/components/HelloRdt';
import  Page1  from '../../page1/components/Page1';
import  Banner from '../../banner/components/Banner';
import type { IBannerProps } from '../../banner/components/IBannerProps';

export default class Home extends React.Component<IHomeProps, {}> {
  public render(): React.ReactElement<IHomeProps> {
    const { url1,url2,url3 } = this.props;
    const {
      hasTeamsContext,
      userDisplayName
    } = this.props;

    const bannerProps: IBannerProps = {
      hasTeamsContext: hasTeamsContext,
      description: "Descripción predeterminada",
      isDarkTheme: false,
      environmentMessage: "Mensaje predeterminado",
      userDisplayName: "Nombre de usuario predeterminado",
      // Otras propiedades requeridas de IBannerProps que debes proporcionar aquí
    };
    
    return (
      <section className={`${styles.home} ${hasTeamsContext ? styles.teams : ''}`}>
        {/* Renderizar el componente HelloRdt */}
        <HelloRdt 
        url1={url1}
        url2={url2} 
        url3={url3}
        description="Descripción predeterminada"
        isDarkTheme={false}
        environmentMessage="Mensaje predeterminado"
        hasTeamsContext={false}
        userDisplayName="Nombre de usuario predeterminado"
      />

        {/* Renderizar el componente Page1 */}
        <Page1 
          hasTeamsContext={hasTeamsContext}
          userDisplayName={userDisplayName}
          description="Descripción predeterminada"
          isDarkTheme={false}
          environmentMessage="Mensaje predeterminado"
        />

        {/* Renderizar el componente Banner */}
        <Banner {...bannerProps} />

      </section>
    );
  }
}

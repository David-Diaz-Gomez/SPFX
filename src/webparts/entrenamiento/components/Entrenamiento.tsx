import * as React from 'react';
import type { IEntrenamientoProps } from './IEntrenamientoProps';
import  HelloRdt  from '../../helloRdt/components/HelloRdt';
import  Page6  from '../../page6/components/Page6';
import  Banner from '../../banner/components/Banner';
import type { IBannerProps } from '../../banner/components/IBannerProps';

export default class Entrenamiento extends React.Component<IEntrenamientoProps, {}> {
  public render(): React.ReactElement<IEntrenamientoProps> {
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
      <section>
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
        <Page6
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

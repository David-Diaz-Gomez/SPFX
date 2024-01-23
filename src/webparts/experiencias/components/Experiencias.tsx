import * as React from 'react';
import type { IExperienciasProps } from './IExperienciasProps';
import  HelloRdt  from '../../helloRdt/components/HelloRdt';
import  Page2  from '../../page2/components/Page2';
import  Banner from '../../banner/components/Banner';
import type { IBannerProps } from '../../banner/components/IBannerProps';

export default class Experiencias extends React.Component<IExperienciasProps, {}> {
  public render(): React.ReactElement<IExperienciasProps> {
    const { url1,url2,url3,url4,url5,url6,url7,url8,url9 } = this.props;
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
        <Page2
          url4={url4}
          url5={url5} 
          url6={url6}
          url7={url7}
          url8={url8}
          url9={url9}
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

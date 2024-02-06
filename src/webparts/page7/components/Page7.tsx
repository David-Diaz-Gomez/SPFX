import React, { useState } from 'react';
import styles from './Page7.module.scss';
import type { IPage7Props } from './IPage7Props';

interface IPage7State {
  activeTab: 'bienestar' | 'beneficios';
  showModal: boolean;
  modalContent: React.ReactNode | null;
  accion: string;
  focusedIndex: number | null;
  focusedIndex1: number | null;
}

const Page7: React.FC<IPage7Props> = (props) => {

  // Datos de ejemplo para las tarjetas de cada pestaña
  const bienestarData = [
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1915/1696482025629.png',
      titulo: 'Yammer',
      descripcion: 'Comparte tus experiencias Esri con toda la comunidad en Yammer donde puedes encontrar noticias, beneficios, momentos únicos y muchos más.',
      accion: 'redireccionar'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1920/1696482052016.png',
      titulo: 'Diversidad e inclución',
      descripcion: 'Hagamos un entorno favorable para todos los colaboradores, así logramos potencializar la igualdad de oportunidades en la compañía.',
      accion: 'popup0'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1925/1696482066576.png',
      titulo: 'Experiencias Esri',
      descripcion: 'Revive en esta galería de fotos los momentos que hemos compartido con nuestros colaboradores.',
      accion: 'popup1'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1930/1696482080380.png',
      titulo: 'Hagamos un buen trato',
      descripcion: 'Conoce el programa creado para promover la amabilidad y respeto en todas las relaciones de los colaboradores de Esri.',
      accion: 'popup2'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1935/1696482095059.png',
      titulo: 'Primeros pasos',
      descripcion: 'Conoce a los integrantes más pequeños de la familia Esri.',
      accion: 'popup3'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1940/1696482112055.png',
      titulo: 'Semana del bienestar',
      descripcion: '¡Disfruta todo el contenido que vivimos en nuestra semana de bienestar!',
      accion: 'popup4'
    }, {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1945/1696482137325.png',
      titulo: 'Great place to work',
      descripcion: '¡Somos un gran lugar para trabajar!',
      accion: 'popup5'
    },
    // ... otras tarjetas ...
  ];

  const beneficiosData = [
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_334/1692064745463.jpg',
      titulo: 'Becas Myriam Ardila',
      descripcion: 'Continúa tu formación profesional con esta beca que Esri tiene para ti.',
      accion: 'popup6'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_387/1692064785620.jpg',
      titulo: 'Espacios Inolvidables',
      descripcion: 'Queremos brindarte un espacio flexible, de esparcimiento y reencuentro en las oficinas de Esri.',
      accion: 'popup7'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_392/1692064882029.jpg',
      titulo: 'Movilidad a la oficina',
      descripcion: 'Piensa en tu seguridad y contribuye al medio ambiente con las diferentes opciones que tienes para llegar a la oficina.',
      accion: 'popup8'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_397/1692064986230.jpg',
      titulo: 'Medicina prepagada',
      descripcion: 'Cuida de tu salud e inscríbete en alguna de las opciones que la compañía tiene para ti',
      accion: 'popup9'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_402/1692065122472.jpg',
      titulo: 'Acompañamiento emocional',
      descripcion: 'Para nosotros es importante tu bienestar emocional, por este motivo tienes el beneficio de tener el acompañamiento de un profesional.',
      accion: 'popup10'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_407/1692065266973.jpg',
      titulo: 'Smart fit',
      descripcion: 'Disfruta de una experiencia saludable con Smart FIT',
      accion: 'popup11'
    },
    {
      imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_412/1692065324914.jpg',
      titulo: 'Cooperativa alianza',
      descripcion: 'Conoce los diferentes beneficios que te brinda Cooperativa Alianza y Esri',
      accion: 'popup12'
    },
    // ... otras tarjetas ...
  ];

  const [state, setState] = useState<IPage7State>({
    activeTab: 'bienestar',
    showModal: false,
    modalContent: null,
    accion: '',
    focusedIndex: null,
    focusedIndex1: null,
  });

  const [currentSlideFirst, setCurrentSlideFirst] = useState(0);
  
  const handleNextSlideFirst = (): void => {
    if (state.accion === 'popup4') {
      setCurrentSlideFirst((currentSlideFirst + 1) % 2);
    }
    if (state.accion === 'popup5') {
      setCurrentSlideFirst((currentSlideFirst + 1) % 12);
    }
    if (state.accion === 'popup9') {
      setCurrentSlideFirst((currentSlideFirst + 1) % 2);
    }
    if (state.accion === 'popup10') {
      setCurrentSlideFirst((currentSlideFirst + 1) % 2);
    }

  };

  const renderIframeContent = (index: number): React.ReactNode => {
    // Asume que este método devolverá el contenido del iframe según el índice proporcionado.
    // Adaptar según tus necesidades.
    switch (index) {
      case 0:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Fesricolombia%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FPrevenci%C3%B3n%20riesgo%20psicosocial%20y%20cuidado%20de%20las%20emociones%2D20230515%5F102235%2DMeeting%20Recording%2Emp4%3Fcsf%3D1%26web%3D1%26e%3Dn7cR9o%26cid%3D8eaea775%2D41b8%2D4618%2D8d2f%2Db7248d1e3dbe&correlation=1992eca0%2Dc07b%2D4000%2D6da3%2D72de457f5575&Type=item&name=73ab7959%2D3fe5%2D4d0c%2Db58b%2De290c259fedd&listItemId=50092&listItemUniqueId=e08bf544%2D1b5a%2D4bc2%2Da560%2D322f5f2cc410" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 1:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/eventosesri_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Feventosesri%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FZumbaterapia%2D20230515%5F151001%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 2:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FTecnoestr%C3%A9s%20y%20ansiedad%2D20230516%5F103808%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 3:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FEquilibrio%20entre%20la%20vida%20laboral%20y%20familiar%2D20230517%5F100946%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 4:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FGimnasia%20mental%2D20230517%5F151434%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 5:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FGimnasia%20mental%2D20230517%5F151434%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      // Añadir más casos según sea necesario
      default:
        return null;
    }
  }

  const renderIframeContent1 = (index: number): React.ReactNode => {
    // Asume que este método devolverá el contenido del iframe según el índice proporcionado.
    // Adaptar según tus necesidades.
    switch (index) {
      case 0:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Fesricolombia%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FPrevenci%C3%B3n%20riesgo%20psicosocial%20y%20cuidado%20de%20las%20emociones%2D20230515%5F102235%2DMeeting%20Recording%2Emp4%3Fcsf%3D1%26web%3D1%26e%3Dn7cR9o%26cid%3D8eaea775%2D41b8%2D4618%2D8d2f%2Db7248d1e3dbe&correlation=1992eca0%2Dc07b%2D4000%2D6da3%2D72de457f5575&Type=item&name=73ab7959%2D3fe5%2D4d0c%2Db58b%2De290c259fedd&listItemId=50092&listItemUniqueId=e08bf544%2D1b5a%2D4bc2%2Da560%2D322f5f2cc410" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 1:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FPresentaci%C3%B3n%20Longevo%20Fitness%20Online%2D20230518%5F115714%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 2:
        return <iframe title={`iframe-${index}`} src="https://esricolombia-my.sharepoint.com/personal/talvarez_esri_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Ftalvarez%5Fesri%5Fco%2FDocuments%2FGrabaciones%2FEstilos%20de%20vida%20y%20trabajo%20saludable%2D20230519%5F100719%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 3:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/:p:/r/Areas/GH/_layouts/15/Doc.aspx?sourcedoc=%7B725AF7E1-C4F0-4C96-8E06-187672B19728%7D&file=Alimentaci%25u00f3n-equilibrada--1-.PPTX&action=edit&mobileredirect=true" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 4:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/Areas/GH/SiteAssets/Forms/AllItems.aspx?id=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FSemana%2Dde%2Dla%2Dsalud%2DEsriNOSA%5F23%2FCapacitaci%C3%B3n%2Dy%2DSocializaci%C3%B3n%2D%2DRiesgo%2DP%C3%BAblico%2D%2D%2D2023%2Epdf&parent=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FSemana%2Dde%2Dla%2Dsalud%2DEsriNOSA%5F23" style={{ width: '100%', height: '100%', border: 'none' }} />;
      case 5:
        return <iframe title={`iframe-${index}`} src="https://esricolombia.sharepoint.com/:p:/r/Areas/GH/_layouts/15/Doc.aspx?sourcedoc=%7B6A06BF10-CC7D-41E6-97CA-92D37CB782FC%7D&file=MANEJO-DE-EMOCIONES.pptx&action=edit&mobileredirect=true" style={{ width: '100%', height: '100%', border: 'none' }} />;
      // Añadir más casos según sea necesario
      default:
        return null;
    }
  }
  const handleFocusChange = (index: number | null) => {
    setState((prevState) => ({
      ...prevState,
      focusedIndex: index
    }));
  };

  const handleFocusChange1 = (index: number | null) => {
    setState((prevState) => ({
      ...prevState,
      focusedIndex1: index
    }));
  };

  const handlePrevSlideFirst = (): void => {
    if (state.accion === 'popup4') {
      setCurrentSlideFirst((currentSlideFirst - 1 + 2) % 2);
    }
    if (state.accion === 'popup5') {
      setCurrentSlideFirst((currentSlideFirst - 1 + 12) % 12);
    }
    if (state.accion === 'popup9') {
      setCurrentSlideFirst((currentSlideFirst - 1 + 2) % 2);
    }
    if (state.accion === 'popup10') {
      setCurrentSlideFirst((currentSlideFirst - 1 + 2) % 2);
    }

  };

  const [modalTab, setModalTab] = useState<string>('definiciones');

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleTabChange = (tab: 'bienestar' | 'beneficios') => {
    setState((prev) => ({ ...prev, activeTab: tab }));
  };

  const handleBotonClick = (accion: string) => {
    switch (accion) {
      case 'redireccionar':
        openNewWindow('https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3UwIiwiaWQiOiIxODM3NTc3ODMwNCJ9/all');
        break;
      default:
        openPopup(accion);
        break;
    }
  };

  const openNewWindow = (url: string) => {
    window.open(url, '_blank');
  };

  const openPopup = (accion: string) => {
    const modalContent = (
      <div style={{ width: '100%', height: '100%' }}>
        {/* Contenido del modal */}
      </div>
    );
    if (accion === 'popup0') {
      setModalTab('definiciones');
    } else if (accion === 'popup3') {
      setModalTab('maternidad');
    } else if (accion === 'popup2') {
      setModalTab('buenTrato');
    } else if (accion === 'popup6') {
      setModalTab('dinamica');
    }
    setState((prev) => ({ ...prev, showModal: true, modalContent, accion: accion }));
  };

  const handleModalTabClick = (tab: string) => {
    setModalTab(tab);
  };

  const closePopup = () => {
    setState((prev) => ({ ...prev, showModal: false, modalContent: null }));
    setCurrentSlideFirst(0);
  };

  const renderTarjetas = () => {
    const { activeTab } = state;
    // Asegúrate de tener bienestarData y beneficiosData definidos
    const tarjetasData = activeTab === 'bienestar' ? bienestarData : beneficiosData;

    return tarjetasData.map((tarjeta, index) => (
      <div key={index} className={styles.tarjeta}>
        <img src={tarjeta.imagen} alt={`Imagen ${activeTab} ${index + 1}`} />
        <h2>{tarjeta.titulo}</h2>
        <p>{tarjeta.descripcion}</p>
        <button onClick={() => handleBotonClick(tarjeta.accion)}>Más información...</button>
      </div>
    ));
  };

  return (
    <>
      <section>
        <div className={styles.pestanas}>
          <div
            className={`${styles.pestana} ${state.activeTab === 'bienestar' ? styles.activa : ''}`}
            onClick={() => handleTabChange('bienestar')}
          >
            Bienestar
          </div>
          <div
            className={`${styles.pestana} ${state.activeTab === 'beneficios' ? styles.activa : ''}`}
            onClick={() => handleTabChange('beneficios')}
          >
            Beneficios
          </div>
        </div>

        <div className={styles.contenedorTarjetas}>{renderTarjetas()}</div>
      </section>

      {(state.showModal && state.accion === 'popup0') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2314/1701725064236.png"
                style={{ width: '100%', height: '32vh' }}
                alt="Imagen emergente"
              />
              <p style={{ marginLeft: '20px', marginRight: '20px', fontSize: '1.1rem' }}>Lograr un entorno favorable que facilite y potencialice la igualdad de oportunidades, asegurando la no discriminación, la diversidad y la inclusión, comprometidos como organización con la excelencia profesional y la calidad de vida de nuestros colaboradores. </p>
              <div className={styles.modalTabs}>
                <div
                  className={`${styles.modalTab} ${modalTab === 'definiciones' ? styles.activeTab : ''}`}
                  onClick={() => handleModalTabClick('definiciones')}
                >
                  Definiciones
                </div>
                <div
                  className={`${styles.modalTab} ${modalTab === 'nuestrasPracticas' ? styles.activeTab : ''}`}
                  onClick={() => handleModalTabClick('nuestrasPracticas')}
                >
                  Nuestras Prácticas
                </div>
              </div>

              <div style={{ padding: '20px' }}>
                {modalTab === 'definiciones' ? (
                  <div style={{ display: 'flex' }}>
                    {/* Contenedor con imagen al 100% de ancho */}
                    <div style={{ flex: '35%' }}>
                      <img
                        src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2315/1699568302077.png"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        alt="Imagen para Definiciones"
                      />
                    </div>

                    {/* Contenedor de texto al 65% de ancho */}
                    <div style={{ flex: '65%', padding: '20px' }}>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Equidad:</strong> Garantiza la igualdad de condiciones para todos los géneros.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Integralidad:</strong> Incluye oportunidades en la organización sin importar género, raza, religión,
                        estrato social, orientación sexual, condición económica o de salud.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Diversidad e inclusión:</strong> La diversidad tiene que ver con la representación o la composición de una
                        entidad.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»La inclusión</strong> se trata de qué tan bien se valoran e integran en un entorno las contribuciones, la presencia
                        y las perspectivas de diferentes grupos de personas.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»No discriminatoria:</strong> Asegura que en la organización no tenemos distinción o exclusión basadas en
                        el género.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Inclusiva:</strong> Cualquier persona tiene la oportunidad de participar en nuestros procesos de selección,
                        promoción o desarrollo.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Visibilidad:</strong> Se publica información en donde se muestra la evidencia y análisis de información de
                        la política.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    {/* Contenedor de texto al 65% de ancho */}
                    <div style={{ flex: '65%', padding: '20px' }}>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Equidad de género</strong> Tenemos procesos de reclutamiento y selección, promoción, desarrollo profesional, capacitación y compensación basados en criterios objetivos y condiciones de igualdad.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Planes de beneficios:</strong> organizacionales los cuales no hacen diferencia alguna entre las personas que laboran en la compañía.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Escalafones salariales:</strong> indican el rango e índice del salario del colaborador teniendo en cuenta su cargo actual, competencias, responsabilidades y experiencia.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Iniciativas y programas</strong> como: “Hagamos un buen trato” y el “Comité de convivencia laboral” contribuyen a prevenir, atender y mitigar cualquier caso de maltrato o discriminación de género que se presente en la compañía.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»</strong>Comprensión de los<strong style={{ color: 'rgb(25, 121, 109)' }}>principios de diversidad e inclusión</strong> desarrollando una mentalidad que permita un ambiente laboral que promueve la dignidad y el respeto.
                      </p>
                      <p style={{ fontSize: '1rem' }}>
                        <strong style={{ color: 'rgb(25, 121, 109)' }}>»Manejo de la información:</strong> A través de tableros de control con visualización compartida, los cuales permiten un seguimiento a estadísticas de géneros, salarios, cargos ejercidos sin exclusión alguna por los colaboradores de la compañía.
                      </p>
                    </div>
                    {/* Contenedor con imagen al 100% de ancho */}
                    <div style={{ flex: '35%' }}>
                      <img
                        src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2316/1699583980890.png"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        alt="Imagen para Definiciones"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}



      {(state.showModal && state.accion === 'popup1') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2474/1701789670432.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh' }}>
                <div style={{ display: 'flex', height: '50%', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <div style={{ width: '28.3%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2325/1699568509221.jpg"
                      alt="Fiesta fin de año"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>FIESTA FIN DE AÑO</p>
                    </div>
                  </div>
                  <div style={{ width: '20.6%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2327/1699564315680.jpg"
                      alt="Cumpleaños"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>CUMPLEAÑOS</p>
                    </div>
                  </div>
                  <div style={{ width: '29.2%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2330/1699568567439.jpg"
                      alt="Día de la familia"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>DÍA DE LA FAMILIA</p>
                    </div>
                  </div>
                  <div style={{ width: '20.6%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699565220188.jpeg"
                      alt="Día de la mujer"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>DÍA DE LA MUJER</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                  <div style={{ width: '17%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2326/1699568630005.jpg"
                      alt="Día de relajación"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>DÍA DE RELAJACIÓN</p>
                    </div>
                  </div>
                  <div style={{ width: '18.8%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2328/1699566025766.jpg"
                      alt="Trabajo en equipo"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>TRABAJO EN EQUIPO</p>
                    </div>
                  </div>

                  <div style={{ width: '24.4%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2333/1699565644858.jpg"
                      alt="Experiencias Panamá"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>EXPERIENCIAS PANAMÁ</p>
                    </div>
                  </div>
                  <div style={{ width: '18.8%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2332/1699566863751.jpg"
                      alt="Gisday interno"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>GISDAY INTERNO</p>
                    </div>
                  </div>
                  <div style={{ width: '18.8%', position: 'relative' }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2333/1699566270171.jpg"
                      alt="San Valentin"
                      style={{ display: 'block', objectFit: 'cover', objectPosition: "50% 50%", width: '100%', height: '100%' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.46)", color: 'white', textAlign: 'center', width: '100%' }}>
                      <p>SAN VALENTIN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {(state.showModal && state.accion === 'popup2') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2475/1701725280016.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <p>
                <span style={{ fontSize: "15px" }}>
                  ¡Hagamos un buen trato!" Es un programa que hemos creado en Esri Nosa con el objetivo de promover
                  la amabilidad y respeto&nbsp;en las relaciones de todas las personas en Esri y así convivir y laborar
                  en un ambiente armonioso, el programa se basa en la ética&nbsp;y&nbsp;confidencialidad, donde todos&nbsp;&nbsp;
                  podrán expresarse libremente y con ello contribuir a la implementación de la empresa donde todos
                  queremos estar y ser creadores del buen trato, ingresa al siguiente link y muy pronto estaremos en
                  contacto contigo,&nbsp;</span>
                <a href="https://forms.office.com/pages/responsepage.aspx?id=MLebJL6XPEGBWnfM-nXERX-I-92LKNhHsdHHLm1ihutUOE5TQ01KUVBZSUpPMlNRSkwyU01IVEFEVS4u" 
                target="_self" data-uniqueid="" data-dsid="" data-link="null" 
                style={{fontSize:"15px", color:"rgb(0, 78, 140)"}}>Ingresa aquí</a>
              </p>
              <div className={styles.modalTabs}>
                <div
                  className={`${styles.modalTab} ${modalTab === 'buenTrato' ? styles.activeTab : ''}`}
                  onClick={() => handleModalTabClick('buenTrato')}
                >
                  Hagamos un buen trato
                </div>
                <div
                  className={`${styles.modalTab} ${modalTab === 'programa' ? styles.activeTab : ''}`}
                  onClick={() => handleModalTabClick('programa')}
                >
                  Programa
                </div>
                <div
                  className={`${styles.modalTab} ${modalTab === 'valores' ? styles.activeTab : ''}`}
                  onClick={() => handleModalTabClick('valores')}
                >
                  Valores corporativos
                </div>
              </div>
              <div style={{ height: '56vh', display: 'flex' }}>
                {modalTab === 'buenTrato' && (
                  <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: '49%' }}>
                      <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="100%"
                        src="https://esricolombia.sharepoint.com/Areas/GH/Com/_layouts/15/embed.aspx?UniqueId=5ec65ca9-6527-42fd-aaba-67f7717199fc&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" />
                    </div>
                    <div style={{ width: '49%' }}>
                      <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="100%"
                        src="https://esricolombia.sharepoint.com/sites/nuestracafeteriavirtual/_layouts/15/embed.aspx?UniqueId=c4e2ad71-f0bf-45c9-ad56-b6ddc76e32c1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" />
                    </div></div>
                )}

                {modalTab === 'programa' && (
                  <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: '49%' }}>
                      <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="100%"
                        src="https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/Doc.aspx?sourcedoc={246823e1-d182-4881-943e-4c78fe8abbc7}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;Embed=1" />
                    </div>
                    <div style={{ width: '49%', margin: 'auto' }}>
                      <img
                        src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2354/1699573547382.png"
                        style={{ width: '100%' }}
                        alt="Imagen emergente"
                      />
                    </div></div>
                )}

                {modalTab === 'valores' && (
                  <div style={{ width: '100%', height: "100%" }}>
                    <img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2357/1699574378256.jpg"
                      style={{ width: '100%', height: "100%" }}
                      alt="Imagen emergente"
                    />
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup3') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2476/1701728092913.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '35%' }}>
                  <a href='https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI1OTM0MDg2In0/all'><img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1935/1696482095059.png"
                    style={{ width: '100%', height: '50vh' }}
                    alt="Imagen emergente"
                  /></a>
                  <p style={{ color: "rgb(50, 158, 144)", fontSize: "20px", fontWeight: 'bold', textAlign: 'center' }}>
                    Visita la comunidad en Yammer y conoce a los integrantes más pequeños de la familia Esri.
                  </p>
                </div>
                <div style={{ width: '65%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "30px" }}>
                  <div className={styles.modalTabs}>
                    <div
                      className={`${styles.modalTab} ${modalTab === 'maternidad' ? styles.activeTab : ''}`}
                      onClick={() => handleModalTabClick('maternidad')}
                    >
                      Licencia de maternidad
                    </div>
                    <div
                      className={`${styles.modalTab} ${modalTab === 'lactancia' ? styles.activeTab : ''}`}
                      onClick={() => handleModalTabClick('lactancia')}
                    >
                      Lactancia
                    </div>
                    <div
                      className={`${styles.modalTab} ${modalTab === 'paternidad' ? styles.activeTab : ''}`}
                      onClick={() => handleModalTabClick('paternidad')}
                    >
                      Licencia de paternidad
                    </div>
                  </div>
                  {modalTab === 'maternidad' && (
                    <div data-testid="rich-displayer">
                      <p style={{ lineHeight: "1.5" }}>
                        <strong style={{ color: "rgb(50, 158, 144)", fontSize: "14px" }}>Colombia:&nbsp;
                        </strong></p><p style={{ textAlign: "justify", lineHeight: 1.5 }}>
                        <span style={{ fontSize: "14px" }}>La duración de la licencia de maternidad es de dieciocho (18) semanas remuneradas con el salario que devengue la colaboradora al momento de iniciar la licencia. Para calcular dichas semanas deben tomarse los días calendario.</span>
                      </p>
                      <p style={{ lineHeight: "1.5" }}><strong style={{ color: "rgb(50, 158, 144)", fontSize: "14px" }}>Ecuador:</strong></p><p style={{ textAlign: "justify", lineHeight: 1.5 }}><span style={{ fontSize: "14px" }}>
                        Se trata de un período de descanso remunerado de 12 semanas del que gozan las mujeres que están a punto de convertirse en madres. En caso de nacimientos múltiples el plazo se extiende por diez días adicionales. La ausencia al trabajo se justificará mediante la presentación de un certificado médico otorgado por el IESS.</span></p>
                      <p style={{ lineHeight: 1.5 }}><strong style={{ fontSize: "14px", color: "rgb(50, 158, 144)" }}>Panamá:</strong></p><ul><li style={{ textAlign: "justify", lineHeight: 1.5 }}><span style={{ fontSize: "14px" }}>Artículo 105.- La protección de la maternidad de la trabajadora es un deber del Estado.</span></li><li style={{ textAlign: "justify", lineHeight: 1.5 }}><span style={{ fontSize: "14px" }}>Artículo 107.- (Subrogado por el artículo 14 de la Ley No. 44 de 12 de agosto de 1995). Toda trabajadora en estado de gravidez gozará de descanso forzoso retribuido del mismo modo que su trabajo, durante las seis semanas que precedan al parto y las ocho que le sigan.</span></li><li style={{ textAlign: "justify", lineHeight: 1.5 }}><span style={{ fontSize: "14px" }}>Artículo 108.- Para determinar la fecha de iniciación del descanso forzoso retribuido, la trabajadora presentará al empleador 27 Código del Trabajo Proyecto MATAC / OIT 28 Recopilación de Normas Laborales y de Seguridad Social Ministerio de Trabajo y Desarrollo Laboral de la República de Panamá un certificado médico en el cual conste la fecha probable del parto</span></li></ul></div>
                  )}

                  {modalTab === 'lactancia' && (
                    <div data-testid="rich-displayer"><p style={{ lineHeight: 1.5 }}><strong style={{ fontSize: "14px", color: "rgb(50, 158, 144)" }}>Colombia:&nbsp;</strong></p><p style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "14px", color: "rgb(36, 36, 36)" }}>La colaboradora tendrá derecho a 2 descansos de treinta (30) minutos cada uno, dentro de la jornada laboral para amamantar a su hijo, durante los primeros seis (6) meses de edad. Una vez cumplido este periodo, pasará a tener un (1) descanso de treinta (30) minutos en los mismos términos hasta los dos (2) años de edad del menor; siempre y cuando se mantenga y manifieste una adecuada lactancia materna continua. Es importante mencionar que contamos con una sala de lactancia en la sede de Bogotá en el piso 6.</span></p><p style={{ lineHeight: 1.5 }}><strong style={{ fontSize: "14px", color: "rgb(50, 158, 144)" }}>Ecuador:</strong></p><p style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "14px", color: "rgb(36, 36, 36)" }}>Las colaboradoras tienen derecho a 2 horas de permiso por lactancia, durante los 12 meses posteriores al parto. Es decir que la jornada laboral tendrá una duración de 6 horas hasta que el bebé cumpla un año.</span></p><p style={{ lineHeight: 1.5 }}><strong style={{ color: "rgb(50, 158, 144)", fontSize: "14px" }}>Panamá:</strong></p><p style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "14px", color: "rgb(36, 36, 36)" }}>Artículo 114.- Toda madre cuando esté lactando dispondrá en los lugares donde trabaja de un intervalo de quince minutos cada tres horas, o, si lo prefiere, de media hora dos veces al día durante sus labores, con el objeto de alimentar a su hijo.</span></p></div>
                  )}

                  {modalTab === 'paternidad' && (
                    <div data-testid="rich-displayer" style={{ maxHeight: "90%", overflowY: 'auto' }}><p style={{ lineHeight: 1.5 }}><strong style={{ fontSize: "13.5px", color: "rgb(50, 158, 144)" }}>Colombia:&nbsp;</strong></p><p style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>El padre de familia tendrá derecho a dos semanas de licencia remunerada para acompañar a su bebé recién nacido. Como requisito de verificación y obtención de la licencia, el padre deberá cargar en GlobIT – opción ausentismos dentro de los 10 días siguientes al nacimiento, el registro civil del bebé o el documento legal de adopción del menor, ya que es la EPS la encargada de reconocer dicha licencia remunerada, la cual será reconocida de forma proporcional a las semanas cotizadas al sistema de salud, por parte del padre, durante el periodo de gestación.</span></p><p style={{ lineHeight: 1.5 }}><strong style={{ fontSize: "13.5px", color: "rgb(50, 158, 144)" }}>Ecuador:</strong></p><p style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ color: "rgb(36, 36, 36), fontSize:13.5px" }}>El permiso de paternidad obligatorio dura 10 días si el parto es normal, o 15 días en caso de nacimientos múltiples (gemelos, mellizos, trillizos, etc.) o parto por cesárea.&nbsp;</span></p><p style={{ lineHeight: 1.5 }}><strong style={{ color: "rgb(50, 158, 144)", fontSize: "13.5px" }}>Panamá:</strong></p><p style={{ lineHeight: 1.5 }}><span style={{ fontSize: "13.5px" }}>La ley 27 del 23 de mayo de 2017, establece lo siguiente:</span></p><ul><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>&nbsp; La licencia de paternidad será por un término de tres (3) días hábiles.&nbsp;</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>El derecho se otorga una vez al año, independientemente de parto múltiples.</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>El inicio del periodo se contará desde la fecha de nacimiento del hijo(a) y no podrá tomarse en otras fechas.</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>El trabajador debe comunicarle a su empleador la fecha estimada del parto con una semana de anticipación.</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>Una vez se reintegre a sus labores, el trabajador deberá presentar el certificado de nacimiento del hijo (a) a su empleador.</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>Presentar un certificado de embarazo y copia de cédula de identidad de la madre.</span></li><li style={{ lineHeight: 1.5, textAlign: "justify" }}><span style={{ fontSize: "13.5px" }}>Los hijos deben ser de su esposa o conviviente&nbsp;registrado en el departamento de Recursos Humanos.</span></li></ul></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup4') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2477/1701728375537.png"
                style={{ width: '100%', height: '30vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '75vh', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <div className={`${styles.slider2andContainer} ${styles.firstSlider}`}>
                    <div className={styles.slides2} style={{ transform: `translateX(-${currentSlideFirst * 100}%)` }}>
                      <div className={styles.slide2}>
                        <div style={{ height: '100%' }}>
                          {/* Primer slide */}
                          <div style={{ width: '100%', height: '100%' }}>

                            {/* Contenido del modal de "Pausas activas" */}
                            <div className={styles.modalRow}>
                              {/* Primer div */}
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(0)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 0 ? (
                                  renderIframeContent(0)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580792720.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Prevención de riesgo psicosocial y cuidado de las emociones</p></div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(1)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 1 ? (
                                  renderIframeContent(1)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580816405.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Zumba terapia</p></div>

                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(2)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 2 ? (
                                  renderIframeContent(2)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580829278.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Tecnoestrés y tecnoansiedad</p></div>

                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* ... Repite esto para los demás divs */}
                            </div>
                            <div className={styles.modalRow}>
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(3)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 3 ? (
                                  renderIframeContent(3)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580760003.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Equilibrio entre la vida laboral y familiar</p></div>

                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(4)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 4 ? (
                                  renderIframeContent(4)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580812105.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Gimnasia mental</p></div>

                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange(5)}
                                onMouseLeave={() => handleFocusChange(null)}>
                                {state.focusedIndex === 5 ? (
                                  renderIframeContent(5)
                                ) : (
                                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <div className={styles.imageContainer}>
                                      {/* Contenido de la imagen */}
                                      <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580787103.jpeg' alt="Imagen" className={styles.modalImage} />
                                    </div>
                                    <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                      <div className={styles.flexibilityText}><p>Cuida de tu corazón (riesgo cardiovascular)</p></div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* ... Repite esto para los demás divs */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.slide2}>
                        <div style={{ height: '100%' }}>
                          {/* Segundo slide */}
                          <div className={styles.slide2} style={{ height: '100%' }}>
                            <div style={{ height: '100%' }}>

                              <div style={{ width: '100%', height: '100%' }}>

                                {/* Contenido del modal de "Pausas activas" */}
                                <div className={styles.modalRow}>
                                  {/* Primer div */}
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(0)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 0 ? (
                                      renderIframeContent1(0)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580792720.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Prevencion del riesgo público</p></div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(1)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 1 ? (
                                      renderIframeContent1(1)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580816405.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Fitness uno a uno</p></div>

                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(2)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 2 ? (
                                      renderIframeContent1(2)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580829278.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Estilos de vida y trabajo saludable</p></div>

                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  {/* ... Repite esto para los demás divs */}
                                </div>
                                <div className={styles.modalRow}>
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(3)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 3 ? (
                                      renderIframeContent1(3)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580760003.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Alimentación equilibrada</p></div>

                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(4)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 4 ? (
                                      renderIframeContent1(4)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580812105.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Capacitación y socialización riesgo público</p></div>

                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className={styles.modalColumn} onMouseEnter={() => handleFocusChange1(5)}
                                    onMouseLeave={() => handleFocusChange1(null)}>
                                    {state.focusedIndex1 === 5 ? (
                                      renderIframeContent1(5)
                                    ) : (
                                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <div className={styles.imageContainer}>
                                          {/* Contenido de la imagen */}
                                          <img src='https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699580787103.jpeg' alt="Imagen" className={styles.modalImage} />
                                        </div>
                                        <div className={styles.blankContainer} style={{ background: 'transparent' }}>
                                          <div className={styles.flexibilityText}><p>Manejo de emociones</p></div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  {/* ... Repite esto para los demás divs */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Controles del primer slider */}
                    <div className={styles.controls1}>
                      <span className={styles.span1} style={{ color: 'white' }} onClick={handlePrevSlideFirst}>{'<'}</span>
                      <span className={styles.span1} style={{ color: 'white' }} onClick={handleNextSlideFirst}>{'>'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {(state.showModal && state.accion === 'popup5') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2478/1701729120987.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '65%' }}>
                  <div className={`${styles.slider2andContainer} ${styles.firstSlider}`}>
                    <div className={styles.slides2} style={{ transform: `translateX(-${currentSlideFirst * 100}%)` }}>
                      {/* Imágenes del primer slider */}
                      <div className={styles.slide2}>
                        <img
                          alt="Image 1"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2462/1699584538006.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 2"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2463/1699584671963.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 3"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2464/1699584707902.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 4"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2465/1699584756460.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 5"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2466/1699584792328.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 6"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2467/1699585031385.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 7"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2468/1699585069637.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 8"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2469/1699585114149.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 9"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2470/1699585182183.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 10"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2471/1699585237409.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 11"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2472/1699585276626.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                      <div className={styles.slide2}>
                        <img
                          alt="Image 12"
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2473/1699585314749.jpg"
                          className={styles.imguni2}
                        />
                      </div>
                    </div>
                    {/* Controles del primer slider */}
                    <div className={styles.controls1}>
                      <span className={styles.span1} onClick={handlePrevSlideFirst}>{'<'}</span>
                      <span className={styles.span1} onClick={handleNextSlideFirst}>{'>'}</span>
                    </div>
                  </div>
                </div>
                <div style={{ width: '35%', padding: "10px" }}>
                  <p style={{ fontSize: "18px" }}>
                    En el año 2022 Esri Colombia, Ecuador y Panamá se certificaron como “Great Place to Work”, un reconocimiento a la calidad del ambiente laboral que tiene la organización y que nos hace destacar a las demás en el país. Uno de los resultados más relevantes en este informe fue que el 98% de los empleados dice que este es un excelente lugar para trabajar.
                  </p>
                  <a href='https://www.greatplacetowork.com.co/es/certificacion-gptw/certificaciones/esri'><img
                    alt="informe"
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/templates/1699586068720.jpeg"
                    style={{ width: "100%" }}
                  /></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {(state.showModal && state.accion === 'popup6') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2522/1701728606745.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '30%' }}>
                  <img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_415/1692047341530.png"
                    style={{ width: '100%', height: '100%' }}
                    alt="Imagen emergente"
                  />
                </div>
                <div style={{ width: '70%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "30px" }}>
                  <div data-testid="rich-displayer">
                    <p>
                      <strong style={{ color: "#004675", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "20px" }}>
                        Objetivo
                      </strong>
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "18px" }}>
                        Este programa ha sido diseñado para apoyar y fomentar los estudios superiores de las personas que forman parte de Esri Nosa.
                      </span>
                    </p>
                  </div>
                  <div className={styles.modalTabs}>
                    <div
                      className={`${styles.modalTab} ${modalTab === 'dinamica' ? styles.activeTab : ''}`}
                      onClick={() => handleModalTabClick('dinamica')}
                    >
                      Dinámica y requisitos
                    </div>
                    <div
                      className={`${styles.modalTab} ${modalTab === 'condiciones' ? styles.activeTab : ''}`}
                      onClick={() => handleModalTabClick('condiciones')}
                    >
                      Condiciones del programa
                    </div>
                  </div>
                  {modalTab === 'dinamica' ? (
                    <>
                      <div data-testid="rich-displayer">
                        <p>
                          <strong style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "#004675" }}>
                            Dinámica
                          </strong>
                        </p>
                        <p style={{ lineHeight: 1.5, textAlign: "justify" }}>
                          <span style={{ color: "rgb(0, 0, 0)", fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            Semestralmente “
                          </span>
                          <strong style={{ color: "rgb(0, 0, 0)", fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            Estudia con Apoyo Esri: Programa Myriam Ardila”
                          </strong>
                          <span style={{ color: "rgb(0, 0, 0)", fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                            , entregará 3 medias becas a las personas que estén adelantado estudios superiores (pregrados y posgrados),
                            se inscriban al programa y cumplan con los requisitos establecidos.
                          </span>
                        </p>
                      </div>
                      <div data-testid="rich-displayer">
                        <p style={{ lineHeight: 1.5, textAlign: "justify" }}>
                          <strong style={{ color: "#004675", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                            Requisitos para participar
                          </strong>
                        </p>
                        <ol>
                          <li style={{ lineHeight: 1.5, textAlign: "justify" }}>
                            <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                              Carta del solicitante explicando la razón por la cual necesita apoyo para estudio.
                            </span>
                          </li>
                          <li style={{ lineHeight: 1.5, textAlign: "justify" }}>
                            <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                              Tener mínimo 6 meses de permanencia en la compañía al momento de aplicar.
                            </span>
                          </li>
                          <li style={{ lineHeight: 1.5, textAlign: "justify" }}>
                            <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                              Comprobantes de estudios, nivel, información sobre el programa, datos de la universidad, etc.
                            </span>
                          </li>
                          <li style={{ lineHeight: 1.5, textAlign: "justify" }}>
                            <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                              Comprobante del valor que debe cancelar.
                            </span>
                          </li>
                          <li style={{ lineHeight: 1.5, textAlign: "justify" }}>
                            <span style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "16px" }}>
                              Haber empezado y finalizado por lo menos el primer semestre al programa al momento de hacer la inscripción.
                            </span>
                          </li>
                        </ol>
                      </div>
                    </>
                  ) : (
                    <div data-testid="rich-displayer">
                      <p style={{ textAlign: "justify", lineHeight: "1.5" }}>
                        <strong style={{ fontSize: "16px", color: "#004675", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                          Condiciones del programa
                        </strong>
                      </p>
                      <ul>
                        <li style={{ lineHeight: 1.5 }}>
                          <span style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Estudia con apoyo Esri: Programa Myriam Ardila” dará prioridad a las personas que adelanten
                            estudios relacionados con la actividad de Esri Nosa y a programas que se relacionen directamente
                            con las actividades que realizan estas personas al interior de la compañía.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.5 }}>
                          <span style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Las personas que acepten el beneficio tendrán una permanencia mínima de 2 años posterior a la
                            terminación del programa educativo. En caso de retirarse antes, el beneficio funcionará como un
                            préstamo.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.5 }}>
                          <span style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Los estudios que aplican para participar son: pregrados, especializaciones y maestrías.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.5 }}>
                          <span style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Únicamente podrás recibir el auxilio educativo siempre y cuando la universidad emita la
                            factura a Nombre de Esri Colombia SAS.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.5 }}>
                          <span style={{ fontSize: "16px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            El valor que se desembolse se girará a nombre de la Entidad / Universidad.
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup7') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2538/1701728742058.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '45%' }}>
                  <img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_468/1692063368091.jpg"
                    style={{ width: '100%', height: '100%' }}
                    alt="Imagen emergente"
                  />
                </div>
                <div style={{ width: '55%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "30px", paddingRight: "30px" }}>
                  <>
                    <p style={{ textAlign: "justify", lineHeight: "1.3" }}>
                      <span style={{ fontSize: "19px", color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        Queremos brindarte un espacio flexible, de esparcimiento y reencuentro, mensualmente recibirás una
                        recarga en las máquinas de snacks ubicadas en Bogotá $60.000 COP, Panamá y Ecuador por 17USD mensual,
                        se accede a este plan desde el momento del ingreso. En Bogotá, podrás utilizar tu huella, en Ecuador y
                        Panamá se te entregará una tarjeta.
                      </span>
                    </p>
                    <br />
                    <br />
                    <div data-testid="rich-displayer">
                      <p style={{ lineHeight: "1.3" }}>
                        <strong style={{ fontSize: "21px", backgroundColor: "rgba(0, 0, 0, 0)", color: "#004675" }}>
                          Sigue estas recomendaciones para su uso:
                        </strong>
                      </p>
                      <ul>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Trae tu propia taza, el tinto y las bebidas aromáticas de la maquina dispensadora de la
                            ciudad de Bogotá serán gratis si utilizas tu propio envase y nos ayudas a cuidar el medio ambiente.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Toma&nbsp;tus snacks&nbsp;y haz pausas activas que es lo recomendado para tu salud.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Utiliza el crédito durante el mes ya que no es acumulable.
                            Este será recargado el 15 de cada mes.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup8') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2525/1701728834801.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '55%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "30px", paddingRight: "30px" }}>
                  <>
                    <p style={{ textAlign: "justify", lineHeight: "1.3" }}>
                      <span style={{ fontSize: "19px", color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        El servicio de transporte en rutas te brinda comodidad y sobre todo seguridad, contribuye al cuidado del medio ambiente y
                        garantizar la sostenibilidad, además disminuye el estrés ocasionado por las congestiones vehiculares.
                      </span>
                    </p>
                    <br />
                    <br />
                    <div data-testid="rich-displayer">
                      <p style={{ lineHeight: "1.3" }}>
                        <strong style={{ fontSize: "21px", backgroundColor: "rgba(0, 0, 0, 0)", color: "#004675" }}>
                          Beneficio de transporte a la oficina:
                        </strong>
                      </p>
                      <ul>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Si deseas utilizar el beneficio de transporte podrás solicitarlo con un día de antelación a través de Survey.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            No tendrá ningún costo para el colaborador y te recogerá en un punto central cerca a tu vivienda.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            El transportador estará en contacto contigo previamente y te indicara el punto donde te recogerá y la hora.
                          </span>
                        </li>
                        <li style={{ lineHeight: 1.3, textAlign: "justify" }}>
                          <span style={{ fontSize: "19px", backgroundColor: "rgba(0, 0, 0, 0)", color: "rgb(0, 0, 0)" }}>
                            Todos los días a las 5:00pm los buses saldrán desde la sede Trento y te dejarán en el punto cercano a tu casa.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                </div>
                <div style={{ width: '45%' }}>
                  <img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_435/1692047477045.jpg"
                    style={{ width: '100%', height: '100%' }}
                    alt="Imagen emergente"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup9') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2527/1701728909888.png"
                style={{ width: '100%', height: '25vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '75vh', display: 'flex' }}>
                <div style={{ width: '30%', height: '100%' }}>
                  <img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_439/1692047531501.jpeg"
                    style={{ width: '100%', height: '100%' }}
                    alt="Imagen emergente"
                  />
                </div>
                <div style={{ width: '70%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "20px", paddingRight: "20px" }}>
                  <>
                    <p style={{ textAlign: "justify", lineHeight: "1.2" }}>
                      <span style={{ fontSize: "19px", color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        La medicina prepagada o plan complementario es un plan en salud, adicional a la EPS, que mejora la atención y la oportunidad en citas médicas, urgencias y hospitalización. Cuida de tu salud e inscríbete en alguna de las opciones que la compañía tiene para ti.
                      </span>
                    </p>
                    <div style={{ height: '100%' }}>
                      <div style={{ width: '100%' }}>
                        <div className={`${styles.slider2andContainer} ${styles.firstSlider}`}>
                          <div className={styles.slides2} style={{ height: '58vh', transform: `translateX(-${currentSlideFirst * 100}%)` }}>
                            {/* Imágenes del primer slider */}
                            <div className={styles.slide2}>
                              <div style={{ height: '100%', display: 'flex' }}>
                                <div style={{ width: '100%' }}>
                                  <img
                                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_475/1692047650769.png"
                                    style={{ width: '100%', height: '100%' }}
                                    alt="Imagen emergente"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.slide2}>
                              <div style={{ height: '100%', display: 'block' }}>
                                <p style={{ textAlign: 'center', width: '100%', fontWeight: '600', display: 'block', fontSize: '1.2rem' }}>Información del plan</p>
                                <div style={{ width: '100%', height: '30%', display: 'flex' }}>

                                  <a target='_blank' href='https://esricolombia.sharepoint.com/Areas/GH/Videos%20Reuniones/Forms/AllItems.aspx?id=%2FAreas%2FGH%2FVideos%20Reuniones%2FPortafolio%20ESRI%2Epdf&parent=%2FAreas%2FGH%2FVideos%20Reuniones' style={{ width: '33.3%', objectFit: 'fill' }}><img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062099548.png" style={{ width: '100%', objectFit: 'contain' }} /></a>
                                  <a target='_blank' href='https://esricolombia.sharepoint.com/Areas/GH/SiteAssets/Forms/AllItems.aspx?id=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FOpciones%2DMedicina%2Dprepagada%2FPresentaci%C3%B3n%2DSeguros%2DSalud%2DESRI%2Epdf&parent=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2FOpciones%2DMedicina%2Dprepagada' style={{ width: '33.3%', objectFit: 'fill' }}><img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062213284.png" style={{ width: '100%', objectFit: 'contain' }} /></a>
                                  <a target='_blank' href='https://esricolombia.sharepoint.com/Areas/GH/Videos%20Reuniones/Forms/AllItems.aspx?id=%2FAreas%2FGH%2FVideos%20Reuniones%2FSanitas%2Epdf&parent=%2FAreas%2FGH%2FVideos%20Reuniones' style={{ width: '33.3%', objectFit: 'fill' }}><img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062129142.png" style={{ width: '100%', objectFit: 'contain' }} /></a>
                                </div>
                                <p style={{ textAlign: 'center', width: '100%', fontWeight: '600', display: 'block', fontSize: '1.2rem' }}>Videos informativos</p>
                                <div style={{ width: '100%', height: '30%', display: 'flex', justifyContent: 'center' }}>

                                  <a target='_blank' href='https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FVideos%20Reuniones%2FPlan%20complementario%20compensar%2Emp4&nav=eyJwbGF5YmFja09wdGlvbnMiOnsic3RhcnRUaW1lSW5TZWNvbmRzIjo0LjAxOTk3MX19&referrer=SharePointFileViewer%2EWeb&referrerScenario=PopOut%2Emis%2Ee1bf0f1c%2D7581%2D4155%2D9e85%2Dcf572e9e6d6d' style={{ width: '40%', objectFit: 'fill' }}><img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062099548.png" style={{ width: '100%', objectFit: 'contain' }} /></a>
                                  <a target='_blank' href='https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/viewer.aspx?sourcedoc=26bd6bf0-04f5-42eb-9b20-0be591244e0d&referrer=SharePointFileViewer.Web&referrerScenario=PopOut.mis.8d293a16-21b2-444c-af28-69b7f6056646&nav=eyJwbGF5YmFja09wdGlvbnMiOnsic3RhcnRUaW1lSW5TZWNvbmRzIjoxLjk0OTU1OX19' style={{ width: '50%', objectFit: 'fill' }}><img src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062129142.png" style={{ width: '100%', objectFit: 'contain' }} /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Controles del primer slider */}
                          <div className={styles.controls1}>
                            <span className={styles.span1} onClick={handlePrevSlideFirst}>{'<'}</span>
                            <span className={styles.span1} onClick={handleNextSlideFirst}>{'>'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup10') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2529/1701728966380.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <div className={`${styles.slider2andContainer} ${styles.firstSlider}`}>
                    <div className={styles.slides2} style={{ transform: `translateX(-${currentSlideFirst * 100}%)` }}>
                      {/* Imágenes del primer slider */}
                      <div className={styles.slide2}>
                        <div style={{ height: '100%', display: 'flex' }}>
                          <div style={{ width: '70%' }}>
                            <img
                              src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_450/1692047871776.png"
                              style={{ width: '100%', height: '100%' }}
                              alt="Imagen emergente"
                            />
                          </div>
                          <div style={{ width: '30%', paddingLeft: "30px", paddingRight: "30px" }}>
                            <>
                              <p style={{ textAlign: "justify", lineHeight: "1.3" }}>
                                <span style={{ fontSize: "19px", color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                  Eveline Goubert, psicoterapeuta familiar, tanatóloga, creadora del programa de apoyo en duelo
                                  “Superando lo Insuperable”, después de haber pasado por diferentes tipos de pérdidas incluyendo un divorcio
                                  , crisis laborales y económicas, haber sobrevivido a un terremoto y la muerte de sus tres hijos en diferentes
                                  momentos y circunstancias, hoy en día contagia con su alegría y su
                                  forma diferente de ver la vida que ha consolidado en su propia metodología “Yo Pienso al R3v3s”.
                                </span>
                              </p>
                              <a href='https://esricolombia.sharepoint.com/Areas/GH/Lists/Programa%20bienestar/NewForm.aspx?Source=https%3A%2F%2Fesricolombia%2Esharepoint%2Ecom%2FAreas%2FGH%2FSitePages%2FAcompa%C3%B1amiento%2Easpx&RootFolder=%2FAreas%2FGH%2FLists%2FPrograma%20bienestar'
                                style={{
                                  backgroundColor: "#1a4d88", borderRadius: "2px 2px 2px 2px", fontSize: "14px", textDecoration: "none", color: "white", display: "block",
                                  width: "50%",
                                  textAlign: "center",
                                  margin: "0 auto",
                                  padding: "10px"
                                }}>
                                <span>
                                  Registra tu solicitud
                                </span>
                              </a>
                            </>
                          </div>

                        </div>
                      </div>
                      <div className={styles.slide2}>
                        <div style={{ height: '100%', display: 'flex' }}>
                          <div style={{ width: '30%', paddingLeft: "30px", paddingRight: "30px" }}>
                            <>
                              <p style={{ textAlign: "justify", lineHeight: "1.3" }}>
                                <span style={{ fontSize: "19px", color: "rgb(0, 0, 0)", backgroundColor: "rgba(0, 0, 0, 0)" }}>
                                  Su metodología “Yo Pienso al R3v3s” proporciona herramientas útiles y prácticas aplicables a cualquier
                                  entorno y situación de crisis permitiendo tener una mejor experiencia de vida al poder ver el mismo
                                  suceso desde diferente óptica. En conferencias, talleres y asesorías personalizadas a nivel nacional e
                                  internacional esta metodología ha impactado a más de 3.000 y Esri quiere apoyar tu bienestar emocional a
                                  través de sesiones personalizas con Eveline.
                                </span>
                              </p>
                            </>
                          </div>
                          <div style={{ width: '70%' }}>
                            <a href='https://esricolombia.sharepoint.com/Areas/GH/_layouts/15/stream.aspx?id=%2FAreas%2FGH%2FSiteAssets%2FSitePages%2Fknpfeb69%2FAcompa%C3%B1amiento%2Dde%2DEveline%2DGoubert%2Emp4&nav=eyJwbGF5YmFja09wdGlvbnMiOnsic3RhcnRUaW1lSW5TZWNvbmRzIjo0Ljc4MTMxMn19&referrer=SharePointFileViewer%2EWeb&referrerScenario=PopOut%2Emis%2E121f5847%2De5e0%2D46f0%2Daab0%2D9f2f237a76c4'>
                              <img
                                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692062733379.jpg"
                                style={{ width: '100%', height: '100%' }}
                                alt="Imagen emergente"
                                className={styles.smartFitImg}
                              />
                            </a>

                          </div>

                        </div>
                      </div>
                    </div>
                    {/* Controles del primer slider */}
                    <div className={styles.controls1}>
                      <span className={styles.span1} onClick={handlePrevSlideFirst}>{'<'}</span>
                      <span className={styles.span1} onClick={handleNextSlideFirst}>{'>'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {(state.showModal && state.accion === 'popup11') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2531/1701729045908.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '64vh' }}>
                <div data-testid="rich-displayer">
                  <p style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "19px" }}>
                      ¡Inscríbete y desarrolla un estilo de vida activo y saludable!
                    </span>
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "19px" }}>
                      Con esta nueva alianza: Esri, Compensar y SmarFit, podrás acceder a tarifas especiales, diferenciales
                      y exclusivas en las mensualidades.
                    </span>
                  </p>
                </div>
                <div style={{ width: "100%", height: "70%", display: "flex", justifyContent: "space-around" }}>
                  <div style={{ width: '45%' }}>
                    <a href='https://esricolombia.sharepoint.com/:p:/r/Areas/GH/_layouts/15/Doc.aspx?sourcedoc=%7B8aea7de0-98b5-4bdb-8d68-9f29d1e7f0d5%7D&action=view&wdSlideId=256&wdModeSwitchTime=1692063751328'><img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692063927051.jpg"
                      style={{ width: '100%', height: '100%' }}
                      alt="Imagen emergente"
                      className={styles.smartFitImg}
                    /></a>
                  </div>
                  <div style={{ width: '45%' }}>
                    <a href='https://esricolombia.sharepoint.com/:p:/r/Areas/GH/_layouts/15/Doc.aspx?sourcedoc=%7B6ac32b24-9cc5-4e67-b663-b699406f2079%7D&action=view&wdSlideId=267&wdModeSwitchTime=1692063755277'><img
                      src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692064070803.jpg"
                      style={{ width: '100%', height: '100%' }}
                      alt="Imagen emergente"
                      className={styles.smartFitImg}
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(state.showModal && state.accion === 'popup12') && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              {/* Contenido del modal */}
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2533/1701729358793.png"
                style={{ width: '100%', height: '28vh' }}
                alt="Imagen emergente"
              />
              <div style={{ height: '65vh', display: 'flex' }}>
                <div style={{ width: '30%' }}>
                  <img
                    src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_465/1692046579777.jpeg"
                    style={{ width: '100%', height: '100%' }}
                    alt="Imagen emergente"
                  />
                </div>
                <div style={{ width: '70%', borderLeft: "solid 1px rgb(50, 158, 144)", paddingLeft: "30px", paddingRight: "30px" }}>
                  <>
                    <div data-testid="rich-displayer">
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ fontSize: "20px" }}>
                          Conoce por completo el convenio que tiene Esri Colombia con la Cooperativa Alianza y
                          disfruta de beneficios como: &nbsp;
                        </span>
                      </p>
                      <ul>
                        <li style={{ textAlign: "justify", float: 'left', marginRight: '30px' }}>
                          <span style={{ fontSize: "20px" }}>Pólizas
                          </span>
                        </li>
                        <li style={{ textAlign: "justify", float: 'left', marginRight: '30px' }}>
                          <span style={{ fontSize: "20px" }}>Ahorros
                          </span>
                        </li>
                        <li style={{ textAlign: "justify", float: 'left', marginRight: '30px' }}>
                          <span style={{ fontSize: "20px" }}>Créditos
                          </span>
                        </li>
                        <li style={{ textAlign: "justify", float: 'left', marginRight: '30px' }}>
                          <span style={{ fontSize: "20px" }}>Otros servicios complementarios
                          </span>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div style={{ height: "80%", position: 'relative' }}>
                      <a href='https://esricolombia.sharepoint.com/:p:/r/Areas/GH/_layouts/15/Doc.aspx?sourcedoc=%7B9403cb8c-fa6b-4394-ba33-9928dec07385%7D&action=view&wdSlideId=259&wdModeSwitchTime=1692062929570'>
                        <img
                          src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/background_setting/1692063069848.jpg"
                          style={{ width: '100%', height: '100%' }}
                          alt="Imagen cooperativa" />
                        <p style={{ textAlign: "center", position: 'absolute', top: 0, left: "2px" }}>
                          <strong style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#ffffff", fontSize: "25px" }}>
                            Conoce más...
                          </strong>
                        </p>
                      </a>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}




    </>
  );
};

export default Page7;





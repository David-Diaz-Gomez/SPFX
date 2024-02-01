import React, { useState } from 'react';
import styles from './Page7.module.scss';
import type { IPage7Props } from './IPage7Props';

interface IPage7State {
  activeTab: 'bienestar' | 'beneficios';
  showModal: boolean;
  modalContent: React.ReactNode | null;
}

const Page7: React.FC<IPage7Props> = (props) => {
  const [state, setState] = useState<IPage7State>({
    activeTab: 'bienestar',
    showModal: false,
    modalContent: null,
  });

  const [modalTab, setModalTab] = useState<'definiciones' | 'nuestrasPracticas'>('definiciones');

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
      case 'popup':
        openPopup();
        break;
      default:
        break;
    }
  };

  const openNewWindow = (url: string) => {
    window.open(url, '_blank');
  };

  const openPopup = () => {
    const modalContent = (
      <div style={{ width: '100%', height: '100%' }}>
        {/* Contenido del modal */}
      </div>
    );

    setState((prev) => ({ ...prev, showModal: true, modalContent }));
  };

  const handleModalTabClick = (tab: 'definiciones' | 'nuestrasPracticas') => {
    setModalTab(tab);
  };

  const closePopup = () => {
    setState((prev) => ({ ...prev, showModal: false, modalContent: null }));
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

      {state.showModal && (
        <div className={styles.modalBackdrop} onClick={closePopup}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <div style={{ width: '100%', height: '100%',overflowY:'auto' }}>
              {/* Contenido del modal */}
              <img
                  src="https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_2314/1701725064236.png"
                  style={{ width: '100%', height: '32vh' }}
                  alt="Imagen emergente"
                />
                <p style={{marginLeft:'20px', marginRight:'20px', fontSize:'1.1rem'}}>Lograr un entorno favorable que facilite y potencialice la igualdad de oportunidades, asegurando la no discriminación, la diversidad y la inclusión, comprometidos como organización con la excelencia profesional y la calidad de vida de nuestros colaboradores. </p>
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
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Equidad:</strong> Garantiza la igualdad de condiciones para todos los géneros.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Integralidad:</strong> Incluye oportunidades en la organización sin importar género, raza, religión,
                     estrato social, orientación sexual, condición económica o de salud.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Diversidad e inclusión:</strong> La diversidad tiene que ver con la representación o la composición de una
                     entidad.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                   <strong style={{color:'rgb(25, 121, 109)'}}>»La inclusión</strong> se trata de qué tan bien se valoran e integran en un entorno las contribuciones, la presencia
                     y las perspectivas de diferentes grupos de personas.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»No discriminatoria:</strong> Asegura que en la organización no tenemos distinción o exclusión basadas en
                     el género.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Inclusiva:</strong> Cualquier persona tiene la oportunidad de participar en nuestros procesos de selección,
                     promoción o desarrollo.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Visibilidad:</strong> Se publica información en donde se muestra la evidencia y análisis de información de
                     la política.
                   </p>
                 </div>
               </div>
                ) : (
                  <div style={{ display: 'flex' }}>              
                 {/* Contenedor de texto al 65% de ancho */}
                 <div style={{ flex: '65%', padding: '20px' }}>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Equidad de género</strong> Tenemos procesos de reclutamiento y selección, promoción, desarrollo profesional, capacitación y compensación basados en criterios objetivos y condiciones de igualdad. 
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Planes de beneficios:</strong> organizacionales los cuales no hacen diferencia alguna entre las personas que laboran en la compañía.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Escalafones salariales:</strong> indican el rango e índice del salario del colaborador teniendo en cuenta su cargo actual, competencias, responsabilidades y experiencia.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                   <strong style={{color:'rgb(25, 121, 109)'}}>»Iniciativas y programas</strong> como: “Hagamos un buen trato” y el “Comité de convivencia laboral” contribuyen a prevenir, atender y mitigar cualquier caso de maltrato o discriminación de género que se presente en la compañía.
                   </p>
                   <p style={{fontSize:'1rem'}}>
                   <strong style={{color:'rgb(25, 121, 109)'}}>»</strong>Comprensión de los<strong style={{color:'rgb(25, 121, 109)'}}>principios de diversidad e inclusión</strong> desarrollando una mentalidad que permita un ambiente laboral que promueve la dignidad y el respeto.          
                   </p>
                   <p style={{fontSize:'1rem'}}>
                     <strong style={{color:'rgb(25, 121, 109)'}}>»Manejo de la información:</strong> A través de tableros de control con visualización compartida, los cuales permiten un seguimiento a estadísticas de géneros, salarios, cargos ejercidos sin exclusión alguna por los colaboradores de la compañía.
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
    </>
  );
};

export default Page7;



// Datos de ejemplo para las tarjetas de cada pestaña
const bienestarData = [
  {
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1915/1696482025629.png',
    titulo: 'Yammer',
    descripcion: 'Comparte tus experiencias Esri con toda la comunidad en Yammer donde puedes encontrar noticias, beneficios, momentos únicos y muchos más.',
    accion: 'redireccionar'
  },{
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1920/1696482052016.png',
    titulo: 'Diversidad e inclución',
    descripcion: 'Hagamos un entorno favorable para todos los colaboradores, así logramos potencializar la igualdad de oportunidades en la compañía.',
    accion: 'popup'
  },{
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1925/1696482066576.png',
    titulo: 'Experiencias Esri',
    descripcion: 'Revive en esta galería de fotos los momentos que hemos compartido con nuestros colaboradores.',
    accion: 'popup1'
  },{
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1930/1696482080380.png',
    titulo: 'Hagamos un buen trato',
    descripcion: 'Conoce el programa creado para promover la amabilidad y respeto en todas las relaciones de los colaboradores de Esri.',
    accion: 'popup2'
  },{
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1935/1696482095059.png',
    titulo: 'Primeros pasos',
    descripcion: 'Conoce a los integrantes más pequeños de la familia Esri.',
    accion: 'popup3'
  },{
    imagen: 'https://www.arcgis.com/sharing/rest/content/items/84aa679e450d4db4875798fd6d60fdee/resources/images/widget_1940/1696482112055.png',
    titulo: 'Semana del bienestar',
    descripcion: '¡Disfruta todo el contenido que vivimos en nuestra semana de bienestar!',
    accion: 'popup4'
  },{
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

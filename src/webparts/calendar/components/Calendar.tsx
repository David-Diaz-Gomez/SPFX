import React, { useEffect, useState } from 'react';
import type { ICalendarProps } from './ICalendarProps';
import axios, { AxiosRequestConfig } from 'axios';
import styles from './Calendar.module.scss'
var XLSX = require("xlsx");
import CalendarTUI from '@toast-ui/react-calendar';
// import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import "./Calendario.css"
// import { format } from 'date-fns'; 






const Calendar: React.FC<ICalendarProps> = (props) => {



  interface EventObject {
    id?: string;
    calendarId?: string;
    name?: string;
    title?: string;
    body?: string;
    isAllday?: boolean;
    start?: Date | string | number;
    end?: Date | string | number;
    goingDuration?: number;
    comingDuration?: number;
    location?: string;
    attendees?: string[];
    category?: 'milestone' | 'task' | 'allday' | 'time';
    recurrenceRule?: string;
    state?: 'Busy' | 'Free' | string | undefined;
    isVisible?: boolean;
    isPending?: boolean;
    isFocused?: boolean;
    isReadOnly?: boolean;
    isPrivate?: boolean;
    color?: string;
    backgroundColor?: string;
    dragBackgroundColor?: string;
    borderColor?: string;
    customStyle?: any;
    raw?: any;
  }

  interface CalendarObject {
    id?: string;
    name?: string;
    bgColor?: string;
    borderColor?: string;
    dragBgColor?: string;
    color?: string;
  }

  const [events, setEvents] = useState<EventObject[]>();
  const [calendars, setCalendars] = useState<any>();
  const [currentDate, setCurrentDate] = useState<{ Month: string; year: string }>();

  const colors: string[] = [
    '#FFCCCC', // Rosa claro
    '#FFCC99', // Melocotón claro
    '#FFCCFF', // Lavanda claro
    '#99CCFF', // Azul cielo claro
    '#99FF99', // Verde menta claro
    '#FFFFCC', // Amarillo claro
    '#CCCCCC', // Gris claro
    '#CCFFCC', // Verde claro
    '#CCCCFF', // Azul claro
    '#FFCCFF', // Lila claro
    '#FF99CC', // Rosa suave
    '#CC99FF', // Púrpura claro
    '#99FFFF', // Turquesa claro
    '#CCFFFF', // Azul claro
    '#FFFF99', // Amarillo pastel
  ];

  const meses: string[] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const getValuesFromXlsxCalendars = async (url: string) => {
    // logica repetica start
    const options: AxiosRequestConfig<any> = {
      url,
      responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data, { type: 'binary', cellText: false, cellDates: true });
    let worksheets = workbook.SheetNames.map((sheetName: string) => {
      return { sheetName, data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false, dateNF: 'yyyy-mm-dd' }) };
    });

    const dataCalendars: string[] = [];
    const calendars: CalendarObject[] = [];

    worksheets[0].data.forEach((element: any, index: number) => {
      if (element.Modalidad !== undefined) {
        const modalidad = element.Modalidad.trim(); // Eliminar espacios al principio y al final
        if (modalidad && dataCalendars.indexOf(modalidad) === -1) {
          dataCalendars.push(modalidad);
        }
      }
    });


    dataCalendars.forEach((element, index) => {
      const calendar: CalendarObject = {
        id: element,
        name: element,
        bgColor: colors[index],
        borderColor: colors[index],
        dragBgColor: colors[index],

      };

      calendars.push(calendar);
    });
    testAxiosXlsx(calendars, worksheets[0].data);
  }

  const testAxiosXlsx = (calendars: CalendarObject[], data: []) => {
    var events_data: EventObject[] = [];

    data?.forEach((element: any, index: number) => {
      if (element.Fecha !== undefined) {
        const existingCalendar = calendars.map((cal: CalendarObject) => cal.id).indexOf(element.Modalidad);
        let event: EventObject = {
          id: index.toString(),
          calendarId: element.Modalidad,
          title: element.Actividad,
          body:   `
        <div style="display: flex; flex-direction: column;">
          <h3 style="margin-block-end: 0; margin-block-start:0;" >${element.Actividad}</h3>
          <img src="${element.LINK_IMG}" alt="Imagen" style="width: 4em; height: 3em;"/>
          <span>Fecha: ${element.Fecha}</span>
          <p>Descripción: ${element.Temas}</p>
          <div  style="background-color: ${existingCalendar !== -1 ? calendars[existingCalendar].bgColor : 'transparent'}; width: 4rem; height: auto; display: flex; justify-content: center; border-radius: 5px; padding:4px;">
           ${element.Modalidad}
          </div>
         </div> 
          `,
          start: element.Fecha,
          end: element.Fecha,
          category: 'allday',
          isReadOnly: true,
          backgroundColor: existingCalendar !== -1 ? calendars[existingCalendar].bgColor : 'transparent',
        };
        events_data.push(event);
      };

    });
    setEvents(events_data);
    setCalendars(calendars);
  }


  const template = {
    milestone(event: EventObject) {
      return `<span style="color:#fff;background-color: ${event.backgroundColor};">${event.title}</span>`;
    },
    milestoneTitle() {
      return 'Milestone';
    },
    allday(event: EventObject) {
      return `${event.title}<i class="fa fa-refresh"></i>`;
    },
    alldayTitle() {
      return 'All Day';
    },
    monthMoreTitleDate(moreTitle: any) {
      const { date } = moreTitle;
      return `<span>${date}</span>`;
    },
    popupDetailTitle({ title }: { title: any }) {
      return `<h3 style=" black: white;">${title}</h3>`;
    },
 
    popupDetailRecurrenceRule({ recurrenceRule }: { recurrenceRule: any }) {
   
      return `<div style="background-color: yellow; color: black;">${recurrenceRule}</div>`;
    },
    popupDetailBody({ body }: { body: any }) {
   
      return `<span style="color: black;">${body}</span>`;
    },
    popupDetailState({ state }: { state: any }) {
      return '';
    },
    
  
  };

  useEffect(() => {
    async function fetchData() {
      try {
        await getValuesFromXlsxCalendars("https://esricolombia.sharepoint.com/Areas/GH_2/SiteAssets/FR-GH-14%20Cronograma%20actividades%202024%20(1)-d8189961-a11b-42a7-8488-8d4a01ba69fd.xlsx");

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

    function getDateCalendar() {
      const calendarInstance = calendarRef.current.getInstance();
      if (calendarInstance) {
        const currentLocalDate = calendarInstance.getDate();
        const year = currentLocalDate.getFullYear().toString()
        const month = meses[currentLocalDate.getMonth()]
        setCurrentDate({ Month: month, year: year });
      }
    }

    getDateCalendar();

  }, []);


  const calendarRef: any = React.createRef();

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.getInstance();
    if (calendarInstance) {
      calendarInstance.next();
      const currentLocalDate = calendarInstance.getDate();
      const year = currentLocalDate.getFullYear().toString();
      const month = meses[currentLocalDate.getMonth()];
      setCurrentDate({ Month: month, year: year });
    }
  };

  const handleClickBackButton = () => {
    const calendarInstance = calendarRef.current.getInstance();
    if (calendarInstance) {
      calendarInstance.prev();
      const currentLocalDate = calendarInstance.getDate();
      const year = currentLocalDate.getFullYear().toString();
      const month = meses[currentLocalDate.getMonth()];
      setCurrentDate({ Month: month, year: year });
    }
  };
  const handleGoToToday = () => {
    const today = new Date();
    const calendarInstance = calendarRef.current.getInstance();
    if (calendarInstance) {
      calendarInstance.setDate(today);
      const month = String(today.getMonth());
      const year = String(today.getFullYear());
      setCurrentDate({ Month: meses[Number(month)], year: year });
    }
  };


  return (
    <section id={styles.calendarContainer}>
      <div className={styles.calendarControl}>
        <div className={styles.controlsMonth}>
          <button className={styles.controlMonth} onClick={handleClickBackButton}>&lsaquo;</button>
          <button className={styles.controlMonth} onClick={handleClickNextButton}>&rsaquo;</button>
          <button className={styles.controlHoy} onClick={handleGoToToday}>Hoy</button>
        </div>

        <span className={styles.CalenderName}>{currentDate?.Month}  {currentDate?.year}</span>
      </div>
      <div className={styles.calendarContainer}>
        <div className={styles.lateral}>
          <h4>Calendarios</h4>
          <div className={styles.listCalendars} >
            {calendars && calendars.map((calendar: CalendarObject) => (
              <div key={calendar.id} >
                <span className={styles.calendarName} style={{ backgroundColor: calendar.bgColor }}>{calendar.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.calendario}>
          <CalendarTUI  ref={calendarRef} usageStatistics={false} calendars={calendars} events={events} view="month" template={template} useDetailPopup={true} isReadOnly={true} />
        </div>
      </div>



    </section>
  );
}

export default Calendar;











import React, { useEffect, useState } from 'react';
import type { ICalendarProps } from './ICalendarProps';
import axios, { AxiosRequestConfig } from 'axios';
// import styles from './Calendar.module.scss'
var XLSX = require("xlsx");
import CalendarTUI from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';





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
    state?: 'Busy' | 'Free';
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
  

  // funciones

  // // Función para obtener el color del calendario q
  // const getCalendarColor = (calendarId: string) => {

  //   const calendar = calendars.find((cal: CalendarObject) => cal.id === calendarId);
  //   console.log("calendar para color", calendar)
  //   return calendar ? calendar.bgColor : 'transparent';

  // }

  const getValuesFromXMLCalendars = async (url:string) => {
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
      if (element.Modalidad !== undefined && dataCalendars.indexOf(element.Modalidad) === -1) {
        dataCalendars.push(element.Modalidad);
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

    return { calendars };
  }
  // -------------------------
  const testAxiosXlsx = async (url: string) => {

    const options: AxiosRequestConfig<any> = {
      url,
      responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data, { type: 'binary', cellText: false, cellDates: true });
    let worksheets = workbook.SheetNames.map((sheetName: string) => {
      return { sheetName, data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false, dateNF: 'yyyy-mm-dd' }) };
    });
    var events_data: EventObject[] = [];

    worksheets[0].data.forEach((element: any, index: number) => {
      // Verificamos si el calendario ya está en la lista de calendarios
      const existingCalendar = calendars.find((cal:CalendarObject) => cal.id === element.Modalidad);
      let event: EventObject = {
        id: index.toString(),
        calendarId: element.Modalidad,
        title: element.Actividad,
        body: element.Temas,
        start: element.Fecha,
        end: element.Fecha,
        category: 'allday',
        isReadOnly: true,
        backgroundColor: existingCalendar ? existingCalendar.bgColor : 'transparent',
        customStyle: { backgroundImage: `url("https://github.com/nhn/tui.calendar/blob/main/docs/assets/EventObject_style.png")` }
      };
      events_data.push(event);
    });

    return { events_data};
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
  };

    
  useEffect(() => {
    async function fetchData() {
      try {
        const { calendars } = await getValuesFromXMLCalendars("https://krysgctest.sharepoint.com/sites/Prueba/SiteAssets/FR-GH-14%20Cronograma%20actividades%202024%20(1)-d8189961-a11b-42a7-8488-8d4a01ba69fd.xlsx");
        setCalendars(calendars);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
 

  useEffect(() => {
    async function fetchData() {
      try {
        if (calendars) {
          const { events_data} = await testAxiosXlsx("https://krysgctest.sharepoint.com/sites/Prueba/SiteAssets/FR-GH-14%20Cronograma%20actividades%202024%20(1)-d8189961-a11b-42a7-8488-8d4a01ba69fd.xlsx");
          setEvents(events_data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [calendars]);

 


  return (
    <section style={{ position: 'relative' }} >
      <CalendarTUI usageStatistics={false} calendars={calendars} events={events} view="month" template={template} useDetailPopup={true} useFormPopup={true} isReadOnly={true} />
    </section>
  );
}

export default Calendar;




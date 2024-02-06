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
  const [events, setEvents] = useState<EventObject[]>();

  const calendars = [
    { id: '1', name: 'Personal' }
  ];


  const testAxiosXlsx = async (url: string) => {
    const options: AxiosRequestConfig<any> = {
      url,
      responseType: "arraybuffer"
    }
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data,{type:'binary',cellText:false,cellDates:true});
    let worksheets = workbook.SheetNames.map((sheetName: string) => {
      return { sheetName, data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {raw:false,dateNF:'yyyy-mm-dd'}) };
    });
    console.log(worksheets)
    var events_data: EventObject[] = [];

    worksheets[0].data.forEach((element: any, index: number) => {
      let event: EventObject = {
        id: index.toString(),
        calendarId: "1",
        title: element.Actividad,
        body: element.Temas,
        start: element.Fecha,
        end: element.Fecha,
        category: 'allday',
        isReadOnly: true,
        backgroundColor: 'blue',
        customStyle: {backgroundImage: `url("https://github.com/nhn/tui.calendar/blob/main/docs/assets/EventObject_style.png")`}
      }
      events_data.push(event);
    });

    return events_data;
    // console.log("json:\n", JSON.stringify(worksheets), "\n\n");
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
        const res = await testAxiosXlsx("https://krysgctest.sharepoint.com/sites/Prueba/SiteAssets/FR-GH-14%20Cronograma%20actividades%202024%20(1)-d8189961-a11b-42a7-8488-8d4a01ba69fd.xlsx");
        setEvents(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <section style={{position: 'relative'}} >
      {events && console.log(events)}
      <CalendarTUI usageStatistics={false} calendars={calendars} events={events} view="month" template={template} useDetailPopup={true} useFormPopup={true} isReadOnly={true}/>
    </section>
  );
}

export default Calendar;

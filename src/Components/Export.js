import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Calendar2Date, FileEarmarkPdf } from "react-bootstrap-icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Link from "@mui/joy/Link";
import { useColorScheme } from "@mui/joy";
import { useSelector } from "react-redux";

const Export = () => {
  const { mode } = useColorScheme();
  const curClasses = useSelector((state) => state.slice.curClasses);

  // PDF Download Function.
  const pdfDownload = async () => {
    const element = document.querySelector("main");
    const canvas = await html2canvas(element, {
      backgroundColor: mode === "light" ? "#fff" : "#000",
    });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  // iCal Download Function.

  const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const icalDownload = async () => {
    let ical = `BEGIN:VCALENDAR
PRODID:Calendar
VERSION:2.0
`;
    const timeFormat = (d) => {
      const year = d.getFullYear();
      const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
      const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      const minutes =
        d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
      const seconds =
        d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
      return `${year}${month}${date}T${hour}${minutes}${seconds}`;
    };
    let counter = 0;
    const now = (() => {
      return timeFormat(new Date());
    })();
    const timeSet = (day, hour, minutes) => {
      const d = new Date(2023, 8, 28);
      d.setDate(28 + day);
      d.setHours(hour);
      d.setMinutes(minutes);
      return timeFormat(d);
    };
    for (let curClass of curClasses) {
      for (let time of curClass.times) {
        console.log(time);
        ical += `BEGIN:VEVENT
UID:${counter++}@default
CLASS:PUBLIC
DESCRIPTION:${curClass.title}
RRULE:FREQ=WEEKLY;UNTIL=20231215T000000Z;BYDAY=${weekdays[time.day]})
          .join(",")})}
DTSTAMP;VALUE=DATE-TIME:${now}
DTSTART;VALUE=DATE-TIME:${timeSet(time.day, time.start[0], time.start[1])}
DTEND;VALUE=DATE-TIME:${timeSet(time.day, time.end[0], time.end[1])}
SUMMARY;LANGUAGE=en-us:${curClass.subject} ${curClass.cid} ${curClass.section}
TRANSP:TRANSPARENT
END:VEVENT
`;
      }
    }
    ical += `END:VCALENDAR`;
    const blob = new Blob([ical], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = "schedule.ics";
    a.href = url;
    a.click();
  };
  return (
    <Grid
      container
      sx={{ margin: "10px" }}
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid>
        <Card sx={{ px: 4 }} variant="outlined">
          <FileEarmarkPdf size="2em" />
          <Typography>PDF</Typography>
          <Link
            overlay
            onClick={() => {
              pdfDownload();
            }}
          />
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ px: 4 }} variant="outlined">
          <Calendar2Date size="2em" />
          <Typography>iCal</Typography>
          <Link
            overlay
            onClick={() => {
              icalDownload();
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Export;

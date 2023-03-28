import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Calendar2Date, FileEarmarkPdf } from "react-bootstrap-icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Link from "@mui/joy/Link";
import { useColorScheme } from "@mui/joy";

const Export = () => {
  const { mode } = useColorScheme();
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default Export;

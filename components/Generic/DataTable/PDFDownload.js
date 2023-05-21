import { Box, Typography } from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Download from "@mui/icons-material/Download";
import updatedLogo from "../../../assets/Logo/floraGenic.png";

const PDFDownload = ({
  tableHeaders,
  rowData,
  exportFileName = "TableData",
}) => {
  const headsForPdf = tableHeaders
    ?.map((head) => {
      return {
        headerName: head.headerName,
        field: head.field,
        valueGetter: head.valueGetter,
      };
    })
    .filter(
      (head) =>
        head.headerName !== "Actions" &&
        head.headerName !== "" &&
        head.headerName !== "Access" &&
        head.headerName !== "Image" &&
        head.headerName !== "ID"
    );

  const rowDataForPdf = rowData?.map((row) => {
    const rowValues = headsForPdf
      ?.map((head) => {
        if (head.valueGetter) {
          if (typeof head.valueGetter === "function") {
            return head?.valueGetter({ row });
          } else {
            return Infinity;
          }
        } else {
          return row[head.field];
        }
      })
      .filter((value) => value !== Infinity);
    return rowValues;
  });

  const downloadPDF = () => {
    const doc = new jsPDF("l");
    var y = 25;
    doc.setLineWidth(2);
    // doc.addImage(updatedLogo, "PNG", 12, 5, 40, 16);
    doc.text(150, 15, "FloraGenic Data", "center");
    doc.text(150, 23, exportFileName || "Table Data", "center");
    doc.setFontSize(9);
    doc.text(242, 28, `Date:${new Date().toLocaleString()}`, "left");
    doc.autoTable({
      head: [headsForPdf?.map((head) => head.headerName)],
      body: rowDataForPdf,
      startY: 30,
      theme: "grid",
    });
    doc.save(exportFileName + ".pdf");
  };
  return (
    <Box
      onClick={downloadPDF}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Export to PDF
    </Box>
  );
};

export default PDFDownload;

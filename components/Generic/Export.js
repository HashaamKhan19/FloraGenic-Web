import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FileDownloadOutlined } from "@mui/icons-material";
import PDFDownload from "./DataTable/PDFDownload";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

export default function Export({ rows, columns }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [csvData, setCSVData] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function getAllKeyValuePairs(obj) {
    let result = {};

    function traverse(obj, parentKey = "") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          let currentKey = parentKey ? parentKey + "." + key : key;

          if (typeof obj[key] === "object" && obj[key] !== null) {
            traverse(obj[key], currentKey);
          } else {
            result[currentKey] = obj[key];
          }
        }
      }
    }

    traverse(obj);
    return result;
  }
  4;

  const getCSVData = React.useCallback(() => {
    let csvData = [];
    rows.map((row) => {
      csvData.push(getAllKeyValuePairs(row));
    });
    return csvData.filter((item) =>
      Object.keys(item)?.map(
        (key) =>
          key !== null && !key.includes("id") && !key.includes("typename")
      )
    );
  }, [rows]);

  React.useEffect(() => {
    setCSVData(getCSVData);
  }, [rows]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FileDownloadOutlined />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} dense>
          <CSVLink data={csvData}>Export to CSV</CSVLink>
        </MenuItem>
        {/* <MenuItem onClick={handleClose} dense>
          Export selected to CSV
        </MenuItem> */}
        <MenuItem onClick={handleClose} dense>
          <PDFDownload rowData={rows} tableHeaders={columns} />
        </MenuItem>
      </Menu>
    </div>
  );
}

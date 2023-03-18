import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const SkillData = ({ data }) => {
  return (
    <>
      <Image
        src={data?.image}
        alt="Profile Image"
        showLoading
        duration={0}
        width={200}
        height={200}
        style={{
          height: "auto",
          aspectRatio: "1",
          objectFit: "cover",
          borderRadius: "50%",
          padding: "20px",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      />

      <Table
        width="full"
        size="small"
        sx={{ mt: 2, "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Name:
          </TableCell>
          <TableCell>{data?.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Description:
          </TableCell>
          <TableCell>{data?.description}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Status:
          </TableCell>
          <TableCell>{data?.hiddenStatus ? "Hidden" : "Visible"}</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default SkillData;

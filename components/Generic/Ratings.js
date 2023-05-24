import * as React from "react";
import Rating from "@mui/material/Rating";

export default function Ratings({ value }) {
  return <Rating name="read-only" value={value} readOnly />;
}

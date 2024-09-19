import { Card, CardMedia } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo192.png";
import "./cardContainer.module.css";
export default function PrinterContainer() {
  return (
    <Card className="cardContainer">
      <img src={logo} alt="Logo" />
    </Card>
  );
}

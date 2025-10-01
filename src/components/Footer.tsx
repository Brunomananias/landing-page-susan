import React from "react";
import { Paper, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Paper sx={{ backgroundColor: "green", color: "white", py: 3, textAlign: "center" }}>
      <Typography>© 2025 Desenvolvido por Bruno Ananias — Todos os direitos reservados.</Typography>
    </Paper>
  );
};

export default Footer;

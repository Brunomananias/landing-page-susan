import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Cria o tema com a fonte Poppins
const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza estilos do navegador */}
      <App />
    </ThemeProvider>
  </StrictMode>
);

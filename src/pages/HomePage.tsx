import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Servicos from "../components/Servicos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import SobrePage from "../components/SobrePage";
import Informacoes from "../components/Informacoes";
import Especialidades from "../components/Carousel";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ fontFamily: "Inter" }}>
      <Navbar />
      <HeroSection />
      <SobrePage />
      <Especialidades />
      <Servicos />
      <Informacoes />
      <Contato />
      <Footer />
    </Box>
  );
};

export default HomePage;

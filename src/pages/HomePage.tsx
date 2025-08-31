/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Instagram, Phone } from "@mui/icons-material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ChatIcon from "@mui/icons-material/Chat";
import susan007 from "../assets/images/susan007.png";
import suaImagemDeFundo from "../assets/images/backgroud.png";
import Carousel from "../components/Carousel";
import SobrePage from "./SobrePage";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  const servicosDetalhados = [
    {
      icon: <FitnessCenterIcon fontSize="large" color="success" />,
      titulo: "Planejamento Alimentar",
      descricao:
        "Análise completa do seu estado físico para planejar seu progresso.",
    },
    {
      icon: <PhoneIphoneIcon fontSize="large" color="success" />,
      titulo: "Avaliação Física Completa",
      descricao: "Plano alimentar e notificações diretamente no seu celular.",
    },
    {
      icon: <SelfImprovementIcon fontSize="large" color="success" />,
      titulo: "Acesso ao Aplicativo",
      descricao: "Acesso à plataforma Move Health com treinos e meditações.",
    },
    {
      icon: <LocalHospitalIcon fontSize="large" color="success" />,
      titulo: "Suplementos e Manipulados",
      descricao: "Orientação sobre suplementos e manipulados de forma segura.",
    },
    {
      icon: <RestaurantMenuIcon fontSize="large" color="success" />,
      titulo: "Planejamento Alimentar",
      descricao: "Plano individualizado baseado em suas necessidades e metas.",
    },
    {
      icon: <ChatIcon fontSize="large" color="success" />,
      titulo: "Suporte 24h",
      descricao: "Acompanhamento contínuo via WhatsApp para tirar dúvidas.",
    },
  ];

  const planos = [
    { titulo: "Consulta Avulsa", preco: "R$ 150" },
    { titulo: "Plano Bimestral", preco: "R$ 260" },
    { titulo: "Plano Semestral", preco: "R$ 670" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      {/* Header */}
     <Navbar/>

      {/* Hero */}
     <motion.div initial="hidden" animate="visible" variants={fadeUp}>
  <Box
    id="hero"
    sx={{
      position: "relative",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pt: 10,
      backgroundImage: `url(${suaImagemDeFundo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
        zIndex: 1,
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Texto à esquerda */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            color="white"
            sx={{ fontFamily: "'Dancing Script', cursive", fontWeight: "bold" }}
          >
            Transforme sua relação com a comida!
          </Typography>
          <Typography
            variant="h6"
            paragraph
            color="white"
            sx={{ lineHeight: 1.6 }}
          >
            Meu método vai além do plano alimentar. Trabalhamos comportamento, mentalidade e hábitos que promovem saúde, equilíbrio e bem-estar.
          </Typography>
          <Button
            href="#contato"
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: "bold",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              "&:hover": { backgroundColor: "#388e3c" },
            }}
          >
            Agende sua consulta
          </Button>
        </motion.div>

        {/* Imagem à direita */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ textAlign: "center" }}
        >
          <Box
            component="img"
            src={susan007}
            alt="Nutricionista"
            sx={{
              width: "100%",
              maxWidth: 520,
            }}
          />
        </motion.div>
      </Box>
    </Container>
  </Box>
</motion.div>


     <SobrePage/>

{/* Especialidades */}
<Carousel/>


      {/* Serviços */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container id="servicos" sx={{ py: 10 }}>
          <Typography variant="h4" align="center" color="green" gutterBottom>
            Benefícios da Consulta
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
              mt: 4,
            }}
          >
            {servicosDetalhados.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  sx={{
                    width: 300,
                    p: 3,
                    textAlign: "center",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                      transition: "0.3s",
                    },
                  }}
                  elevation={3}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descricao}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </motion.div>

      {/* Planos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box id="planos" sx={{ py: 10, backgroundColor: "#e8f5e9" }}>
          <Container>
            <Typography variant="h4" align="center" color="green" gutterBottom>
              Investimento
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                mt: 4,
              }}
            >
              {planos.map((plano, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card sx={{ width: 300 }} elevation={4}>
                    <CardHeader
                      title={plano.titulo}
                      titleTypographyProps={{ align: "center", color: "green" }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h5" gutterBottom>
                        {plano.preco}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "green",
                          mt: 2,
                          "&:hover": { backgroundColor: "darkgreen" },
                        }}
                        href="#contato"
                      >
                        Agendar
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* Contato */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Container id="contato" sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h4" color="green" gutterBottom>
            Entre em Contato
          </Typography>
          <Typography gutterBottom>Venha fazer parte do meu time!</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}
          >
            <Button
              variant="outlined"
              startIcon={<Phone />}
              href="http://wa.me/5531996535127"
              target="_blank"
              color="success"
            >
              WhatsApp
            </Button>
            <Button
              variant="outlined"
              startIcon={<Instagram />}
              href="https://www.instagram.com/nutri.susancarolina"
              target="_blank"
              color="success"
            >
              Instagram
            </Button>
          </Box>
        </Container>
      </motion.div>

      {/* Footer */}
      <Paper
        sx={{
          backgroundColor: "green",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>
          © 2025 Nutricionista Susan Carolina — Todos os direitos reservados.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import susan007 from "../assets/images/susan007.png";
import suaImagemDeFundo from "../assets/images/HomeFoto.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection: React.FC = () => {
  return (
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
            {/* Texto */}
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h3" gutterBottom color="white" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                Transforme sua relação com a comida!
              </Typography>
              <Typography variant="h6" paragraph color="white" sx={{ lineHeight: 1.6 }}>
                Meu método vai além do plano alimentar. Trabalhamos comportamento, mentalidade e hábitos que promovem
                saúde, equilíbrio e bem-estar.
              </Typography>
              <Button
                href="https://wa.me/553196535127?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
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

            {/* Imagem */}
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} style={{ textAlign: "center" }}>
              <Box component="img" src={susan007} alt="Nutricionista" sx={{ width: "100%", maxWidth: 520 }} />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default HeroSection;

import React, { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import especialidade001 from "../assets/images/especialidades001.avif";
import especialidade002 from "../assets/images/especialidades002.avif";
import especialidade003 from "../assets/images/especialidades003.avif";
import especialidade004 from "../assets/images/especialidades004.avif";
import especialidade005 from "../assets/images/especialidades005.avif";

const especialidades = [
  {
    titulo: "Emagrecimento e Obesidade",
    descricao:
      "Planos personalizados para perda de peso saudável e sustentável.",
    img: especialidade001,
  },
  {
    titulo: "Nutrição Funcional",
    descricao: "Foco em alimentos que promovem equilíbrio e bem-estar geral.",
    img: especialidade002,
  },
  {
    titulo: "Nutrição e Estética",
    descricao: "Alimentos e estratégias para melhorar saúde e aparência.",
    img: especialidade003,
  },
  {
    titulo: "Nutrição Esportiva",
    descricao: "Apoio nutricional para atletas e pessoas ativas.",
    img: especialidade004,
  },
  {
    titulo: "Intolerâncias Alimentares",
    descricao: "Orientação especializada para dietas livres de alergênicos.",
    img: especialidade005,
  },
];

const Especialidades: React.FC = () => {
  // Pré-carrega imagens no carregamento da página
  useEffect(() => {
    especialidades.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  return (
    <Box id="servicos" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography
          variant="h4"
          color="green"
          gutterBottom
          align="center"
          sx={{ fontFamily: "'Dancing Script', cursive", mb: 4 }}
        >
          Minhas Especialidades
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {especialidades.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "white",
                borderRadius: 2,
                overflow: "hidden",
                p: 2,
                minHeight: 360, // altura uniforme
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.titulo}
                loading="eager" // força carregamento imediato
                sx={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  mb: 2,
                  borderRadius: 1,
                }}
              />
              <Typography variant="h6" color="green" gutterBottom>
                {item.titulo}
              </Typography>
              <Typography variant="body2">{item.descricao}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            href="https://wa.me/553196535127?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#388e3c" },
            }}
          >
            Agende sua consulta
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Especialidades;

import React from "react";
import { Box, Card, Typography, Container } from "@mui/material";
import especialidade001 from "../assets/images/especialidades001.jpg";
import especialidade002 from "../assets/images/especialidades002.jpg";
import especialidade003 from "../assets/images/especialidades003.jpg";
import especialidade004 from "../assets/images/especialidades004.jpg";
import especialidade005 from "../assets/images/especialidades005.jpg";

const especialidades = [
  { titulo: "Emagrecimento e Obesidade", descricao: "Planos personalizados para perda de peso saudável e sustentável.", img: especialidade001 },
  { titulo: "Nutrição Funcional", descricao: "Foco em alimentos que promovem equilíbrio e bem-estar geral.", img: especialidade002 },
  { titulo: "Nutrição e Estética", descricao: "Alimentos e estratégias para melhorar saúde e aparência.", img: especialidade003 },
  { titulo: "Nutrição Esportiva", descricao: "Apoio nutricional para atletas e pessoas ativas.", img: especialidade004 },
  { titulo: "Intolerâncias Alimentares", descricao: "Orientação especializada para dietas livres de alergênicos.", img: especialidade005 },
];

const EspecialidadesGrid: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container>
       <Typography 
  variant="h4" 
  color="green" 
  gutterBottom
  align="center"  // centraliza o texto
  sx={{ fontFamily: "'Dancing Script', cursive" }} // letra cursiva
>
  Minhas Especialidades
</Typography>

        {/* Grid responsivo */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mt: 4,
          }}
        >
          {especialidades.map((item, i) => (
            <Card
              key={i}
              sx={{
                width:70,
                p: 2,
                textAlign: "center",
                flexGrow: 1,
                "@media (max-width:600px)": {
                  width: "100%", // no celular ocupa a largura inteira
                },
              }}
              elevation={4}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.titulo}
                sx={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h6" color="green" gutterBottom>
                {item.titulo}
              </Typography>
              <Typography variant="body2">{item.descricao}</Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EspecialidadesGrid;

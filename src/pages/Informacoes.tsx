import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";

const Informacoes: React.FC = () => {
  const infos = [
    {
      icon: <PersonIcon fontSize="large" color="success" />,
      titulo: "Atendimento Clínico",
      descricao:
        "Presencial em São José da Lapa e Online por vídeo chamada via WhatsApp.",
    },
    {
      icon: <AccessTimeIcon fontSize="large" color="success" />,
      titulo: "Duração da Consulta",
      descricao: "Entre 50 minutos e 1h30min.",
    },
    {
      icon: <GroupsIcon fontSize="large" color="success" />,
      titulo: "Grupo de Pessoas",
      descricao:
        "Indicado para pessoas de 15 a 65 anos (reeducação alimentar, emagrecimento, hipertrofia, prevenção e tratamento de doenças crônicas).",
    },
    {
      icon: <EventIcon fontSize="large" color="success" />,
      titulo: "Horário de Atendimento",
      descricao: "Presencial e Online (verificar disponibilidade na agenda).",
    },
  ];

  // Variants para container e items
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#fff9f5" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#b57a3c", fontWeight: "bold" }}
        >
          Informações da Consulta
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ fontStyle: "italic", color: "#7a5a3a" }}
        >
          atendimento acolhedor e sem julgamentos
        </Typography>

        {/* Container animado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 6,
              mt: 6,
            }}
          >
            {infos.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Box sx={{ textAlign: "center", maxWidth: 250 }}>
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descricao}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Informacoes;

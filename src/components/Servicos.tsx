import React from "react";
import { Container, Typography, Box, Card, Button } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import {
  FitnessCenter as FitnessCenterIcon,
  PhoneIphone as PhoneIphoneIcon,
  SelfImprovement as SelfImprovementIcon,
  LocalHospital as LocalHospitalIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

const servicosDetalhados = [
  {
    icon: <FitnessCenterIcon fontSize="large" color="success" />,
    titulo: "Planejamento Alimentar",
    descricao: "Análise completa do seu estado físico para planejar seu progresso.",
  },
  {
    icon: <PhoneIphoneIcon fontSize="large" color="success" />,
    titulo: "Avaliação Completa",
    descricao: "Avaliação Física completa com balança de bioimpedância, adipômetro, fita métrica.",
  },
  {
    icon: <SelfImprovementIcon fontSize="large" color="success" />,
    titulo: "Acesso ao Aplicativo",
    descricao: "Acesso a aplicativo exclusivo com o plano alimentar, notificações, diário alimentar e muito mais!",
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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Servicos: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <Container id="consulta" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" color="green" gutterBottom>
          Benefícios da Consulta
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, mt: 4 }}>
          {servicosDetalhados.map((item, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Card
                sx={{
                  width: 300,
                  height: 200,
                  p: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    scale: 1.03,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
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
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              "&:hover": { backgroundColor: "#388e3c" },
            }}
          >
            Agende sua consulta
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Servicos;

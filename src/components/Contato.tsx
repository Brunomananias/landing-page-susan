import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Instagram, Phone } from "@mui/icons-material";

const Contato: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
      <Container id="contato" sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" color="green" gutterBottom component={motion.div}>
          Entre em Contato
        </Typography>

        <Typography gutterBottom>
          Venha fazer parte do meu time!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
          <Button variant="outlined" startIcon={<Phone />} href="https://wa.me/553196535127?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" color="success">
            WhatsApp
          </Button>
          <Button variant="outlined" startIcon={<Instagram />} href="https://www.instagram.com/nutri.susancarolina" target="_blank" color="success">
            Instagram
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Contato;

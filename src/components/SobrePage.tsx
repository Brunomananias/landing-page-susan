/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import susan006 from "../assets/images/susan006.jpg";

const SobrePage: React.FC = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          id="sobre"
          sx={{
            position: "relative",
            py: 12,
            width: "100%",
            minHeight: "80vh",
            backgroundImage: `url(${susan006})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{ position: "relative", zIndex: 2, maxWidth: "100%", px: 2 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "flex-start", md: "flex-end" }} // à esquerda no celular, à direita em desktop
              textAlign={{ xs: "left", md: "right" }} // alinhamento do texto
              gap={2}
              marginLeft={{ md: 50 }}
              width="100%"
              maxWidth={{ xs: "100%", md: 700 }} // largura máxima do conteúdo
              px={{ xs: 2, md: 0 }}
            >
              {[
                { tipo: "h4", texto: "Olá, seja bem-vindo(a)!", peso: "bold" },
                {
                  tipo: "body1",
                  texto:
                    "Sou Susan Carolina, nutricionista graduada e pós-graduada em Nutrição Esportiva, com paixão em ajudar pessoas a alcançarem seus objetivos de forma saudável, equilibrada e sustentável.",
                },
                {
                  tipo: "body1",
                  texto:
                    "Meu método vai muito além do plano alimentar — é pensado em transformar sua relação com a comida de dentro para fora, trabalhando comportamento, mentalidade e construção de hábitos que promovem saúde, equilíbrio e bem-estar físico e emocional.",
                },
                {
                  tipo: "body1",
                  texto:
                    "Aqui nós aprofundamos nas raízes dos seus desafios. Minha missão é te ajudar a entender suas escolhas, superar padrões que te prendem e criar uma rotina que funcione para você, de forma leve e saudável.",
                },
                {
                  tipo: "body1",
                  texto:
                    "Seja qual for sua meta — reeducação alimentar, melhora da performance esportiva, emagrecimento, tratamento de doenças crônicas ou adoção de um estilo de vida mais saudável — vou te ajudar a transformar sua alimentação em uma aliada.",
                },
                {
                  tipo: "h6",
                  texto: "Vamos juntos nessa jornada?",
                  peso: "bold",
                  mt: 3,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // alterna lado
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                >
                  <Typography
                    variant={item.tipo as any}
                    color="white"
                    fontWeight={item.peso as any}
                    sx={{ fontSize: "1.15rem", mt: item.mt || 0 }}
                  >
                    {item.texto}
                  </Typography>
                </motion.div>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                mt: 2,
              }}
            >
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
            </Box>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SobrePage;

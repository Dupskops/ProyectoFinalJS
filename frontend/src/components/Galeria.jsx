import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Galeria = () => {
  const iaModels = [
    {
      name: 'ChatGPT',
      description: 'Un modelo avanzado de procesamiento de lenguaje natural desarrollado por OpenAI, ampliamente utilizado para responder preguntas y generar contenido.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZzmmCcHaEFAJxBFQagtGkORDIwqOlLrKJQ&s', // Reemplaza con una imagen representativa de ChatGPT
    },
    {
      name: 'Gemini AI',
      description: 'La IA de Google diseñada para competir con otros grandes modelos, enfocada en integración con herramientas de Google y mayor contexto conversacional.',
      image: 'https://1000marcas.net/wp-content/uploads/2024/02/Gemini-Logo.jpg', // Reemplaza con una imagen representativa de Gemini
    },
    {
      name: 'Bard',
      description: 'Un chatbot desarrollado por Google que utiliza modelos avanzados para responder preguntas y realizar tareas relacionadas con información general.',
      image: 'https://logowik.com/content/uploads/images/google-bard3872.logowik.com.webp', // Reemplaza con una imagen representativa de Bard
    },
    {
      name: 'Claude',
      description: 'Creada por Anthropic, Claude se especializa en generar texto y proporcionar respuestas éticas y seguras a las consultas.',
      image: 'https://preview.redd.it/original-inspiration-for-the-claude-logo-v0-4vjpaxksksyd1.jpg?width=640&crop=smart&auto=webp&s=893071162f9beb1b6ff6512ba3cd2837e0bbeead', // Reemplaza con una imagen representativa de Claude
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Inteligencias Artificiales Destacadas
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {iaModels.map((ia, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200" // Altura ajustada a 200px
                width="300"  // Ancho ajustado a 300px
                image={ia.image}
                alt={ia.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {ia.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {ia.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Galeria;

import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px 0',
      marginTop: 'auto',  // Asegura que el footer esté al final de la página
    }}>
      <Divider sx={{ borderColor: 'white' }} />
      <Box sx={{ textAlign: 'center', padding: '10px' }}>
        <Typography variant="h6" gutterBottom>
          Inteligencia Artificial - Página Informativa
        </Typography>
        <Typography variant="body2">
          Desarrollado por: <strong>Tu Nombre</strong>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="https://www.linkedin.com/in/tu-perfil" color="inherit" target="_blank" sx={{ margin: '0 10px' }}>
            LinkedIn
          </Link>
          <Link href="https://github.com/tu-usuario" color="inherit" target="_blank" sx={{ margin: '0 10px' }}>
            GitHub
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // Icono del menú
import SliderComponent from './Slider';
import Galeria from './Galeria';
import Foro from './Foro';
import FormContacto from './FormContacto';
import Logout from './Logout'; // Importa el componente Logout

const Dashboard = () => {
  const [section, setSection] = useState('slider'); // Controla qué sección mostrar
  const [isDrawerOpen, setDrawerOpen] = useState(false); // Controla la apertura del menú hamburguesa

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Verifica si la pantalla es pequeña

  // Cambia la sección activa
  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  // Maneja el cierre de sesión
  const handleLogout = () => {
    console.log('Logout realizado'); // Agrega la lógica de logout aquí
    setSection('logout');
  };

  // Abre y cierra el Drawer (menú hamburguesa)
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Página Informativa sobre Inteligencia Artificial</Typography>
          
          {/* Icono de menú hamburguesa visible solo en pantallas pequeñas */}
          {isSmallScreen && (
            <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Menú normal visible solo en pantallas grandes */}
          {!isSmallScreen && (
            <Box sx={{ marginLeft: 'auto' }}>
              <Button color="inherit" onClick={() => handleSectionChange('slider')}>Historia</Button>
              <Button color="inherit" onClick={() => handleSectionChange('galeria')}>IA'S</Button>
              <Button color="inherit" onClick={() => handleSectionChange('foro')}>Foro</Button>
              <Button color="inherit" onClick={() => handleSectionChange('formulario')}>Formulario</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button> {/* Botón Logout */}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Menú lateral (Drawer) para pantallas pequeñas */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={() => { handleSectionChange('slider'); toggleDrawer(); }}>
            <ListItemText primary="Historia" />
          </ListItem>
          <ListItem button onClick={() => { handleSectionChange('galeria'); toggleDrawer(); }}>
            <ListItemText primary="IA'S" />
          </ListItem>
          <ListItem button onClick={() => { handleSectionChange('foro'); toggleDrawer(); }}>
            <ListItemText primary="Foro" />
          </ListItem>
          <ListItem button onClick={() => { handleSectionChange('formulario'); toggleDrawer(); }}>
            <ListItemText primary="Formulario" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Contenido dinámico dependiendo de la sección seleccionada */}
      <Container sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          ¡Explora la Inteligencia Artificial!
        </Typography>
        <Typography variant="h6" paragraph>
          Aquí podrás visualizar algunas de las inteligencias artificiales existentes. Estos son solo algunos ejemplos, pero actualmente hay muchas más.
        </Typography>

        {/* Mostrar secciones basadas en el estado */}
        {section === 'slider' && (
          <Box>
            <SliderComponent />
          </Box>
        )}

        {section === 'galeria' && (
          <Box>
            <Galeria />
          </Box>
        )}

        {section === 'foro' && (
          <Box>
            <Typography variant="h5" gutterBottom>Foro de Discusión</Typography>
            <Foro />
          </Box>
        )}

        {section === 'formulario' && (
          <Box>
            <Typography variant="h5" gutterBottom>Formulario de Contacto</Typography>
            <FormContacto />
          </Box>
        )}

        {section === 'logout' && (
          <Box>
            <Logout />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Dashboard;

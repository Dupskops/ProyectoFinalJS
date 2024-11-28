import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Incluye useLocation
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './components/theme'; // Tema
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // Asegúrate de importar el Dashboard
import Footer from './components/Footer';

function App() {
  const [theme, colorMode] = useMode(); // Obtén el tema y la función de cambio de color
  const [userEmail, setUserEmail] = useState(''); // Estado para almacenar el correo del usuario
  const location = useLocation(); // Obtén la ruta actual

  // Verifica si estamos en una ruta de autenticación
  const isAuthRoute = location.pathname === '/' || location.pathname === '/register';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resetea los estilos globales */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Garantiza que el contenedor principal ocupe toda la pantalla
        }}>
          <div style={{ flex: '1' }}>
            <Routes>
              {/* Enviar el correo a los componentes que lo necesiten */}
              <Route path="/" element={<Login setUserEmail={setUserEmail} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard/*" element={<Dashboard userEmail={userEmail} />} /> {/* Ruta para el Dashboard */}
            </Routes>
          </div>
          {/* Renderiza el Footer solo si no estamos en rutas de autenticación */}
          {!isAuthRoute && <Footer />}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

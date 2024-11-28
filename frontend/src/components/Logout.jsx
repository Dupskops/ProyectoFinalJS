import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  useEffect(() => {
    const handleLogout = async () => {
      if (!hasLoggedOut) { // Verificar si ya se ha cerrado sesión
        try {
          const response = await axios.post('/api/auth/logout');
          if (response.status === 200) {
            alert('Cierre de sesión exitoso'); //Sacar esto para salir sin avisar
            setHasLoggedOut(true); // Establecer estado para evitar múltiples alertas
            navigate('/'); // Redirige al login después de cerrar sesión
          } else {
            alert('Error en el cierre de sesión');
          }
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
          alert('Error en el cierre de sesión');
        }
      }
    };

    handleLogout(); // Ejecutar la función de logout al montar el componente
  }, [navigate, hasLoggedOut]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        Vuelva pronto
      </Typography>
    
    </Box>
  );
};

export default Logout;

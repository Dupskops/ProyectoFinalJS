import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const FormContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes integrar la lógica para enviar el formulario
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Formulario de Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default FormContacto;

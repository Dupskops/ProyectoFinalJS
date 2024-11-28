import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Foro = () => {
  // Obtener comentarios desde localStorage o inicializar un array vacío
  const storedComentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

  const [comentarios, setComentarios] = useState(storedComentarios);
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');

  // Guardar los comentarios en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }, [comentarios]);

  // Agregar un comentario
  const agregarComentario = (event) => {
    event.preventDefault();
    if (!usuario || !comentario) return;

    const nuevoComentario = { usuario, texto: comentario };
    setComentarios((prevComentarios) => [...prevComentarios, nuevoComentario]);

    setUsuario('');
    setComentario('');
  };

  // Eliminar un comentario
  const eliminarComentario = (index) => {
    const comentarioAEliminar = comentarios[index];
    if (comentarioAEliminar.usuario === usuario) {
      setComentarios(comentarios.filter((_, i) => i !== index));
    } else {
      alert('No puedes eliminar un comentario que no has creado');
    }
  };

  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Foro de Comentarios
      </Typography>

      <Paper sx={{ display: 'flex', gap: 2, padding: 2 }}>
        <Box sx={{ flex: 1 }}>
          <form onSubmit={agregarComentario}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Comentario"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Publicar Comentario
            </Button>
          </form>
        </Box>

        <Box sx={{ flex: 2, backgroundColor: '#1c3948', borderRadius: 2, padding: 2, overflowY: 'auto' }}>
          <List>
            {comentarios.map((comentario, index) => (
              <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText primary={`${comentario.usuario}: ${comentario.texto}`} sx={{ color: '#fff' }} />
                {comentario.usuario === usuario && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => eliminarComentario(index)}
                  >
                    Eliminar
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default Foro;

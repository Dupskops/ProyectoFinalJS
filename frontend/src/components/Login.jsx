import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Importa el hook useTheme
import { tokens } from './theme'; // Asegúrate de la ruta correcta

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const theme = useTheme(); // Usa el hook useTheme
    const colors = tokens(theme.palette.mode); // Obtén los colores del tema

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            alert('Inicio de sesión exitoso');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Error en el inicio de sesión');
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: colors.primary[600], // Fondo utilizando el tema
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" color={colors.grey[100]}>Iniciar Sesión</Typography> {/* Color del texto */}
                <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: colors.primary[500], // Color del botón utilizando el tema
                            color: 'white', // Color del texto del botón
                            '&:hover': {
                                backgroundColor: colors.primary[600], // Color del botón al pasar el mouse
                            },
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                    <Typography variant="body2" align="center" color={colors.grey[100]}>
                        ¿No tienes una cuenta?{' '}
                        <Button onClick={() => navigate('/register')} color={colors.primary[100]}>
                            Regístrate aquí
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;

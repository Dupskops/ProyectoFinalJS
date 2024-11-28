import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from './theme';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { email, password });
            alert('Registro exitoso');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert(error.response ? error.response.data.message : 'Error en el registro');
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: colors.primary[600],
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" color={colors.grey[100]}>Registro</Typography>
                <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
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
                            backgroundColor: colors.primary[500],
                            color: 'white',
                            '&:hover': {
                                backgroundColor: colors.primary[600],
                            },
                        }}
                    >
                        Registrar
                    </Button>
                    <Typography variant="body2" align="center" color={colors.grey[100]}>
                        ¿Ya tienes una cuenta?{' '}
                        <Button onClick={() => navigate('/')} sx={{ color: colors.primary[100], textTransform: 'none' }}>
                            Inicia sesión aquí
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;

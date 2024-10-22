// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import logo from '../assets/Logo.png'; // Import your logo

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google signup error:', error);
      alert('Google signup failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
          <img src={logo} alt="Craft Trade Logo" style={{ width: '100px', height: '100px' }} />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleGoogleSignup}
          >
            Sign Up with Google
          </Button>
          <Button
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Already have an account? Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;

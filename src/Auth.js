// src/Auth.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { TextField, Button, Container, Typography } from '@mui/material';


function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">{isLogin ? "Login" : "Register"}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {isLogin ? "Login" : "Register"}
        </Button>
        <Button
          onClick={() => setIsLogin(!isLogin)}
          variant="text"
          color="secondary"
        >
          Switch to {isLogin ? "Register" : "Login"}
        </Button>
      </form>
    </Container>
  );
}

export default Auth;

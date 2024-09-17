// src/App.js

import React from 'react';
import { Container } from '@mui/material';
import Auth from './Auth';
import MailList from './MailList';
import './App.css'
function App() {
  return (
    <Container>
      <Auth />
      <MailList />
    </Container>
  );
}

export default App;

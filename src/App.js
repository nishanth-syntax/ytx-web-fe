import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import LandingPage from './components/Landing';
import BottomSheet from './components/BottomSheet';
import MainHeader from './components/MainHeader';

//https://www.framer.com/motion/examples/
function App() {
  return (
    <Container style={{ margin: 20, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
      <MainHeader />
      <LandingPage />
      <BottomSheet />
    </Container>
  );
}

export default App;

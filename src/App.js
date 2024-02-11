import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './containers/LandingPage';
import PoolPage from './containers/PoolPage';
import BottomSheet from './components/LandingComponent/BottomSheet';
import MainHeader from './components/LandingComponent/MainHeader';
import { LandingPageProvider } from '../src/components/LandingComponent/Contexts/LandingPageContext';

import { PAGE_LANDING, PAGE_POOL, STYLE_MAIN_CONTAINER } from './constants';
//https://www.framer.com/motion/examples/

function App() {
  return (
    <Container style={STYLE_MAIN_CONTAINER}>
      <MainHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<AppComponents />} />
          <Route path={PAGE_LANDING} element={<AppComponents />} />
          <Route path={PAGE_POOL} element={<PoolPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

function AppComponents() {
  return (
    <LandingPageProvider>
      <LandingPage />
      <BottomSheet />
    </LandingPageProvider>
  );
}

export default App;

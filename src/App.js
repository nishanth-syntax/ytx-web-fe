import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

import LandingPage from './containers/LandingPage';
import PoolPage from './containers/PoolPage';
import BottomSheet from './components/LandingComponent/BottomSheet';
import MainHeader from './components/LandingComponent/MainHeader';
import { LandingPageProvider } from '../src/components/LandingComponent/Contexts/LandingPageContext';

import { PAGE_LANDING, PAGE_POOL, STYLE_GRID, STYLE_GRID_COL, STYLE_GRID_ROW, STYLE_MAIN_CONTAINER } from './constants';
//https://www.framer.com/motion/examples/

function App() {
  return (
    <LandingPageProvider>
      <Container style={STYLE_MAIN_CONTAINER}>
        <MainHeader />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path={PAGE_LANDING} element={<LandingPage />} />
            <Route path={PAGE_POOL} element={<PoolPage />} />
          </Routes>
        </Router>
        <BottomSheet />
      </Container>
    </LandingPageProvider>
  );
}

// function AppComponents() {
//   return (

//       <LandingPage />
//       <BottomSheet />

//   );
// }

export default App;

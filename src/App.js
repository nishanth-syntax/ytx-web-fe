import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Sheet from 'react-modal-sheet';
import { Container } from "semantic-ui-react";
import LandingPage from './components/Landing';
import LandingPageContext from './components/Contexts/LandingPageContext';
import SideBar from './components/SideBar';

function App() {
  const { showLandingSheet, setLandingVisible } = React.useContext(LandingPageContext);
  return (
    <Container style={{ margin: 20, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
      <SideBar />
      <LandingPage />
      <Sheet isOpen={showLandingSheet} onClose={() => setLandingVisible(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content><LandingPage /></Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </Container>
  );
}

export default App;

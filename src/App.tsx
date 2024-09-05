import { ThemeProvider } from "styled-components";
import {  lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const theme = {
  colors: {
    primary: "#3179ba", 
    border: {
      default: "blue",
      header: "cyan",
      footer: "cyan",
    },
  },
  spacing: {
    padding: "10px",
    height: "100%",
    width: "100%",
    display: "flex",
    direction: "row",
  },
};




const ControlPanel = lazy(() => import('./pages/ControlPanel'));


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      
          <Routes>
            <Route path="/panel" element={<ControlPanel />} />
         
          </Routes>
     
      </Router>
    </ThemeProvider>
  );
};

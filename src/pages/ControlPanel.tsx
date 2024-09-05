import React from "react";

// import { CustomizedTable} from "../components/Table/Table";
import { GeoNav } from '../components/GeoNav/GeoNav'



import styled from "styled-components";


import "bootstrap/dist/css/bootstrap.min.css";



const LoginPageFrame = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
`;




// const fakeData = {
//   id:1,
//   name:'test',
//   created:new Date()
// }

const ControlPanel: React.FC = () => {
  return (
    <LoginPageFrame>
     
      <GeoNav/>
  
    </LoginPageFrame>
  );
};

export default ControlPanel;

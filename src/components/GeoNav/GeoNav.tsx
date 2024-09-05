import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CustomizedTable } from "../Table/Table";
import styled from "styled-components";
import  Button from "react-bootstrap/Button";
import  InputGroup  from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
// import axios from "axios";

const CustomTabs = styled(Tabs)`
  width: 70vw;
`;

const FunctionalPanel = styled.div`
border:1px solid red;
with:100%;
height:150px;

`

const fakeData = {
  id: 1,
  name: "test",
  created: new Date(),
};

export const GeoNav = () => {
  const handleGetWorkspaceList = (key: string | null) => {
    if (key === "home") {
        // axios.post('http://localhost:3333/geo', {
        //     data: {
        //         // Your data here
        //         latitude: 40.7128,
        //         longitude: -74.0060
        //     }
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => {
        //     console.log('Response:', response.data);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    }
  };

  return (
    <CustomTabs
      justify
      fill
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-5"
      onSelect={handleGetWorkspaceList}
    >
      <Tab eventKey="home" title="Home">
        <FunctionalPanel>
        <InputGroup size="sm" className="mb-3 mt-3" style={{width:'70%', margin:'0 auto'}}>
        <Form.Control
          placeholder="workspace name"
          aria-label="workspace name"
          aria-describedby="basic-addon2"
        />
        <Button variant="warning" id="button-addon2">
          Add
        </Button>
      </InputGroup>
      <Button size="sm" variant="danger" style={{width:'60px', margin:'0 76%'}} >
       Delete
      </Button>
        </FunctionalPanel>
        <CustomizedTable {...fakeData} />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </CustomTabs>
  );
};

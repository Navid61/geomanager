import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CustomizedTable } from '../Table/Table';
import styled from 'styled-components';


const CustomTabs = styled(Tabs)`
width:70vw;


`

const fakeData = {
    id:1,
    name:'test',
    created:new Date()
}

export const GeoNav=()=> {
  return (
    <CustomTabs justify fill
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-5"
    >
      <Tab eventKey="home" title="Home">
        <CustomizedTable {...fakeData}/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </CustomTabs>
  );
}


import { AppContainer, TableContainer } from "./style";
import { Table } from "./components/Table/Table"

import { ThemeProvider } from "styled-components";

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

// fake data

interface fakeDataProp {
  id: number;
  name: string;
  created: Date;
}

const fakeData: fakeDataProp = {
  id: 1,
  name: "canda",
  created: new Date(),
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <TableContainer>
        <Table {...fakeData}/>
        </TableContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

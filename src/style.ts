import styled from "styled-components";




export const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.padding};
  height:${(props) => props.theme.spacing.height};
  width:${(props) => props.theme.spacing.width}
  display:${(props) => props.theme.spacing.display};
  flex-direction: ${(props)=>props.theme.spacing.direction};
  // other styles...
`;


export const TableContainer = styled.div`
display:grid;
margin:0 auto;
width:fit-content;
border:1px solid green;
background-color:#F2F0EB;
grid-template-columns:auto
`

// Base Table Container
export const CustomTable = styled.div<{columns?:number}>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props?.columns || 3}, auto)`}; // Dynamic column count
  gap: 5px;
  justify-content:flex-start;
  width:auto;
`;

// Base Row component using grid
export const CustomTableRow = styled.div`
  display: contents; // Allows cells to span multiple rows/columns if needed
`;

// Common Column Styles
export const CustomTableColumn = styled.div<{justify?: string,width?:string}>`
  padding: 10px;
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  width:${(props)=>props.width || '100%'};
  align-items: center;
  border: 1px solid blue; // Uncomment if you want borders on all columns
`;

// Header Row with different alignment
export const CustomTableHeaderRow = styled(CustomTableRow)`
  ${CustomTableColumn} {
    justify-content: center;
    background-color: lightgray;
    font-weight: bold;
  }
`;

// Footer Row with different alignment
export const CustomTableFooterRow = styled(CustomTableRow)`
  ${CustomTableColumn} {
    justify-content: center;
    background-color: lightgray;
  }
`;

// Body Row with dynamic alignment
export const CustomTableBodyRow = styled(CustomTableRow)`
  ${CustomTableColumn} {
    justify-content: felx-start
  }
`;
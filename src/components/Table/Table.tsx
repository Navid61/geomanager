import {
  CustomTable,
  CustomTableColumn,
  CustomTableHeaderRow,
  CustomTableBodyRow,
  TableContainer,
} from "style";

type TableProps = {
  id: number;
  name: string;
  created: Date;
};

type contentTypeProps = {
  content: string;
};

export const CustomizedTable = ({ id, name, created }: TableProps) => {
  const contentType: contentTypeProps = { content: "center" };
  return (
    <TableContainer>
      <CustomTable columns={3}>
        <CustomTableHeaderRow>
          <CustomTableColumn width="fit-content">ID</CustomTableColumn>
          <CustomTableColumn>Name</CustomTableColumn>
          <CustomTableColumn>Created Date</CustomTableColumn>
        </CustomTableHeaderRow>

        <CustomTableBodyRow>
          <CustomTableColumn justify={contentType.content} width="fit-content">{id}</CustomTableColumn>
          <CustomTableColumn>{name}</CustomTableColumn>
          <CustomTableColumn>{created.toString()}</CustomTableColumn>
        </CustomTableBodyRow>
        <CustomTableBodyRow>
          <CustomTableColumn justify={contentType.content} width="fit-content">{id}</CustomTableColumn>
          <CustomTableColumn>{name}</CustomTableColumn>
          <CustomTableColumn>{created.toString()}</CustomTableColumn>
        </CustomTableBodyRow>
        <CustomTableBodyRow>
          <CustomTableColumn justify={contentType.content} width="fit-content">{id}</CustomTableColumn>
          <CustomTableColumn>{name}</CustomTableColumn>
          <CustomTableColumn>{created.toString()}</CustomTableColumn>
        </CustomTableBodyRow>
      </CustomTable>
    </TableContainer>
  );
};

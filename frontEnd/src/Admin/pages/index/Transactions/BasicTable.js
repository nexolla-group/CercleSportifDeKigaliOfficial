import React, { useMemo } from "react";
import { useTable } from "react-table";
// import transactionFakeData from "./transactionFakeData.json";
// import { COLUMNS } from "./columns";

const BasicTable = () => {
  //   const columns = useMemo(() => COLUMNS, []);
  //   const data = useMemo(() => transactionFakeData, []);
  const data = React.useMemo(
    () => [
      {
        id: 1,
        Playground: "Football",
        "Booked-date": "21/02/2022",
        "Booked Hours": 49,
        Amount: 68,
        "Client Name": "Joel Kwihangana",
        "Client Phone": "5759942164",
        "Client Address": "890 Dexter Drive",
        Expired: true,
      },
      {
        id: 2,
        Playground: "Marie-françoise",
        "Booked-date": "14/08/2022",
        "Booked Hours": 75,
        Amount: 53,
        "Client Name": "clowsely1",
        "Client Phone": "1185366705",
        "Client Address": "1015 Ruskin Junction",
        Expired: false,
      },
      {
        id: 3,
        Playground: "Yáo",
        "Booked-date": "20/04/2022",
        "Booked Hours": 28,
        Amount: 76,
        "Client Name": "rverman2",
        "Client Phone": "2165033723",
        "Client Address": "57505 Sauthoff Street",
        Expired: false,
      },
      {
        id: 4,
        Playground: "Jú",
        "Booked-date": "19/11/2021",
        "Booked Hours": 4,
        Amount: 78,
        "Client Name": "churdis3",
        "Client Phone": "3339773403",
        "Client Address": "805 Red Cloud Road",
        Expired: false,
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      { header: "Id", accessor: "id" },
      { header: "playground name", accessor: "Playground" },
      { header: "Booked-date", accessor: "Booked-date" },
      { header: "Booked Hours", accessor: "Booked Hours" },
      { header: "Amount Paid", accessor: "Amount" },
      { header: "Client Name", accessor: "Client Name" },
      { header: "Client Phone", accessor: "Client Phone" },
      { header: "Client Address", accessor: "Client Address" },
      { header: "Expired", accessor: "Expired" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <h1 className="text-center">Teansactions</h1>
      <table {...getTableProps()} className="table table-hover">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;

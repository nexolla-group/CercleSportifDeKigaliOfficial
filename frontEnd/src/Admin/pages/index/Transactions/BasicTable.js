import React from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";

const BasicTable = () => {
  const data = React.useMemo(() => MOCK_DATA, []);
  const columns = React.useMemo(
    () => [
      { header: "transactionId", accessor: "transactionId" },
      { header: "playGroundId", accessor: "playGroundId" },
      { header: "amount", accessor: "amount" },
      { header: "transactionStatus", accessor: "transactionStatus" },
      { header: "paymentMethod", accessor: "paymentMethod" },
      { header: "firstname", accessor: "firstname" },
      { header: "lastname", accessor: "lastname" },
      { header: "telephoneNumber ", accessor: "telephoneNumber" },
      { header: "email", accessor: "email" },
      { header: "city", accessor: "city" },
      { header: "cretedAt", accessor: "cretedAt" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <div
        style={{ overflowX: "scroll" }}
        className="container-fluid overflow-auto"
      >
        {" "}
        <h1 className="text-center">Transactions</h1>
        <table
          style={{ width: "90%" }}
          {...getTableProps()}
          className="table table-hover"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("header")}
                  </th>
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
      </div>
    </>
  );
};

export default BasicTable;

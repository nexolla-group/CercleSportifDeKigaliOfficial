import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";
import MOCK_DATA from "./MOCK_DATA.json";

const FilteringTable = () => {
  const data = React.useMemo(() => MOCK_DATA, []);
  const columns = React.useMemo(
    () => [
      { header: "firstname", footer: "firstname", accessor: "firstname" },
      { header: "lastname", footer: "lastname", accessor: "lastname" },
      { header: "amount", Footer: "amount", accessor: "amount" },

      {
        header: "payment Method",
        Footer: "payment Method",
        accessor: "paymentMethod",
      },

      {
        header: "telephone Number ",
        Footer: "telephone Number ",
        accessor: "telephoneNumber",
      },
      { header: "email", Footer: "email", accessor: "email" },
      { header: "city", Footer: "city", accessor: "city" },
      { header: "created at", Footer: "cretedAt", accessor: "cretedAt" },
    ],
    []
  );
  const tableInstance = useTable({ columns, data }, useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <>
      <div
        style={{ overflowX: "scroll" }}
        className="container-fluid overflow-auto"
      >
        <h1 className="text-center">Transactions</h1>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table
          style={{ width: "100%" }}
          {...getTableProps()}
          className="table table-hover"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                style={{ backgroundColor: "whitesmoke" }}
                {...headerGroup.getHeaderGroupProps()}
              >
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
          <tfoot>
            {footerGroups.map((group) => (
              <tr
                style={{ backgroundColor: "whitesmoke", fontWeight: "bold" }}
                className="text-black"
                {...group.getFooterGroupProps()}
              >
                {group.headers.map((column) => (
                  <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default FilteringTable;

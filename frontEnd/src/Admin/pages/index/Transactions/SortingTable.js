import React, { useState, useEffect, useRef } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { format } from "date-fns";
import GlobalFilter from "./GlobalFilter";
import axios from "axios";
import { Link } from "react-router-dom";

const SortingTable = ({ token }) => {
  const [getTransactions, setGetTransactions] = useState([]);
  const transactionsAPI =
    "https://cercle-sportif-backend.herokuapp.com/api/transaction";
  const fetchTransations = () => {
    axios
      .get(transactionsAPI)
      .then((res) => {
        console.log(res.data.data);
        setGetTransactions(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTransations();
  }, []);
  const data = React.useMemo(() => getTransactions, [getTransactions]);
  const columns = React.useMemo(
    () => [
      { header: "firstname", Footer: "firstname", accessor: "firstname" },
      { header: "lastname", Footer: "lastname", accessor: "lastname" },
      { header: "amount", Footer: "amount", accessor: "amount" },

      {
        header: "payment Method",
        Footer: "payment Method",
        accessor: "paymentMethod",
      },

      {
        header: "Phone ",
        Footer: "Phone ",
        accessor: "telephoneNumber",
      },
      { header: "email", Footer: "email", accessor: "email" },
      { header: "city", Footer: "city", accessor: "city" },
      {
        header: "created at",
        Footer: "cretedAt",
        accessor: "cretedAt",
        cell: ({ value }) => {
          return format(new Date(value), "dd/mm/yyy");
        },
      },
      {
        header: "transactionStatus",
        Footer: "transactionStatus",
        accessor: "transactionStatus",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const { globalFilter } = state;

  return (
    <>
      <div></div>
      <div
        style={{ overflowX: "scroll" }}
        className="container-fluid overflow-auto"
      >
        <h1 className="text-center">Transactions</h1>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table
          style={{ width: "100%" }}
          {...getTableProps()}
          className="table table-hover table-bordered"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                style={{ backgroundColor: "whitesmoke" }}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
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
        <Link to="PrintReportBlank" target="_blank">
          Print
        </Link>
      </div>
    </>
  );
};

export default SortingTable;

import React, { useMemo } from "react";
import { useTable } from "react-table";
import transactionFakeData from "./transactionFakeData.json";
import COLUMNS from "./columns";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => transactionFakeData, []);
  useTable({});
  return <></>;
};

export default BasicTable;

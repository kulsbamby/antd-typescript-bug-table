import React from "react";
import { Table } from "antd";

const columns2 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "left"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    align: "center"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    align: "right"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

export class Sales extends React.Component<{}, {}> {
  public render() {
    return <Table dataSource={data} columns={columns2} />;
  }
}

export default Sales;

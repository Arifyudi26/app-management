import React from "react";
import DefaultLayout from "@app/components/Layouts/DefaultLayout";
import Breadcrumb from "@app/components/Breadcrumbs/Breadcrumb";
import TableThree from "@app/components/Tables/TableThree";
import { Package } from "@/types/package";
import { Metadata } from "next";

export const metadata: Metadata = {
 title:
   "Users",
 description: "users",
};

const packageData: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
  },
];

const columns = [
  {
    header: "Package",
    accessor: (item: Package) => (
      <div>
        <h5 className="font-medium text-black dark:text-white">{item.name}</h5>
        <p className="text-sm">${item.price}</p>
      </div>
    ),
  },
  {
    header: "Invoice date",
    accessor: (item: Package) => (
      <p className="text-black dark:text-white">{item.invoiceDate}</p>
    ),
  },
  {
    header: "Status",
    accessor: (item: Package) => (
      <p
        className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
          item.status === "Paid"
            ? "bg-success text-success"
            : item.status === "Unpaid"
            ? "bg-danger text-danger"
            : "bg-warning text-warning"
        }`}
      >
        {item.status}
      </p>
    ),
  },
  {
    header: "Actions",
    accessor: () => (
      <div className="flex items-center space-x-3.5">
        <button className="hover:text-primary">View</button>
        <button className="hover:text-primary">Edit</button>
        <button className="hover:text-primary">Delete</button>
      </div>
    ),
  },
];

function page() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <TableThree data={packageData} columns={columns} />
      </div>
    </DefaultLayout>
  );
}

export default page;

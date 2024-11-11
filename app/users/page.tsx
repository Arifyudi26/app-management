import { getUsers } from "../lib/data/getUsers";

import React from "react";
import DefaultLayout from "@app/components/Layouts/DefaultLayout";
import Breadcrumb from "@app/components/Breadcrumbs/Breadcrumb";
import TableThree from "@app/components/Tables/TableThree";
import { PkgUsers } from "@/types/package";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "users",
};

const columns = [
  {
    header: "Name",
    accessor: (item: PkgUsers) => (
      <p className="text-black dark:text-white">{item.name}</p>
    ),
  },
  {
    header: "Email",
    accessor: (item: PkgUsers) => (
      <p className="text-black dark:text-white">{item.email}</p>
    ),
  },
  {
    header: "Role",
    accessor: (item: PkgUsers) => (
      <p className="text-black dark:text-white">{item.role}</p>
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

async function page() {
  const users = await getUsers();

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <TableThree data={users || []} columns={columns} />
      </div>
    </DefaultLayout>
  );
}

export default page;

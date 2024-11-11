import { getProducts } from "../lib/data/getProduct";
import { formatDate } from "../lib/utils";
import { Metadata } from "next";
import DefaultLayout from "@app/components/Layouts/DefaultLayout";
import Breadcrumb from "@app/components/Breadcrumbs/Breadcrumb";
import TableThree from "@app/components/Tables/TableThree";
import { PkgProducts } from "@/types/package";

export const metadata: Metadata = {
  title: "Products",
  description: "products",
};

const columns = [
  {
    header: "Name",
    accessor: (item: PkgProducts) => (
      <p className="text-black dark:text-white">{item.name}</p>
    ),
  },
  {
    header: "Price",
    accessor: (item: PkgProducts) => (
      <p className="text-black dark:text-white">${item.price}</p>
    ),
  },
  {
    header: "Creted At",
    accessor: (item: PkgProducts) => (
      <p className="text-black dark:text-white">
        {formatDate(item.createdAt.toString(), "MMMM d, yyyy")}
      </p>
    ),
  },
  {
    header: "Created By",
    accessor: (item: PkgProducts) => (
      <p className="text-black dark:text-white">{item.user.name}</p>
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
  const products = await getProducts();

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <TableThree data={products || []} columns={columns} />
      </div>
    </DefaultLayout>
  );
}

export default page;

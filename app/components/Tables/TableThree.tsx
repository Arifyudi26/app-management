import React from "react";

type TableColumn<T> = {
  header: string;
  accessor: (item: T) => React.ReactNode;
  className?: string;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  emptyText?: string;
};

const TableThree = <T,>({
  data,
  columns,
  emptyText = "No data available",
}: TableProps<T>) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-4 font-medium text-black dark:text-white ${
                    column.className || ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className={`border-b border-[#eee] px-4 py-5 dark:border-strokedark ${
                          column.className || ""
                        }`}
                      >
                        {column.accessor(item)}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-5 text-center text-gray-500"
                >
                  {emptyText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;

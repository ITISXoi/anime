/* eslint-disable @next/next/no-img-element */
import { BaseColor } from "@/utils/common";

interface Props {
  titleTable: string[];
  dataTable: JSX.Element[];
  leftComponent: JSX.Element;
}

const Table = (props: Props) => {
  const { titleTable, dataTable, leftComponent } = props;
  return (
    <div className="w-full">
      <div
        className="w-full flex flex-row justify-between h-[70px] bg-primary-2 rounded-t-xl px-[30px] py-[20px]"
        style={{ borderBottom: `1px solid ${BaseColor.primary}` }}
      >
        {leftComponent}
        <div className="flex flex-row gap-4">
          <img
            alt="refresh"
            src="/images/refresh-icon.svg"
            width={"20px"}
            className="cursor-pointer active:scale-90 transition-all"
          />
          <p className="bg-primary text-sm py-1 px-2 rounded-lg">View All</p>
        </div>
      </div>
      <table className="table-auto w-full border-collapse bg-primary-2 pb-8 rounded-b-xl">
        <thead
          className="mt-4"
          style={{ borderBottom: `1px solid ${BaseColor.primary}` }}
        >
          <tr>
            {titleTable.map((title, index) => (
              <th
                key={index}
                className="px-8 py-4"
                style={{ borderBottom: `1px solide ${BaseColor.primary}` }}
              >
                <div className="flex w-full justify-start text-gray-light text-xs font-normal">
                  {title.toUpperCase()}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{dataTable.map((item) => item)}</tbody>
      </table>
    </div>
  );
};

export default Table;

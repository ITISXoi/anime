import Table from "@/components/ui/table";
import { dataTable, titleTable } from "@/utils/common";
import RowTableForYou from "./RowTableForYou";

const History = () => {
  const data = dataTable.map((item, index) => (
    <RowTableForYou
      key={index}
      index={index}
      itemRow={item}
      length={dataTable.length}
    />
  ));
  const dataHistory = dataTable.map((item, index) => (
    <RowTableForYou
      key={index}
      index={index}
      itemRow={item}
      length={dataTable.length}
    />
  ));
  return (
    <div className="container mt-10 w-full">
      <div className="flex flex-col xl:flex-row gap-8">
        <Table
          titleTable={titleTable}
          dataTable={data}
          leftComponent={
            <div>
              <p className="text-xl">View All</p>
            </div>
          }
        />
        <Table
          titleTable={titleTable}
          dataTable={dataHistory}
          leftComponent={
            <div>
              <p className="text-xl">Lastest reviews</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default History;

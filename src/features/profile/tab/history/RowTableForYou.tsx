import { BaseColor } from "@/utils/common";
import { StarOutlined } from "@ant-design/icons";

interface Props {
  index: number;
  itemRow: {
    id: number;
    title: string;
    category: string;
    rating: number;
  };
  length: number;
}

const RowTableForYou = (props: Props) => {
  const { index, itemRow, length } = props;
  return (
    <tr className={`${index === length - 1 ? "pb-2" : ""}`}>
      <td
        className={`px-8 py-3 text-gray-light ${
          index === length - 1 ? "pb-[25px]" : ""
        }`}
      >
        {itemRow.id}
      </td>
      <td className={`px-8 py-3 ${index === length - 1 ? "pb-[25px]" : ""}`}>
        <p className="w-fit cursor-pointer change-color-secondary">
          {itemRow.title}
        </p>
      </td>
      <td className={`px-8 py-3 ${index === length - 1 ? "pb-[25px]" : ""}`}>
        {itemRow.category}
      </td>
      <td className={`px-8 py-3 ${index === length - 1 ? "pb-[25px]" : ""}`}>
        <div className="flex flex-row items-center gap-1">
          <StarOutlined style={{ color: BaseColor.secondary }} />
          <div className="flex w-full">{itemRow?.rating?.toFixed(1)}</div>
        </div>
      </td>
    </tr>
  );
};
export default RowTableForYou;

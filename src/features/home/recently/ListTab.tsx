import { BaseColor } from "@/utils/common";

interface Props {
  tabSelect: string;
  listOption: {
    title: string;
    key: string;
    children?: JSX.Element;
  }[];
  handleChangeTab: (_item: string) => void;
  title: string;
}

const ListTab = (props: Props) => {
  const { tabSelect, listOption, handleChangeTab, title } = props;
  return (
    <div
      className="mt-16"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="container">
        <p className="text-2xl md:text-3xl lg:text-4xl">{title}</p>
        <div className="flex flex-row gap-6">
          {listOption.map((item) => (
            <div
              key={item.key}
              className="pt-4 pb-4 border-b-2 cursor-pointer transparent"
              style={{
                color:
                  tabSelect === item.key
                    ? BaseColor.secondary
                    : BaseColor.white,
                borderColor:
                  tabSelect === item.key ? BaseColor.secondary : "transparent",
              }}
              onClick={() => handleChangeTab(item.key)}
            >
              <p className="text-sm">{item.title.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTab;

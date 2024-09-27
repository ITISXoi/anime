interface Props {
  group: any[];
  title: string;
}

const GroupDescription = (props: Props) => {
  const { group, title } = props;
  // const router = useRouter();
  // const handleClick = (item: string) => {
  //   switch (title) {
  //     case "Genre":
  //       router.push(`/catalog?genre=${item}`);
  //       break;
  //     case "Theme":
  //       router.push(`/catalog?theme=${item}`);
  //       break;
  //     case "Demographic":
  //       router.push(`/catalog?demographic=${item}`);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  return (
    <>
      {group?.length ? (
        <p>
          {title}:
          {group?.map((item, index) => (
            <span key={index}>
              <span
                className={`text-secondary cursor-pointer hover:underline ${
                  index === 0 ? "ml-2" : ""
                }`}
                onClick={() => {}}
              >
                {item?.name}
              </span>
              {index < group?.length - 1 && (
                <span className="text-secondary">, </span>
              )}
            </span>
          ))}
        </p>
      ) : null}
    </>
  );
};

export default GroupDescription;

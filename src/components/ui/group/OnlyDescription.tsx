interface Props {
  type: string;
  title: string;
}

const OnlyDescription = (props: Props) => {
  const { type, title } = props;
  return (
    <>
      {type ? (
        <p>
          {title}:
          <span className="text-secondary cursor-pointer hover:underline ml-2">
            {type}
          </span>
        </p>
      ) : null}
    </>
  );
};

export default OnlyDescription;

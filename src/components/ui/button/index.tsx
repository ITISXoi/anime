import { BaseColor } from "@/utils/common";

interface Props {
  title: JSX.Element;
  type: "submit" | "button";
  className?: string;
  height?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const { title, type, className, height, onClick } = props;
  return (
    <div
      style={{
        border: `2px solid ${BaseColor.secondary}`,
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height ? height : "46px",
        cursor: "pointer",
      }}
      className={className}
      onClick={onClick}
    >
      <button className="button-custom" type={type}>
        {title}
      </button>
    </div>
  );
};

export default Button;

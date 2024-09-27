import { LeftOutlined } from "@ant-design/icons";
import { Swiper } from "swiper/types";

interface Props {
  swiper: Swiper | null;
}

export default function ButtonPrevSlide(props: Props) {
  const { swiper } = props;

  return (
    <div className="flex items-center">
      <button
        className={`rounded-lg pt-[6px] pb-[6px] pl-[10px] pr-[10px] bg-primary-2`}
        onClick={() => swiper && swiper.slidePrev()}
      >
        <LeftOutlined className="change-color-secondary" />
      </button>
    </div>
  );
}

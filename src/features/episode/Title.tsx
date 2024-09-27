import { BaseColor } from "@/utils/common";
import { convertNameItem } from "@/utils/funtions";
import { useRouter } from "next/navigation";

const Title = ({
  title,
  type,
  currentEp,
  slug,
}: {
  title: string;
  type: string;
  currentEp: number;
  slug: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="mt-8 md:mt-12 pb-8 md:pb-12"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="container">
        <div className="flex flex-col items-start lg:flex-row justify-between lg:items-center">
          <p
            className={`text-[28px] xs:text-[32px] md:text-[36px] xl:text-[40px] ${
              title ? "" : "animate-pulse bg-primary-2 h-8 rounded-lg"
            }`}
          >
            {title}
          </p>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-gray-light change-color-secondary cursor-pointer"
              onClick={() => router.push("/")}
            >
              Home
            </p>
            {type ? (
              <>
                <div className="dot"></div>
                <p className="cursor-pointer text-gray-light change-color-secondary">
                  {type}
                </p>
              </>
            ) : null}
            {title ? (
              <>
                <div className="dot"></div>
                <p
                  className="cursor-pointer text-gray-light change-color-secondary"
                  onClick={() => router.push(`/${slug}`)}
                >
                  {convertNameItem(title)}
                </p>
              </>
            ) : null}
            {currentEp ? (
              <>
                <div className="dot"></div>
                <p className="cursor-default">{`Episode ${currentEp}`}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;

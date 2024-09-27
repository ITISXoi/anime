"use client";
import { BaseColor } from "@/utils/common";
import { useRouter } from "next/navigation";

const TitleCatalog = () => {
  const router = useRouter();
  return (
    <div
      className="mt-8 md:mt-12 pb-8 md:pb-12"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between container md:items-center">
        <p className="text-[32px] md:text-[40px]">Catalog</p>
        <div className="flex flex-row items-center gap-3">
          <p
            className="text-gray-light change-color-secondary cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </p>
          <div className="dot"></div>
          <p className="cursor-default">Catalog</p>
        </div>
      </div>
    </div>
  );
};

export default TitleCatalog;

"use client";
import { BaseColor } from "@/utils/common";
import { useRouter } from "next/navigation";

const TitleProfile = () => {
  const router = useRouter();
  return (
    <div
      className="mt-10 md:mt-12 pb-10 md:pb-12"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between container md:items-center">
        <p className="text-[32px] md:text-[40px]">My Anisage</p>
        <div className="flex flex-row gap-3 items-center">
          <p
            className="text-[#c0c0c0] change-color-secondary cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </p>
          <div className="dot"></div>
          <p className="cursor-default">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default TitleProfile;

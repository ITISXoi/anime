"use client";
import Button from "@/components/ui/button";
import { BaseColor } from "@/utils/common";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex min-h-[700px] h-full items-center w-full justify-center">
      <div
        style={{
          backgroundColor: BaseColor.primary,
          height: "fit-content",
          maxWidth: "400px",
          width: "95%",
          borderRadius: "10px",
          border: `1px solid ${BaseColor.primary2}`,
          padding: "40px 60px 40px 60px",
        }}
      >
        <div className="flex w-full justify-center mb-[20px]">
          <div className="flex flex-col w-[200px] gap-2 items-center justify-center">
            <p className="w-full title-not-found text-center">404</p>
            <p className="w-full text-md text-center">
              {"The page you are looking for not available!"}
            </p>
          </div>
        </div>
        <Button
          title={<>Go back</>}
          type={"button"}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}

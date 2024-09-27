"use client";
import { useRouter } from "next/navigation";
import Disclaimer from "./list/disclaimer";
import GoverningLaw from "./list/governing-law";
import Limitations from "./list/limitations";
import Links from "./list/links";
import RevisionsandErrata from "./list/revisions-and-errata";
import SiteTerms from "./list/site-terms";
import Terms from "./list/terms";
import UseLicense from "./list/use-license";
import YourPrivacy from "./list/your-privacy";

const PrivacyPolicy = () => {
  const router = useRouter();
  return (
    <div className="container mt-8 md:mt-12">
      <div className="flex flex-row items-center gap-3 mb-5">
        <p
          className="text-gray-light change-color-secondary cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </p>
        <div className="dot"></div>
        <p className="cursor-default">Terms and Conditions</p>
      </div>
      <p className="text-3xl md:text-4xl xl:text-[42px] font-semibold mb-3">
        AniSage Website Terms and Conditions of Use
      </p>
      <Terms />
      <UseLicense />
      <Disclaimer />
      <Limitations />
      <RevisionsandErrata />
      <Links />
      <SiteTerms />
      <YourPrivacy />
      <GoverningLaw />
    </div>
  );
};

export default PrivacyPolicy;

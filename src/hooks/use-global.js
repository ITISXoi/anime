import { useMediaQuery } from "react-responsive";

const useGlobal = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1199px)" });
  const isSmallTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  return { isDesktop, isTablet, isSmallTablet, isMobile };
};
export default useGlobal;

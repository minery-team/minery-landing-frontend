import { aosDefaultConfig } from "@/constants/aos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useAOS = () => {
  useEffect(() => {
    AOS.init(aosDefaultConfig);
  }, []);

  return null;
};
export default useAOS;

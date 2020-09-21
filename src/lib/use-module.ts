import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mainModules } from "../constants/modules";

export const useModule = () => {
  const location = useLocation();
  const [moduleName, setModuleName] = useState("");
  
  useEffect(() => {
    const getModuleName = mainModules.find((module) => module.url === location.pathname)?.name;
    if (getModuleName) {
      setModuleName(getModuleName);
    } else {
      setModuleName("Not Found");
    }
  }, [location]);

  return { moduleName };
};

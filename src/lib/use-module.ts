import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mainModules } from "../constants/modules";
import { ModuleObject } from "../global-props";

export const useModule = () => {
  const location = useLocation();
  const [module, setModule] = useState<ModuleObject>();

  useEffect(() => {
    const getModuleName = mainModules.find((module) => module.url === location.pathname);
    if (getModuleName) {
      setModule(getModuleName);
    }
  }, [location]);

  return { module };
};

import { ModuleObject } from "../global-props";
import HomePage from "../pages/home-page";
import PortfolioPage from "../pages/portfolio-page";

export const mainModules: ModuleObject[] = [
  {
    name: "About",
    url: "/",
    component: HomePage,
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    component: PortfolioPage,
  },
];

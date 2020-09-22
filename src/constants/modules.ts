import { ModuleObject } from "../global-props";
import HomePage from "../pages/home-page";
import PortfolioAddPage from "../pages/portfolio-add-page";
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
    haveAdd: true,
    children: [
      {
        name: "Add New Portfolio",
        url: "/portfolio/add",
        component: PortfolioAddPage,
      },
      {
        name: "Portfolio Details",
        url: "/portfolio/details/:id",
        component: PortfolioAddPage,
      },
    ],
  },
];

const combineModules = () => {
  let childModule: ModuleObject[] = [];
  mainModules.forEach((mod) => {
    if (mod.children) {
      return mod.children.map((child) => (childModule = [...childModule, child]));
    }
  });

  return [...mainModules, ...childModule];
};

export const combinedModules = combineModules();

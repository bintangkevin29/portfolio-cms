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
    haveAdd: true,
    children: [
      {
        name: "Add New Portfolio",
        url: "/portfolio/add",
        component: PortfolioPage,
        haveAdd: true,
      },
    ],
  },
];

export const combinedModules = () => {
  let childModule: ModuleObject[] = [];
  const moduleChildren = mainModules.map((mod) => {
    if (mod.children) {
      return mod.children.map((child) => (childModule = [...childModule, child]));
    }
  });

  return [...mainModules, ...childModule];
};

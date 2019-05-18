import Home from "./pages/home";
import About from "./pages/about";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  }
];

export default routes;

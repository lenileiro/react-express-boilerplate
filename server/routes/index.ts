import { Router } from "express";
import homeRoute from "./home";
import aboutRoute from "./about";

const route = Router();

route.use("/", homeRoute);
route.use("/about", aboutRoute);

export default route;

import * as express from "express";
import UserController from "./controller/UserController";

const routes = express.Router();

routes.get("/", UserController.index);
routes.get("/:id", UserController.show);
routes.post("/", UserController.create);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.destroy);

export default routes;

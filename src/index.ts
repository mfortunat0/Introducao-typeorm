import * as express from "express";
import routes from "./routes";
import { createConnection } from "typeorm";
const app = express();

createConnection().then((connection) => {
  app.use(express.json());
  app.use(routes);
});

app.listen(4000, () => {
  console.log("Iniciado na porta 4000");
});

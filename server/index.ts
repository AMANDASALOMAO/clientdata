import express from "express";
import cors from "cors";
import { json } from "body-parser";
import * as userController from "./controllers/UserController";
import * as routerController from "./controllers/RouterController";

const app = express();

app.use(json());
app.use(cors());

app.post("/register", userController.registerUser);
app.put("/edit", userController.editUser);
app.post("/search", userController.searchUser);
app.get("/getData", userController.getUsers);
app.delete("/delete/:id", userController.deleteUser);

app.post("/registerRouter", routerController.registerRouter);
app.put("/editRouter", routerController.editRouter);
app.post("/searchRouter", routerController.searchRouter);
app.get("/getRouter", routerController.getRouters);
app.delete("/deleteRouter/:routerid", routerController.deleteRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

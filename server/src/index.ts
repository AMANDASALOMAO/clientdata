import express from "express";
import cors from "cors";
import { json } from "express";
import * as userController from "../controllers/UserController";
import * as routerController from "../controllers/RouterController";

const app = express();

app.use(json());
app.use(cors());

app.post("/registerUser", userController.registerUser);
app.put("/editUser", userController.editUser);          
app.post("/searchUser", userController.searchUser);    
app.get("/getUsers", userController.getUsers);          
app.delete("/deleteUser/:id", userController.deleteUser);

app.post("/registerRouter", routerController.registerRouter);
app.put("/editRouter", routerController.editRouter);
app.post("/searchRouter", routerController.searchRouter);
app.get("/getRouters", routerController.getRouters);
app.delete("/deleteRouter/:routerid", routerController.deleteRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

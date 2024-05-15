import { Request, Response } from "express";
import * as userService from "../services/UserService";

export const registerUser = (req: Request, res: Response) => {
  userService.registerUser(req, res);
};

export const editUser = (req: Request, res: Response) => {
  userService.editUser(req, res);
};

export const searchUser = (req: Request, res: Response) => {
  userService.searchUser(req, res);
};

export const getUsers = (req: Request, res: Response) => {
  userService.getUsers(req, res);
};

export const deleteUser = (req: Request, res: Response) => {
  userService.deleteUser(req, res);
};

import { Request, Response } from "express";
import * as routerService from "../services/RouterService";

export const registerRouter = (req: Request, res: Response) => {
  routerService.registerRouter(req, res);
};

export const editRouter = (req: Request, res: Response) => {
  routerService.editRouter(req, res);
};

export const searchRouter = (req: Request, res: Response) => {
  routerService.searchRouter(req, res);
};

export const getRouters = (req: Request, res: Response) => {
  routerService.getRouters(req, res);
};

export const deleteRouter = (req: Request, res: Response) => {
  routerService.deleteRouter(req, res);
};

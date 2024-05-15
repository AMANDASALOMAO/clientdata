import { Request, Response } from "express";
import db from "../repositories/RouterRepository";

export const registerRouter = (req: Request, res: Response) => {
  const {ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;

  db.createRouter([ip, ipv6, model, brand, routerid, client, contractrouter], (err: Error | null, result: any) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao registrar roteador.");
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const editRouter = (req: Request, res: Response) => {
  const {ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;

  db.updateRouter([ip, ipv6, model, brand, client, contractrouter, routerid], (err: Error | null, result: any) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao editar roteador.");
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const searchRouter = (req: Request, res: Response) => {
  const { ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;

  db.searchRouter([ip, ipv6, model, brand, routerid, client, contractrouter], (err: Error | null, result: any) => {
    if (err) res.send(err);
    res.send(result);
    console.log(result);
  });
};

export const getRouters = (req: Request, res: Response) => {
  db.getRouters((err: Error | null, result: any) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const deleteRouter = (req: Request, res: Response) => {
  const { routerid } = req.params;
  db.deleteRouter(routerid, (err: Error | null, result: any) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

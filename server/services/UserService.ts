import { Request, Response } from "express";
import db from "../repositories/UserRepository";

export const registerUser = (req: Request, res: Response) => {
  const { id, user, email, address, birth, document, date, contract } = req.body;

  db.createUser([id, user, email, address, birth, document, date, contract], (err: Error | null, result: any) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao registrar usuário.");
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const editUser = (req: Request, res: Response) => {
  const { id, user, email, address, birth, document, date, contract } = req.body;

  db.updateUser([user, email, address, birth, document, date, contract, id], (err: Error | null, result: any) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao editar usuário.");
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const searchUser = (req: Request, res: Response) => {
  const { id, user, email, address, birth, document, date, contract } = req.body;

  db.searchUser([user, email, address, birth, document, date, contract, id], (err: Error | null, result: any) => {
    if (err) res.send(err);
    res.send(result);
    console.log(result);
  });
};

export const getUsers = (req: Request, res: Response) => {
  db.getUsers((err: Error | null, result: any) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  db.deleteUser(id, (err: Error | null, result: any) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

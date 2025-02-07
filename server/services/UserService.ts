import { Request, Response } from "express";
import db from "../repositories/UserRepository";

export const registerUser = (req: Request, res: Response) => {
  const { id, user, email, address, birth, document, date, contract } = req.body;

  db.createUser([id, user, email, address, birth, document, date, contract], (err: Error | null, result: any) => {
    if (err) {
      console.error("Erro ao registrar usuário:", err); 
      return res.status(500).json({ error: "Erro ao registrar usuário", details: err.message });
    } else{
    res.status(201).json(result);}
  });
};

export const editUser = (req: Request, res: Response) => {
  const { id, user, email, address, birth, document, date, contract } = req.body;

  db.updateUser([user, email, address, birth, document, date, contract, id], (err: Error | null, result: any) => {
    if (err) {
      console.error("Erro ao editar usuário:",err);
      res.status(500).send({ error: "Erro ao editar usuário.", details: err.message });
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
      console.log("Erro ao listar usuários:",err);
      res.status(500).send({ error: "Erro ao listar usuários.", details: err.message });
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
      console.log("Erro ao deletar usuários:",err);
      res.status(500).send({ error: "Erro ao deletar usuário.", details: err.message });
    } else {
      res.send(result);
    }
  });
};

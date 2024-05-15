import { createPool, Pool } from "mysql";

const db: Pool = createPool({
  host: "localhost",
  user: "root",
  password: "andrade123",
  database: "dbclients",
  port: 3306,
});

const userRepository = {
  createUser: (params: any[], callback: any) => {
    let mysql = "INSERT INTO users (id, user, email, address, birth, document, date, contract) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(mysql, params, callback);
  },
  updateUser: (params: any[], callback: any) => {
    let mysql = "UPDATE users SET user = ?, email = ?, address = ?, birth = ?, document = ?, date = ?, contract = ? WHERE id = ?";
    db.query(mysql, params, callback);
  },
  searchUser: (params: any[], callback: any) => {
    let mysql =
      "SELECT * from users WHERE id = ? AND user = ? AND email = ? AND address = ? AND birth = ? AND document = ? AND date = ? AND contract = ?";
    db.query(mysql, params, callback);
  },
  getUsers: (callback: any) => {
    let mysql = "SELECT * FROM dbclients.users";
    db.query(mysql, callback);
  },
  deleteUser: (id: string, callback: any) => {
    let mysql = "DELETE FROM users WHERE id = ?";
    db.query(mysql, id, callback);
  },
};

export default userRepository;

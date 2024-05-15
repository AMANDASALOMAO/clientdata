import { createPool, Pool } from "mysql";

const db: Pool = createPool({
  host: "localhost",
  user: "root",
  password: "andrade123",
  database: "dbclients",
  port: 3306,
});

const routerRepository = {
    createRouter: (params: any[], callback: any) => {
    let mysql = "INSERT INTO router (ip, ipv6, model, brand, routerid, client, contractrouter) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(mysql, params, callback);
  },
  updateRouter: (params: any[], callback: any) => {
    let mysql = "UPDATE router SET ip = ?, ipv6 = ?, model = ?, brand = ?, client = ?, contractrouter = ? WHERE routerid = ?";
    db.query(mysql, params, callback);
  },
  searchRouter: (params: any[], callback: any) => {
    let mysql =
      "SELECT * from router WHERE routerid = ? AND client = ? AND ip = ? AND ipv6 = ? AND model = ? AND brand = ? AND contractrouter = ?";
    db.query(mysql, params, callback);
  },
  getRouters: (callback: any) => {
    let mysql = "SELECT * FROM dbclients.router";
    db.query(mysql, callback);
  },
  deleteRouter: (routerid: string, callback: any) => {
    let mysql = "DELETE FROM router WHERE routerid = ?";
    db.query(mysql, routerid, callback);
  },
};

export default routerRepository;

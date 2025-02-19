import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={styles.container}>
      <button className={styles.menuButton} onClick={onClose}>
        Menu
      </button>

      <div
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      >
        <ul className={styles.menu}>
          <li>
            <Link to="/" onClick={onClose}>
              Clientes
            </Link>
          </li>
          <li>
            <Link to="/routerList" onClick={onClose}>
              Roteadores
            </Link>
          </li>
          <li>
            <Link to="getUsers" onClick={onClose}>
              Cadastrar cliente
            </Link>
          </li>
          <li>
            <Link to="/routerData" onClick={onClose}>
              Cadastrar roteador
            </Link>
          </li>
        </ul>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
      </div>

      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
    </div>
  );
};

export default Sidebar;

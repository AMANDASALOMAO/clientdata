import React, { useState } from 'react';
import styles from './Modal.module.scss';
import Axios from 'axios';

interface RouterModalProps {
  isOpen: boolean;
  onClose: () => void;
  ip: number;
  ipv6: number;
  model: string;
  brand: string;
  routerid: number;
  client: string;
  contractrouter: string;
  setListCard: React.Dispatch<React.SetStateAction<any[]>>;
  listCard: any[];
}

const RouterModal: React.FC<RouterModalProps> = ({
  isOpen,
  onClose,
  ip,
  ipv6,
  model,
  brand,
  routerid,
  client,
  contractrouter,
  setListCard,
  listCard,
}) => {
  const [editValues, setEditValues] = useState({
    ip,
    ipv6,
    model,
    brand,
    routerid,
    client,
    contractrouter,
  });

  const handleClose = () => onClose();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEdit = () => {
    Axios.put('http://localhost:5000/editRouter', editValues).then(() => {
      setListCard(
        listCard.map((value: any) =>
          value.routerid === editValues.routerid ? editValues : value
        )
      );
    });
    handleClose();
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:5000/deleteRouter/${editValues.routerid}`).then(() => {
      setListCard(listCard.filter((value: any) => value.routerid !== editValues.routerid));
    });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Dados do Roteador</h2>
          <button onClick={onClose}>Fechar</button>
        </div>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Nome:</label>
                <input name='client' value={editValues.client} type='text' onChange={handleChangeValues} />
              </div>
              <div className={styles.formGroup}>
                <label>Router ID:</label>
                <input name='routerid' value={editValues.routerid} type='number' readOnly />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>IP:</label>
                <input name='ip' value={editValues.ip} type='text' onChange={handleChangeValues} />
              </div>
              <div className={styles.formGroup}>
                <label>IPV6:</label>
                <input name='ipv6' value={editValues.ipv6} type='text' onChange={handleChangeValues} />
              </div>
            </div>
              <div className={styles.formGroup}>
                <label>Modelo:</label>
                <input name='model' value={editValues.model} type='text' onChange={handleChangeValues} />
              </div>
              <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Marca:</label>
                <input name='brand' value={editValues.brand} type='text' onChange={handleChangeValues} />
              </div>
            <div className={styles.formGroup}>
              <label>Status do Contrato:</label>
              <input name='contractrouter' value={editValues.contractrouter} type='text' onChange={handleChangeValues} />
            </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={handleEdit}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default RouterModal;

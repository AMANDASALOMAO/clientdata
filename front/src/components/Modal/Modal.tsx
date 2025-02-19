import React, { useState } from 'react';
import styles from './Modal.module.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id?: number;
  user?: string;
  email?: string;
  address?: string;
  birth?: string;
  document?: string;
  date?: string;
  contract?: string;
  setListCard: React.Dispatch<React.SetStateAction<any[]>>;
  listCard: any[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  id,
  user,
  email,
  address,
  birth,
  document,
  date,
  contract,
  setListCard,
  listCard,
}) => {
  const [editValues, setEditValues] = useState({
    id,
    user,
    email,
    address,
    birth,
    document,
    date,
    contract,
  });

  const handleClose = () => onClose();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEdit = () => {
    axios
      .put('http://localhost:5000/edit', editValues)
      .then(() => {
        setListCard(
          listCard.map((value: any) =>
            value.id === editValues.id ? editValues : value
          )
        );
        toast.success('Usuário editado com sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao editar usuário.');
      });
    handleClose();
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/delete/${editValues.id}`)
      .then(() => {
        setListCard(listCard.filter((value: any) => value.id !== editValues.id));
        toast.success('Usuário deletado com sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao deletar usuário.');
      });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Dados do Cliente</h2>
          <button onClick={onClose}>Fechar</button>
        </div>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>ID:</label>
                <input name='id' value={editValues.id} type='number' readOnly />
              </div>
              <div className={styles.formGroup}>
                <label>Nome:</label>
                <input name='user' value={editValues.user} type='text' onChange={handleChangeValues} />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email:</label>
                <input name='email' value={editValues.email} type='text' onChange={handleChangeValues} />
              </div>
              <div className={styles.formGroup}>
                <label>Endereço:</label>
                <input name='address' value={editValues.address} type='text' onChange={handleChangeValues} />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Data de Nascimento:</label>
                <input name='birth' value={editValues.birth} type='date' onChange={handleChangeValues} />
              </div>
              <div className={styles.formGroup}>
                <label>CPF ou CNPJ:</label>
                <input name='document' value={editValues.document} type='text' onChange={handleChangeValues} />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Data de Cadastro:</label>
                <input name='date' value={editValues.date} type='date' onChange={handleChangeValues} />
              </div>
              <div className={styles.formGroup}>
                <label>Status do Contrato:</label>
                <input name='contract' value={editValues.contract} type='text' onChange={handleChangeValues} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={handleEdit}>Salvar</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Modal;

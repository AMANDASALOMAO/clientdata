import React, { useState } from 'react'
import styles from './Modal.module.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  id?: number
  user?: string
  email?: string
  address?: string
  birth?: string
  document?: string
  date?: string
  contract?: string
  setListCard: React.Dispatch<React.SetStateAction<any[]>>
  listCard: any[]
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, onClose, id, user, email, address, birth, document, date, contract, setListCard, listCard
}) => {
  const [editValues, setEditValues] = useState({
    id,
    user,
    email,
    address,
    birth,
    document,
    date,
    contract
  })
  const handleClose = () => {
    onClose()
  }
  const handleChangeValues = (values: React.ChangeEvent<HTMLInputElement>) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.name]: values.target.value,
    }))
  }
  const handleEdit = () => {
    axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      user: editValues.user,
      email: editValues.email,
      address: editValues.address,
      birth: editValues.birth,
      document: editValues.document,
      date: editValues.date,
      contract: editValues.contract
    }).then(() => {
      setListCard(
        listCard.map((value: any) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                user: editValues.user,
                email: editValues.email,
                address: editValues.address,
                birth: editValues.birth,
                document: editValues.document,
                date: editValues.date,
                contract: editValues.contract
        
              }
            : value
        })
      )
      toast.success('Usuário editado com sucesso!')
    })
    .catch((error) => {
      toast.error('Erro ao editar usuário.')
    })
    handleClose()
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      setListCard(
        listCard.filter((value: any) => {
          return value.id !== editValues.id
        })
      )
      toast.success('Usuário deletado com sucesso!')
    })
    .catch((error) => {
      toast.error('Erro ao deletar usuário.')
    })
    handleClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Dados do cliente</h2>
          <button onClick={onClose}>Fechar</button>
        </div>
        <div className={styles.content}>
          <label>
            ID: 
            <input
              name='id'
              defaultValue={id}
              type='number'
              readOnly
              />
              </label>
            <label>
            Nome:
            <input
              name='user'
              defaultValue={user}
              type="text"
              onChange={handleChangeValues}
              />
              </label>
              <label>
              Email:
              <input
              name='email'
              defaultValue={email}
              type="text"
              onChange={handleChangeValues}
            />
            </label>
            <label>
            Endereço: 
            <input
              name='address'
              defaultValue={address}
              type='text'
              onChange={handleChangeValues}
              />
              </label>
            <label>
            Data de nascimento:
            <input
              name='birth'
              defaultValue={birth}
              type="date"
              onChange={handleChangeValues}
              />
              </label>
              <label>
              CPF ou CNPJ:
              <input
              name='document'
              defaultValue={document}
              type="text"
              onChange={handleChangeValues}
            />
            </label>
            <label>
              Data de cadastro:
              <input
              name='date'
              defaultValue={date}
              type="date"
              onChange={handleChangeValues}
            />
            </label>
            <label>
              Status do contrato
              <input
              name='contract'
              defaultValue={contract}
              type="text"
              onChange={handleChangeValues}
            />
            </label>
        </div>
        <div className={styles.footer}>
        <button onClick={handleDelete}> Excluir </button>
        <button onClick={handleEdit}> Salvar </button>
        </div>
              <ToastContainer />
      </div>
    </div>
  )
}
export default Modal

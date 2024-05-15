import React, { useState } from 'react'
import styles from './RouterModal.module.scss'
import Axios from 'axios'
interface RouterModalProps {
  isOpen: boolean
  onClose: () => void
  ip: number
  ipv6: number
  model: string
  brand: string
  routerid: number
  client: string
  contractrouter: string
  setListCard: React.Dispatch<React.SetStateAction<any[]>>
  listCard: any[]
}

const RouterModal: React.FC<RouterModalProps> = ({ 
  isOpen, onClose, ip, ipv6, model, brand, routerid, client, contractrouter, setListCard, listCard
}) => {
  const [editValues, setEditValues] = useState({
    ip,
    ipv6,
    model,
    brand,
    routerid,
    client,
    contractrouter
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
    Axios.put("http://localhost:3001/editRouter", {
      routerid: editValues.routerid,
      ip: editValues.ip,
      ipv6: editValues.ipv6,
      model: editValues.model,
      brand: editValues.brand,
      client: editValues.client,
      contractrouter: editValues.contractrouter
    }).then(() => {
      setListCard(
        listCard.map((value: any) => {
          return value.routerid === editValues.routerid
            ? {
                routerid: editValues.routerid,
                ip: editValues.ip,
                ipv6: editValues.ipv6,
                model: editValues.model,
                brand: editValues.brand,
                client: editValues.client,
                contractrouter: editValues.contractrouter
        
              }
            : value
        })
      )
    })
    handleClose()
  }

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/deleteRouter/${editValues.routerid}`).then(() => {
      setListCard(
        listCard.filter((value: any) => {
          return value.routerid !== editValues.routerid
        })
      )
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
          <h2>Dados do roteador</h2>
          <button onClick={onClose}>Fechar</button>
        </div>
        <div className={styles.content}>
          <label>
              Nome:
              <input
              name='client'
              defaultValue={client}
              type="text"
              onChange={handleChangeValues}
            />
            </label>
          <label>
            routerid: 
            <input
              name='routerid'
              defaultValue={routerid}
              type='number'
              readOnly
              />
              </label>
            <label>
            IP:
            <input
              name='ip'
              defaultValue={ip}
              type="number"
              onChange={handleChangeValues}
              />
              </label>
              <label>
              IPV6:
              <input
              name='ipv6'
              defaultValue={ipv6}
              type="number"
              onChange={handleChangeValues}
            />
            </label>
            <label>
            Modelo: 
            <input
              name='model'
              defaultValue={model}
              type='text'
              onChange={handleChangeValues}
              />
              </label>
            <label>
            Marca:
            <input
              name='brand'
              defaultValue={brand}
              type="text"
              onChange={handleChangeValues}
              />
              </label>
            <label>
              Status do contrato
              <input
              name='contractrouter'
              defaultValue={contractrouter}
              type="text"
              onChange={handleChangeValues}
            />
            </label>
        </div>
        <div className={styles.footer}>
        <button onClick={handleDelete}> Excluir </button>
        <button onClick={handleEdit}> Salvar </button>
        </div>
      </div>
    </div>
  )
}
export default RouterModal

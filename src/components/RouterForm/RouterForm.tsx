import React, { useState } from 'react'
import styles from './RouterForm.module.scss'
import Axios from 'axios'
import Select from '../Select/Select'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

interface RouterDataProps {
    clients: { value: string; label: string }[]
}

const RouterData = ({ clients }: RouterDataProps) => {
    const [values, setValues] = useState<{ [key: string]: any }>({})
    const [list, setList] = useState<any[]>([])

    const handleClick = () => {
        console.log(values)
        Axios.post("http://localhost:3001/registerRouter", { ...values })
        .then((response) => {
          toast.success('Roteador registrado com sucesso!')
          Axios.post("http://localhost:3001/searchRouter", { ...values })
            .then((searchResponse) => {
              if (searchResponse.data && searchResponse.data.length > 0 && searchResponse.data[0].id) {
                setList([
                  ...list,
                  {
                    routerid: response.data[0].routerid,
                    ip: values.ip,
                    ipv6: values.ipv6,
                    model: values.model,
                    brand: values.brand,
                    client: values.client,
                    contractrouter: values.contractrouter
                  }
                ])
              }
              window.location.reload()
            })
            .catch((error) => {
              toast.error('Erro ao buscar roteador.')
              console.error(error)
            })
        })
        .catch((error) => {
          toast.error('Erro ao registrar roteador.')
          console.error("Erro ao registrar roteador:", error)
        })
      }
    const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prevValue: { [key: string]: any }) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleSelectChange = (name: string, value: string) => {
      setValues((prevValue: { [key: string]: any }) => ({
          ...prevValue,
          [name]: value,
      }))
  }
  
  
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Insira os dados do roteador</h1>
                <input
                    name='routerid'
                    placeholder='ID'
                    type='number'
                    onChange={handleChange}
                />
                <input
                    name='ip'
                    placeholder='Endereço IP'
                    type='number'
                    onChange={handleChange}
                />
                <input
                    name='ipv6'
                    placeholder='Endereço IPV6'
                    type='text'
                    onChange={handleChange}
                />
                <input
                    name='model'
                    placeholder='Modelo'
                    type='text'
                    onChange={handleChange}
                />
                <input
                    name='brand'
                    placeholder='Marca'
                    type='text'
                    onChange={handleChange}
                />
                 <Select
                    name='client'
                    label='Cliente'
                    options={clients}
                    onChange={(value) => handleSelectChange('client', value)}
                />
                <Select
                name='contractrouter'
                label='Status do contrato'
                options={[
                  { value: 'ativo', label: 'Ativo' },
                  { value: 'inativo', label: 'Inativo' }
                ]}
                onChange={(value) => handleSelectChange('contractrouter', value)}
            />

                <button onClick={handleClick}>Cadastrar</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default RouterData

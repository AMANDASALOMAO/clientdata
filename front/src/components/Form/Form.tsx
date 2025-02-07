import React, { useState } from 'react'
import styles from './Form.module.scss'
import Axios from 'axios'

const Form = () => {
  const [values, setValues] = useState<{ [key: string]: any }>({})
  const [list, setList] = useState<any[]>([])

  const handleClick = () => {
    console.log('Dados enviados:', values);
    Axios.post("http://localhost:5000/register", { ...values })
      .then((response) => {
        console.log('Resposta de registro:', response);
        Axios.post("http://localhost:5000/search", { ...values })
          .then((searchResponse) => {
            console.log('Resposta de busca:', searchResponse);
            if (searchResponse.data && searchResponse.data.length > 0 && searchResponse.data[0].id) {
              setList([
                ...list,
                {
                  id: searchResponse.data[0].id,
                  user: values.user,
                  email: values.email,
                  address: values.address,
                  birth: values.birth,
                  document: values.document,
                  date: values.date,
                  contract: values.contract
                }
              ]);
            }
            window.location.reload();
          })
          .catch((error) => {
            console.error("Erro ao buscar usuário:", error);
          });
      })
      .catch((error) => {
        console.error("Erro ao registrar usuário:", error);
      });
  };
  
  const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValue: { [key: string]: any }) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.form}>
            <h1>Insira os dados do cliente</h1>
      <input
        name='id'
        placeholder='ID'
        type='number'
        onChange={handleChange}
      />
      <input
        name='user'
        placeholder='Nome'
        type='text'
        onChange={handleChange}
      />
      <input
        name='email'
        placeholder='E-mail'
        type='text'
        onChange={handleChange}
      />
      <input
        name='address'
        placeholder='Endereço'
        type='text'
        onChange={handleChange}
      />
      <label>Data de nascimento
      <input
        name='birth'
        placeholder='Data de nascimento'
        onChange={handleChange}
        type='date'
      /></label>
      <input
        name='document'
        placeholder='CPF ou CNPJ'
        onChange={handleChange}
        type='number'
      />
      <label>Data de cadastro
      <input
        name='date'
        placeholder='Data de cadastro'
        onChange={handleChange}
        type='date'
      /></label>
       <input
        name='contract'
        placeholder='Status do contrato'
        onChange={handleChange}
        type='text'
      />
      
      <button onClick={handleClick}>Cadastrar</button>
      </div>
    </div>
  )
}

export default Form
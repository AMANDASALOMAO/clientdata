import React, { useEffect, useState } from 'react'
import styles from './List.module.scss'
import ListItem from './ListItem/ListItem'
import axios, { AxiosResponse } from "axios";

function List() {
  const [list, setList] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/getUsers").then((response: AxiosResponse<any>) => {
      setList(response.data);
      console.log(list);
    });
  }, [list]);

  return (
    <div className={styles.container}>
       {list.length === 0 ? (
        <p className={styles.noDataMessage}>Nenhum dado cadastrado</p> 
      ) : (
      list.map((val) => (
        <div key={val.id} className={styles.item}>
          <ListItem
            list={list}
            setList={setList}
            user={val.user}
            id={val.id}
            email={val.email}
            address={val.address}
            birth={val.birth}
            document={val.document}
            date={val.date}
            contract={val.contract}
          />
        </div>
       ))
      )}
    </div>
  )
}

export default List

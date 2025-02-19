import React, { useEffect, useState } from 'react'
import styles from './RouterList.module.scss'
import RouterItem from './RouterItem/RouterItem'
import axios, { AxiosResponse } from "axios";

function RouterList() {
  const [router, setRouter] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/getRouters").then((response: AxiosResponse<any>) => {
      setRouter(response.data);
      console.log(router);
    });
  }, [router]);

  return (
    <div className={styles.container}>
       {router.length === 0 ? (
        <p className={styles.noDataMessage}>Nenhum dado cadastrado</p> 
      ) : (
      router.map((val) => (
        <div key={val.routerid} className={styles.item}>
          <RouterItem
            RouterItem={router}
            setRouterItem={setRouter}
            ip={val.ip}
            ipv6={val.ipv6}
            model={val.model}
            brand={val.brand}
            routerid={val.routerid}
            client={val.client}
            contractrouter={val.contractrouter}
          />
        </div>
      ))
    )}
    </div>
  )
}

export default RouterList

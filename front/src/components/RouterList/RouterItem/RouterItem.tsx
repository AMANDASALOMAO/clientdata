import React, { Dispatch, SetStateAction } from 'react'
import styles from './RouterItem.module.scss'
import RouterModal from '../../Modal/RouterModal'

interface RouterItemProps {
    RouterItem?: string[]
    setRouterItem?: Dispatch<SetStateAction<string[]>>
    ip: number
    ipv6: number
    model: string
    brand: string
    routerid: number
    client: string
    contractrouter: string
}
function RouterItem({RouterItem, ip, ipv6, model, brand, routerid, client, contractrouter, setRouterItem}: RouterItemProps) {
    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

  return (
    <div className={styles.RouterItemContent}>
       <RouterModal
                isOpen={open}
                onClose={handleCloseModal}
                setListCard={setRouterItem as Dispatch<SetStateAction<string[]>>}
                ip={ip}
                ipv6={ipv6}
                model={model}
                brand={brand}
                routerid={routerid}
                client={client}
                contractrouter={contractrouter}
                listCard={RouterItem as string[] }
            />
            <h1>{client}</h1>
            <p>{model}</p>
            <p>{routerid}</p>
            <p>{ipv6}</p>
            <button onClick={handleOpenModal}>Editar</button>

    </div>
  )
}

export default RouterItem

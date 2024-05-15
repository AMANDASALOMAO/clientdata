import React, { Dispatch, SetStateAction } from 'react'
import styles from './ListItem.module.scss'
import Modal from '../../Modal/Modal'

interface ListItemProps {
    list?: string[]
    setList?: Dispatch<SetStateAction<string[]>>
    id?: number
    user?: string
    email?: string
    address?: string
    birth?: string
    document?: string
    date?: string
    contract?: string
}
function ListItem({list, id, user, email, address, birth, document, date, contract, setList}: ListItemProps) {
    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

  return (
    <div className={styles.listContent}>
       <Modal
                isOpen={open}
                onClose={handleCloseModal}
                setListCard={setList as Dispatch<SetStateAction<string[]>>}
                id={id}
                user={user}
                email={email}
                address={address}
                birth={birth}
                document={document}
                date={date}
                contract={contract}
                listCard={list as string[] }
            />
            <h1>{user}</h1>
            <p>{id}</p>
            <p>{email}</p>
            <button onClick={handleOpenModal}>Editar</button>

    </div>
  )
}

export default ListItem

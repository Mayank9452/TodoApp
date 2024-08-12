import { useState } from "react"
import styles from '../styles/Todo.module.css'
import ListItems from "./ListItems";

function Todo({ addItems, allItems, editItem, deleteItem, toggleCompleteStatus }) {
    const [item, setItem] = useState({})
    const [editNotActive, setEditNotActive] = useState(true)
    const [edit, setEdit] = useState({
        index: null,
        itemContent: null
    })
    const [count, setCount] = useState(1)
    const handleSubmit = (e) => {

        e.preventDefault()
        if (item !== '' && editNotActive)
            addItems(item)
        if (!editNotActive) {
            editItem(edit.index, item)
            setEditNotActive(true)
        }
        setItem({ title: '', completed: false })


    }

    const updateItem = (itemId) => {
        console.log(itemId);

        const itemNeedToUpdate = allItems[itemId]
        console.log(itemNeedToUpdate.title);

        setEdit({ index: itemId, itemContent: itemNeedToUpdate })
        setItem({ title: itemNeedToUpdate.title, completed: itemNeedToUpdate.completed })
        setEditNotActive(false)
    }


    return (
        <>
            <form className={styles.todoForm} onSubmit={handleSubmit}>

                <input type="text" placeholder="Enter your todo...." value={item.title} onChange={(e) => setItem({ title: e.target.value, completed: false })} />
                <button type="submit">
                    <i class="fa-solid fa-plus"></i>
                    {editNotActive ? "Add Item" : "Update"}
                </button>
            </form>
            <ListItems allItems={allItems} updateItem={updateItem} deleteItem={deleteItem} toggleCompleteStatus={toggleCompleteStatus} count={count}></ListItems>
            <button className={styles.loadingMore} onClick={() => setCount(count + 1)}>Load More</button>
        </>
    )
}
export default Todo
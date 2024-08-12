import { useEffect, useState } from "react"
import styles from '../styles/Main.module.css'
import Todo from "./Todo"
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function Main() {
    const [allItem, setAllItem] = useState([])
    const handleAllItems = (newItem) => {
        console.log(newItem)

        const newArrayItems = [...allItem]
        newArrayItems.unshift(newItem)
        console.log(newArrayItems)
        setAllItem(newArrayItems)
        toast.success("Successfully Added.");

    }
    const editItem = (index, updatedItem) => {

        const newUpdate = [...allItem]
        console.log(index);

        console.log(updatedItem);

        newUpdate[index].title = updatedItem.title
        setAllItem(newUpdate)
        toast.success("Updated Successfully.");


    }
    const deleteItem = (index) => {
        const newallItem = allItem.filter((item, id) => id !== index)
        console.log(newallItem);

        setAllItem(newallItem)
        toast.success("Deleted Successfully.");
    }
    const toggleCompleteStatus = (index) => {
        setAllItem((prevAllItems) => prevAllItems.map((item, id) => {
            if (id === index) {
                return ({ ...item, completed: !item.completed })
            }
            return ({ ...item })
        }))
        toast.success("Completion Status Updated.");
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllItem(data)


            })
    }, [])
    return (
        <>

            <div className={styles.mainContainer}>
                <h1>TodoList</h1>
                <Todo addItems={handleAllItems} allItems={allItem} editItem={editItem} deleteItem={deleteItem} toggleCompleteStatus={toggleCompleteStatus}></Todo>
                <ToastContainer/>
            </div>


        </>
    )
}
export default Main
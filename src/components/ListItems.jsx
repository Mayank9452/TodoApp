
import styles from '../styles/ListItems.module.css'
function ListItems({ allItems, updateItem, deleteItem, toggleCompleteStatus, count }) {


    return (
        <>
            <h2 className={styles.listItemHeading}>List of Todos</h2>

            {
                allItems.map((item, index) => {
                    if (index < count * 5)
                        return (
                            <>
                                <div className={styles.listMainContainer}>

                                    <li key={index}>
                                        <div className={styles.titleContent}>{index + 1}. {item.title}</div>

                                        <div className={styles.listButtons}>
                                            <button className={item.completed ? styles.completed : styles.notComplete} onClick={() => toggleCompleteStatus(index)}>
                                                {item.completed ? <i class="fa-regular fa-thumbs-up"></i> : <i class="fa-regular fa-thumbs-down"></i>}
                                                {item.completed ? "Completed" : "Not Complete"}</button>
                                            <button className={styles.editButton} onClick={() => updateItem(index)} disabled={item.completed}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                                Edit
                                            </button>
                                            <button className={styles.deleteButton} onClick={() => deleteItem(index)} disabled={!item.completed}>
                                                <i class="fa-regular fa-trash-can"></i>
                                                Delete
                                            </button>
                                        </div>

                                    </li>
                                </div>
                            </>
                        )
                })
            }
        </>
    )
}
export default ListItems
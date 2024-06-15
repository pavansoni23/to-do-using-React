import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todoArr, setTodoArr] = useState([]);                           // "todoArr" will be arr of objects. Each object consists of {task : , id : , isDone : false}
    let [inpVal, setInpVal] = useState("");

    let addTask = () => {
        setTodoArr((todoArr) => {
            return [...todoArr, { task: inpVal, id: uuidv4(), isDone: false }];
        });
        setInpVal("");
    }


    let updateInpVal = (event) => {
        setInpVal(event.target.value);
    }


    // DELETE
    let deleteItem = (id) => {
        setTodoArr((todoArr) => todoArr.filter((currItem) => currItem.id != id));
    }

    // UPDATE-ALL
    // let upperCaseAll = () => {
    //     setTodoArr((todoArr) => (
    //         todoArr.map((item) => {
    //             return {
    //                 ...item,
    //                 task: item.task.toUpperCase()
    //             }
    //         })
    //     ));
    // }

    let allDone = () => {
        setTodoArr((todoArr) => (
            todoArr.map((item) => {
                return { ...item, isDone: true }
            })
        ));
    }


    // UPDATE-ONE
    // let upperCaseOne = (id) => {
    //     setTodoArr((todoArr) => (
    //         todoArr.map((item) => {
    //             if (item.id == id) {
    //                 return {
    //                     ...item,
    //                     task: item.task.toUpperCase()
    //                 }
    //             } else {
    //                 return item;
    //             }

    //         })
    //     ));
    // }

    let markAsDone = (id) => {
        setTodoArr((todoArr) => (
            todoArr.map((item) => {
                if (item.id == id) {
                    return { ...item, isDone: true }
                } else {
                    return item;
                }
            })
        ))
    }



    return (
        <>
            <input type="text" placeholder="enter task" value={inpVal} onChange={updateInpVal} /> &nbsp;
            <button onClick={addTask}>Add task</button>

            <br /><br /> <hr />

            <h3><u>To-Do List</u></h3>
            <ul>
                {
                    todoArr.map((item) => (
                        <li key={item.id}>
                            <span style={item.isDone ? { textDecoration: "line-through" } : null}>{item.task}</span>                                     &nbsp;
                            <button onClick={() => deleteItem(item.id)}><i class="fa-regular fa-trash-can"></i></button>  &nbsp;
                            <button onClick={() => markAsDone(item.id)}><i class="fa-regular fa-circle-check"></i></button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />

            <button onClick={allDone}>All Done</button>
        </>
    );
}

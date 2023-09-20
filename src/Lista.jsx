import { useState } from 'react'
import React from 'react'

function Lista() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue]= useState('')
    const addItems = () => {
        if(inputValue.trim()!== ''){
            setItems([...items,{text: inputValue, completed: false}])
            setInputValue('');
        }
    }

    const removeItem = (index) => {
        const newArray = [...items];
        newArray.splice(index,1);
        setItems(newArray);
    }

    const toggleCompleted = (index) => {
        const newArray = [...items];
        newArray[index].completed = !newArray[index].completed;
        setItems(newArray);
    }

    const editItem = (index, newText) => {
        const newArray = [...items];
        newArray[index].text = newText;
        setItems(newArray);
    }
    
    return(
        <>
        <div className='Lista'>
            <h1>Lista</h1>
            <div>
                <input type='text'
                    placeholder='Adicione uma tarefa'
                    value={inputValue}
                    onChange={(e) =>setInputValue(e.target.value)}
                ></input>
            </div>
            <button onClick={addItems}>Adicionar Item</button>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                 <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(index)} />
                 <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>
                 <button onClick={() => removeItem(index)}>Remove</button>
                 <button onClick={() => editItem(index, prompt('Digite a nova tarefa:'))}>Editar</button>
                </li>
              ))}
            </ul>
        </div>
        </>
    )
    }
    export default Lista;
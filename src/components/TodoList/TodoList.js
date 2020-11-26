import React from 'react';

const TodoList = (props) => {
    let style = {
        color: 'blue',
        listStyleType: 'none'
    }
    return (
        <ul style={style}>
            {props.todos.map((item, index) => (

                <li key={item.id}> {item.name} {item.surname} {item.number}
                         
                    
                    <button onClick={() => props.handleDelete(item.id)}>&times;</button>
                    <button onClick={() => props.handleEdit(index)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
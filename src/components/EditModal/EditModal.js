import React, { useState } from 'react';
import './EditModal.css';

const EditModal = (props) => {
    let [item, setItem] = useState(props.editTodo)

    function handleEditInputName(e) {
        let newObj = { ...item }
        newObj.name = e.target.value
       
        setItem(newObj)
    }

    function handleEditInputSurname(e) {
        let newObj = { ...item }
        newObj.surname = e.target.value
       
        setItem(newObj)
    }


    function handleEditInputNumber(e) {
        let newObj = { ...item }
        newObj.number = e.target.value
       
        setItem(newObj)
    }


    function handleSave() {
        props.handleSaveTask(item)
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input
                    onChange={handleEditInputName}
                    type="text"
                    value={item.name}
                    className="inp-edit"
                />

                <input
                    onChange={handleEditInputSurname}
                    type="text"
                    value={item.surname}
                    className="inp-edit"
                />

                <input
                    onChange={handleEditInputNumber}
                    type="number"
                    value={item.number}
                    className="inp-edit"
                />
                <button onClick={handleSave}>save</button>
            </div>
        </div>
    );
};

export default EditModal;
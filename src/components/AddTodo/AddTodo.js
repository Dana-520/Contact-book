import React, {useState} from 'react';


const AddTodo = (props) => {

    let [value1, setValue1] = useState('');
    let [value2, setValue2] = useState('');
    let [value3, setValue3] = useState('');

    // function handleValue(e){
    //     setValue(e.target.value)
    // }

    function handleClick(){  // отловить клик
        let newObj = {
            name: value1,
            surname: value2,
            number: value3,

            id: Date.now(),
            status: false
        }
        props.handleTask(newObj)
        setValue1('')
        setValue2('')
        setValue3('')
        console.log(newObj);
    }       

    return (
        <div>
            <input value={value1} onChange={(e) => setValue1(e.target.value)} type="text" />
            <input value={value2} onChange={(e) => setValue2(e.target.value)} type="text" />
            <input value={value3} onChange={(e) => setValue3(e.target.value)} type="number" />

            <button onClick={handleClick}>Add</button>
            
        </div>
    );
};

export default AddTodo;
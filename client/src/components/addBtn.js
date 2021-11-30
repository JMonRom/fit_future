let foodList = []
let foodName = []
const addFood = (ev) => {
    ev.preventDefault()
    let list = {
        id: temporary,
        foodList: document.getElementById('food'),
        carbCount: document.getElementById('carbCount').value,
        protienCount: document.getElementById('proteinCount').value,
        fatCount: document.getElementById('fatCount').value,
        caloriesCount: document.getElementById('caloriesCount').value,
    }
}

import { useState, useRef } from 'react';
import ReactDom from 'react-dom';
// import api from "./apifolder"

function addFood() {
    const [food, setFood] = useState //('REST API keys of id, sring, number of etc')
    const foodRef = useRef() //Allows access to the input so that it knows we are using it

    function handleFood(e) {
        const saveFood = foodRef.current.value
        if (saveFood === '') return //If there is no food input just return
        setFood([]) //clears out all Food items
    }

    return (
        <>
        <input ref={foodRef}type="text" />
        <button onClick={handleFood}>Add Food</button>
        
        </>
    )
}



// function BreakfastForm() {
//     const [food, setFood] = useState('');
//     // Local storage items here

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // append{food} to <p> tag
//         // Save the food inputs
//     }

//     return (
//         <form>
//         {/* breakfast input type = text */}
//         {/* Onchange= {e} => setFood(e.target.value) */}
//         {/* {input type submit button } */}

//         </form>
//     )

// }

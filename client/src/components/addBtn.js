import { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
// import api from "./apifolder"
const addFoodKey = 'eatFood'

function addFood() {
    const [food, setFood] = useState //('REST API keys of id, sring, number of etc')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const foodRef = useRef() //Allows access to the input so that it knows we are using it

    // Stores the food items
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const storeFood = JSON.parse(localStorage.getItem(addFoodKey))
        if (storeFood) setFood(storeFood)
    }, )

    // Getting food items
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        localStorage.setItem(addFoodKey, JSON.stringify(food))
    }, [food])

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

export default addFood

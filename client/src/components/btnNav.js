const timeBtn = () => {
    return (
        <div class="topNav">
            <button class="btn-nav" onClick={morningBtn}>Morning</button>
            <button class="btn-nav" onClick={lunchBtn}>Lunch</button>
            <button class="btn-nav" onClick={dinnerBtn}>Dinner</button>
        </div>
    )
}

export default timeBtn

morningBtn = (e) => {

    let lunch = document.getElementsByClassName("lunch")
    lunch.remove()
    let dinner = document.getElementsByClassName("dinner")
    dinner.remove()
    
    let data = JSON.parse(localStorage.getItem("morning")).class
    const newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    console.log('hello')    
}

// import { useState } from 'react';
// import ReactDom from 'react-dom'


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
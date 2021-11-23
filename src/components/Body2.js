import React, { useEffect, useState } from 'react';

// Set up the title/header
const element = (
    <div>
        <header>
            <h1>Food Journal</h1>
        </header>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

// useState will take in the users inputted food 
function foodForm() {
    const [food, setFood] = useState('');

    // Allows for the inputted food to be moved over to <p> tag
    useEffect(() => {
        document.title = `Today you ate:${food}`;
    })
}
// Once the button is clicked the submitted food object will be sent to a seperate container of listed foods for that day...Hopefully
return (
    <form>
        <label>What did you eat today?
            <input type="text"></input>
            <button onClick={() => setFood(food)}>
                Submit
            </button>
        </label>
    </form>
)
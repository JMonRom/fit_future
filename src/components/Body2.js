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

// List of the days of the week 
const Blog = () => {
    return (
        <div>
            <div>
                <h3>Monday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog2 = () => {
    return (
        <div>
            <div>
                <h3>Tuesday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog3 = () => {
    return (
        <div>
            <div>
                <h3>Wednesday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog4 = () => {
    return (
        <div>
            <div>
                <h3>Thursday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog5 = () => {
    return (
        <div>
            <div>
                <h3>Friday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog6 = () => {
    return (
        <div>
            <div>
                <h3>Saturday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}
const Blog7 = () => {
    return (
        <div>
            <div>
                <h3>Sunday</h3>
                <ol>
                    <li>Carbs: {''}</li>
                    <li>Sugar: {''}</li>
                    <li>Fat: {''}</li>
                    <li>Protein: {''}</li>
                    <li>Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}

export default Blog
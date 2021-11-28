import React from 'react';
// Set up the title/header
const element = (
    <div>
        <header>
            <h1>Food Journal</h1>
        </header>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

// List of the days of the week 
const blogFood = () => {
    return (
        <div>
            <div>
                <h3>Total consumption</h3>
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

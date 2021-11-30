import React from 'react';

// List of nutrition intake
function TrackFood() {
    return (
        <div>
            <div>
                <h3>Total consumption</h3>
                <ol>
                    <li className="list-style">Carbs: {''}</li>
                    <li className="list-style">Sugar: {''}</li>
                    <li className="list-style">Fat: {''}</li>
                    <li className="list-style">Protein: {''}</li>
                    <li className="list-style">Calories: {''}</li>
                </ol>
            </div>
        </div>
    )
}

export default TrackFood;

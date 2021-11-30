const LogFood = () => {
    return (
        <form>
            <label for= "food">Food eaten: </label>
            <input type= "text" id="food" name="food"></input>
            <p class="protien"></p>
            <p class="fat"></p>
            <p class="calories"></p>



            <button onClick={addBtn}>Add</button>
            <button onClick={saveMorning}>Save Morning</button>
            <button onClick={saveLunch}>Save Lunch</button>
            <button onClick={saveDinner}>Save Dinner</button>
            
        </form>
    )
}


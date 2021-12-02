import { useState } from "react"
const LogFood = () => {
const [food, setFood] = useState("addBreakfast","addLunch","addDinner")
    return (
        <form>
            <label for= "food">Food eaten: </label>
            <div class="inputFood">
                <input type= "text" id="food" name="food"></input>
                <button type= "submit"> + </button>
            </div>

            <div class="saveBtn-Section">
                <button onClick={addBreakfast} class="saveBtn">Save for Breakfast</button>
                <button onClick={addLunch} class="saveBtn">Save for Lunch</button>
                <button onClick={addDinner} class="saveBtn">Save for Dinner</button>
            </div>
        </form>
    )
}

export default LogFood()

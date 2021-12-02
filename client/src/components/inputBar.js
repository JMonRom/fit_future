import addFood from './addBtn'
import addBreakfast from '../components/saveBtn'

const inputArea = () => {
    return (
        <div className="calculator">
            <div>
                <input id="searchInput"></input>
            </div>

            <div className="searchAdded">
                <p id="totalCarb"></p>
                <p id="totalFat"></p>
                <p id="totalSugar"></p>
                <p id="totalCalories"></p>
            </div>

            
            <addFood />
        

            <div>
                <button onclick={addBreakfast}id="saveBreakfast">Save for Breakfast</button>
                <button onclick={addLunch} id="saveLunch">Save for Lunch</button>
                <button onclick={addDinner} id="saveDinner">Save for Dinner</button>
            </div>
        </div>
    )
}

export default inputArea
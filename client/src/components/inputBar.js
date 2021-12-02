import addFood from './components/inputBar.js'

const inputArea = () => {
    return (
        <div>
            <div>
                <input id="searchInput"></input>
            </div>
            <div className="searchAdded">
            </div>
            <div>
                <addFood />
            </div>
            <div>
                <button>Save for Breakfast</button>
                <button>Save for Lunch</button>
                <button>Save for Dinner</button>
            </div>
        </div>
    )
}

export default inputArea
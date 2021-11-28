const LogFood = () => {
    return (
        <form>
            <label for= "food">Food eaten: </label>
            <input type= "text" id="food" name="food"></input>
            <button onClick={addBtn}>Add</button>
            <button onClick={saveBtn}>Save</button>
            
        </form>
    )
}


function timeBtn() {
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
lunchBtn = (e) => {

    let lunch = document.getElementsByClassName("lunch")
    lunch.remove()
    let dinner = document.getElementsByClassName("dinner")
    dinner.remove()
    
    let data = JSON.parse(localStorage.getItem("morning")).class
    const newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    console.log('hello')

    
}
dinnerBtn = (e) => {

    let lunch = document.getElementsByClassName("lunch")
    lunch.remove()
    let dinner = document.getElementsByClassName("dinner")
    dinner.remove()
    
    let data = JSON.parse(localStorage.getItem("morning")).class
    const newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    console.log('hello')

    
}

loadPage = () => {
    let data = localStorage.getItem('user-saves')

    for (let i = 0; i < foodtlist.length; i++) {
        
        const card = document.createElement('div')
        card.setAttribute("class", 'card')

        const savedResultDiv = document.createElement('div')
        savedResultDiv.setAttribute('class', 'savedResultDiv')
        
       


        let listCarbs = document.createElement('div')
        listCarbs.setAttribute('id', 'listCarbs')
        listCarbs.textContent = localStorage.getItem[i].something
        savedResultDiv.appendChild(listCarbs)

        let listProtien = document.createElement('div')
        listProtien.setAttribute('id', 'listProtien')
        listProtien.textContent = localStorage.getItem[i].something
        savedResultDiv.appendChild(listProtien)
        


        let listCalories = document.createElement('div')
        listCalories.setAttribute('id', 'listCalories')
        listCalories.textContent = localStorage.getItem[i].something
        savedResultDiv.appendChild(listCalories)
        

        card.appendChild(savedResultDiv);
        document.querySelector().appendChild(card);
    }
}
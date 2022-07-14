Function
function increment(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.previousElementSibling
   inputField.stepUp();
}
// look for the next sibling using the next element sibling

function decrement(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.nextElementSibling
   inputField.stepDown();
}

const gearContainer = document.querySelector('#gear-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4001/api/gears`

const gearsCallback = ({ data: gears }) => displayGears(gears)
//const errCallback = err => console.log(err.response.data)

const getAllGears = () => axios.get(baseURL).then(gearsCallback)
const createGear = body => axios.post(baseURL, body).then(gearsCallback)
// const deleteGear = id => axios.delete(`${baseURL}/${id}`).then(gearsCallback)
// const updateGear = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(gearsCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        price: price.value, 
        imageURL: imageURL.value
    }
    createGear(bodyObj)
    name.value = ''
    price.value = ''
    imageURL.value = ''

}

function createGearCard(gear) {
    const gearCard = document.createElement('div')
    gearCard.classList.add('gear-card')

    gearCard.innerHTML = `<img alt='gear cover' src=${gear.imageURL} class="gear-cover"/>
    <p class="gear-name">${gear.name}</p>
    <p class="gear-price">${gear.price} $</p>
    <div class="btns-container"> 
    <button onclick="decrement(event)">−</button>
<input id=field6 type=number min=-1 max=10>
<button onclick="increment(event)">+</button>
<button class="add">Add</button>
    </div>
    
    `


    gearContainer.appendChild(gearCard)
}

function displayGears(arr) {
    gearContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGearCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllGears()
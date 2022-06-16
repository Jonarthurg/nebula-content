// const div = document.body.querySelector('div')

// // toggling between red and yellow
// //Checking for the Click event
// div.addEventListener("click", (e) => {
//     const el = e.target
//     console.log(el.style.backgroundColor)
//     const color = el.style.backgroundColor
//     if(color === 'yellow'){
//         el.style.backgroundColor = "red"
//     }else if(color === 'red'){
//         el.style.backgroundColor = "yellow"
//     }
// })

// console.log(div)


// let dynamicH1 = document.querySelector('.dynamicH1');
// let clicked = true;

// dynamicH1.addEventListener("click", (e) => {
//     if(clicked){
//         dynamicH1.style.backgroundColor = "purple";       
//         dynamicH1.style.color = "teal";   
//         clicked = false;    
//     } else if(!clicked){
//         dynamicH1.style.backgroundColor = "teal";       
//         dynamicH1.style.color = "purple";
//         clicked = true;       
//     }
// })

// What t the nested dom object looks like
// const body = {
//     div1:{
//         style: {
//             "background-color": "yellow"
//         }
//     }
// }

// document.body.div1.style.backgroundColor = 'red'

// const form = document.body.querySelector('.form')

// form.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     console.log(e.target.fname.value)
//     const list = document.body.querySelector(".list")
//     const p = document.createElement('p')
//     p.innerText = e.target.fname.value
//     list.appendChild(p)
// })


const form = document.body.querySelector('.form')

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const {name,id,address,funFact} = e.target
    console.log(name.value)


    const container = document.body.querySelector(".container")
    const idCard = document.createElement('div')
    container.appendChild(idCard)
    const image = document.createElement('div')
    const info = document.createElement('div')
    idCard.appendChild(image)
    idCard.appendChild(info)
    idCard.classList.add('id-card')
    image.classList.add('image')
    info.classList.add('info')

    const nameEl = document.createElement('p')
    const idEl = document.createElement('p')
    const addressEl = document.createElement('p')
    const funFactEl = document.createElement('p')
    info.appendChild(nameEl)
    info.appendChild(idEl)
    info.appendChild(addressEl)
    info.appendChild(funFactEl)

    nameEl.innerText = `Name: ${name.value}`
    idEl.innerText = `ID: ${id.value}`
    addressEl.innerText = `Address: ${address.value}`
    funFactEl.innerText = `Fun Fact: ${funFact.value}`
})
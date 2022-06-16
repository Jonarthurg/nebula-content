let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;


// function xyz = document.addEventListener("click", (e) {
document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        dynamicH1.style.backgroundColor = "grey";       
        dynamicH1.style.color = "teal";   
        clicked = false;  
        console.log(e.target)  
    } else if(e.target === dynamicH1 && !clicked){
        dynamicH1.style.backgroundColor = "pink";       
        dynamicH1.style.color = "red";
        clicked = true;       
    }
})

// appending (adding) an element to the document
const newParagraph = document.createElement('p') // creates one new paragraph element and stores it in a variable
newParagraph.innerText = 'hello all'; // changing the inner text of our new (empty) paragraph
document.body.appendChild(newParagraph) // adds our newly created element (and the text we inserted) to the HTML body

let newEle = document.createElement('p');
newEle.innerText = 'This is so cool!';
document.body.appendChild(newEle);

// add new elements with a for loop
for(let i = 0; i < 10; i++){ // every time this loops, add the new element below
    let newEle2 = document.createElement('p');
    newEle2.innerText = `This is STILL so cool! Even after ${i} times!!`;
    document.body.appendChild(newEle2);
}

// Create a square that when clicked, changes the background color of the website
let square = document.createElement('div');

square.setAttribute('id', 'box')

document.body.appendChild(square)

        // adding an event listener to our new square
        let clickedSquare = true

        document.addEventListener("mouseover", (e) => {
            if(e.target === square && clickedSquare){
                document.body.style.backgroundColor = "pink";         
                clickedSquare = false;  
                console.log(e.target)  
            } else if(e.target === square && !clickedSquare){
                document.body.style.backgroundColor = "gray";       
                clickedSquare = true;       
            }
        })







const darkModeButton = document.body.querySelector("#darkMode")


darkModeButton.innerHTML = "Dark Mode"


        let newClickedSquare = true;

  







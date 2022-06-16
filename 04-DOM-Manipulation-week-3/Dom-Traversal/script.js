 const parent = document.querySelectorAll(".parent")

const secondParent = parent[1]

changeColor(secondParent)

// secondParent.classList.remove('parent')



 function changeColor(element){
    element.style.backgroundColor = "#333"

 }  
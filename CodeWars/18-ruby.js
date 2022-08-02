var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];





function isRubyComing(list) {


  for (let i = 0; i < list.length; i++) {


//     console.log(list[i].language)

    if (list[i].language === "Ruby") {

      return true
    }
    else continue
  }
      return false

}


// console.log(isRubyComing(list1))

    console.log(list1[2].language === "Ruby")
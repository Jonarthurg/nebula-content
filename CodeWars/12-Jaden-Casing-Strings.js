
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {

  let returnString = ""


  for(let i = 0; i < this.length; i++){

    if(this[i-1] == " " || i == 0)
    {
      returnString += this[i].toUpperCase()
    }
    else {
      returnString += this[i]

    }

  }
return returnString

};
const str1 = "I love to eat pizza!"

const str2 = "i also love to eat pizza!"


  console.log(str1.toJadenCase())
  console.log(str2.toJadenCase())


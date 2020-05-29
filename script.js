function postOnWall(){
let userInput = document.getElementById('firstname').value

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: userInput})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})}

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => myWall(data))

if (localStorage.getItem('test') == "key") {
  console.log("It's there!")
} else {
  localStorage.setItem('test', 'key')
}

function myWall(items){
items.forEach(function (element) {
let makeList = document.createElement('li')
let postItem = document.createTextNode(element)
makeList.appendChild(postItem)
let getList = document.getElementById('lisName')
document.body.insertBefore(makeList, getList)

})
}
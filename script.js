document.addEventListener("DOMContentLoaded", () => {
  console.log("THE JS LOADED")

  logIn(userNamePrompt, passwordPrompt);


})

//simple database
let database = [
  {
    username: "Ricky",
    password: "123"
  },
  {
    username: "Emma",
    password: "321"
  }
];

let newsFeed = [
  {
    username: "Dana",
    timeline: "I had the worst day!"
  },
  {
    username: "Chris",
    timeline: "My wife jus lef me cuz I can't spell"
  }
];



let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function generateNewsFeed(){
let documentTest = document.getElementById("newsfeed");
documentTest.innerHTML +=
`
       <h1> ${newsFeed[0].username} </h1><br>
       <p> says: ${newsFeed[0].timeline} </p><br>
       <br>
       <h1> ${newsFeed[1].username} </h1><br>
       <p> says: ${newsFeed[1].timeline} </p><br>
       <br>
      `
}

//Validates user
function isUserValid(username, password){
  for (let i=0; i < database.length; i++){
    if(database[i].username === username && database[i].password === password){
      return true
    }
  }
  return false;
}
//prompts user to login to see newsfeed
function logIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed[0].username + " says " + newsFeed[0].timeline);
    console.log(newsFeed[1].username + " says " + newsFeed[1].timeline);
    generateNewsFeed();
  } else {
    alert("Wrong password and username bucko");
  }
}

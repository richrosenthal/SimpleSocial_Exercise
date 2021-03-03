//to append html back into index.html
var timelineFeed = document.getElementById("newsfeed")
var trueFlag = false
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
documentTest = document.getElementById("newsfeed");
documentTest.innerHTML +=
`
       <h1> ${newsFeed[0].username} </h1><br>
       <p> says: ${newsFeed[0].timeline} </p><br>
       <br>
       <h1> ${newsFeed[1].username} </h1><br>
       <p> says: ${newsFeed[1].timeline} </p><br>
       <br>
      `;
}

//prompts user to login to see newsfeed
function logIn(user, password) {
  if ((user === database[0].username && password === database[0].password) ||
  (user === database[1].username && password === database[1].password))
   {
      // console.log(newsFeed[0].username + " says " + newsFeed[0].timeline);
      // console.log(newsFeed[1].username + " says " + newsFeed[1].timeline);
       trueFlag = true;
       console.log(trueFlag)
       console.log("here")
       checkNewsFlag();
    } else {
      alert("Sorry, wrong username and password bucko!")
    }
}

function checkNewsFlag(){
  if (trueFlag === true){
    generateNewsFeed();
  }

}
console.log("before login")
logIn(userNamePrompt, passwordPrompt)

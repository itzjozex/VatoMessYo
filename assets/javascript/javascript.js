var userFormEl = document.querySelector("#user-form");
var yearInputEl = document.querySelector("#year");
var monthInputEl = document.querySelector("#month")
var storyContainerEl = document.querySelector("#stories-container");
var yearSearchTerm = document.querySelector("#year-search-term");
var monthSearchTerm = document.querySelector("#month-search-term")

var getUserRepos = function (year, month) {


  var year = yearInputEl.value.trim();
  var month = monthInputEl.value.trim();
  // format the github api url
  var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=soWGrPvUzUwXh7qusyJl3ZGfwnAr1AGJ"

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (docs) {
      displayStories(docs, year, month);
    });
    
  });
};


var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  getUserRepos(); 



};

var displayStories = function (docs, yearSearchTerm, monthSearchTerm) {
  console.log(docs);
  console.log(yearSearchTerm);
  console.log(monthSearchTerm)
  storyContainerEl.textContent = "";
  yearSearchTerm.textContent = yearSearchTerm;
  monthSearchTerm.textContent = monthSearchTerm; 
  for (var i = 0; i < 10; i++) {
    // format repo name
    var story = docs[i]

    // create a container for each repo
    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";

    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = story;

    // append to container
    repoEl.appendChild(titleEl);

    // append container to the dom
    storyContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);


function addElement() {



  // adds today's date
  const todaysDate = document.createTextNode(moment().format('llll'));

  //appends to display under the greeting
  document.getElementById("currentDay").appendChild(todaysDate);


} 

https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=soWGrPvUzUwXh7qusyJl3ZGfwnAr1AGJ


addElement(); 
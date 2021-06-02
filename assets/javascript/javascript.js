var userFormEl = document.querySelector("#user-form");
var yearInputEl = document.querySelector("#year");
var monthInputEl = document.querySelector("#month")
var storyContainerEl = document.querySelector("#stories-container");
var monthYear = document.querySelector("#monthYear");
const monthNames = ["January","Feburary","March","April","May","June","July",
                    "August","September","October","November","December"];


//var monthSearchTerm = document.querySelector("#month-search-term")

var displayStories = function (docs, yearSearchTerm, monthSearchTerm) {
  console.log(docs);
  console.log(yearSearchTerm);
  console.log(monthSearchTerm)
  
  storyContainerEl.innerHTML = "";
  yearSearchTerm.textContent = yearSearchTerm;
  monthSearchTerm.textContent = monthSearchTerm;
  let ul = document.createElement("ul");
  ul.className = "stories"

  //headline.main 
  //byline.original
let lines = 0
for (let {headline, byline, web_url} of docs){
  //console.log(headline, byline)
  let li = document.createElement("li")
  li.innerHTML = `<a href=${web_url} target="_blank">${headline.main}</a> ${byline.original}`
  ul.appendChild(li)
  if (++lines === 10){
    break; 
  }
}
  
  storyContainerEl.appendChild(ul);

}

  


var getUserRepos = function (year, month) {


  var year = yearInputEl.value.trim();
  var month = monthInputEl.value.trim();
  // format the github api url
  var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=soWGrPvUzUwXh7qusyJl3ZGfwnAr1AGJ"
  console.log(apiUrl)
  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (result) {
      displayStories(result.response.docs, year, month);
    });
    
  });
};


var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  monthYear.innerText = `${monthNames[
    +monthInputEl.value-1]} ${yearInputEl.value}`
  getUserRepos(); 



};



userFormEl.addEventListener("submit", formSubmitHandler);


function addElement() {



  // adds today's date
  const todaysDate = document.createTextNode(moment().format('llll'));

  //appends to display under the greeting
  document.getElementById("currentDay").appendChild(todaysDate);


} 

addElement();
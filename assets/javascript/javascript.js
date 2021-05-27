function addElement() {



  // adds today's date
  const todaysDate = document.createTextNode(moment().format('llll'));

  //appends to display under the greeting
  document.getElementById("currentDay").appendChild(todaysDate);


} 

addElement(); 
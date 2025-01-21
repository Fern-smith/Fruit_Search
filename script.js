const input = document.querySelector("#fruit");
const suggestion = document.querySelector(".suggestions");

let fruit = []; //Global variable to store the data

//Fetch the fruit data
fetch('./fruit.json')
  .then(response => response.json())
  .then((data) => {
    console.log('Fetched data;', data);
    // Assign fetched data to fruit variable
    fruit = data;
  })
  .catch(err => console.error("Error fetching fruit data:", err));

// search function
function search(str) {
  console.log('Searching for:', str);
  return fruit.filter(item => item.name.toLowerCase().startsWith(str.toLowerCase()));
}

// Handle input events
function searchHandler(e) {
  const inputVal = e.target.value;
  console.log('Input value:', inputVal)
  const results = search(inputVal);
  console.log('Search results',results);
  showSuggestions(results);
}

//Render suggestions
function showSuggestions(results) {
  suggestion.innerHTML = ''; // Clear previous suggestions

  if (results.length === 0) {
    const noResult = document.createElement('li');
    noResult.textContent = "No results found";
    suggestion.appendChild(noResult);
    return;
  }

  results.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.addEventListener('click', () => useSuggestion(item));
    suggestion.appendChild(li);
  });
}
//Handle suggestion selection 
function useSuggestion(item) {
  input.value = item.name;
  document.getElementById('fruit-image').src = item.image;
  suggestion.innerHTML = ''; // Clear the suggestions after selection
}

//Attach event listener
input.addEventListener('keyup', searchHandler);

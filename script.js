const input = document.querySelector("#fruit");
const suggestion = document.querySelector('.suggestion ul');

fetch('fruit.json')
.then(response => response.json())
.then(data => ){
	const fruit = data;
}
function search(str) {
   return fruit.filter(item => item.name.toLowerCase().startsWith(str.toLOwerCase()));
}

function searchHandler(e) {
    const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	
	


			
function useSuggestion(e){
    const selectedItem = e.target.closest('li');
  	const selectedFruit = selectedItem.textContent.trim();
  	const selectedImage = selectedItem.querySelector('img').src;

  	input.value = selectedFruit;
  	// Assuming you have an image element to display the selected fruit's image:
  	document.getElementById('fruit-image').src = selectedImage;

  	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



function searchForm(){
	document.getElementById("submitButton").addEventListener('click', function(e){
			e.preventDefault();

			var query = document.getElementById("searchInput").value;
			search(query);
	}, false);
};

function search(word){
	var ajax = new XMLHttpRequest();
	ajax.open("GET", JSON_FILE, true);
	ajax.onload = function() {
		var actual_JSON = JSON.parse(ajax.responseText).data;

		var options = {
			shouldSort: true,
			threshold: 0.2,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 3,
			keys: [
			"title"
			]
		};
		var fuse = new Fuse(actual_JSON, options)

		var result = fuse.search(word);

		var output = "";
		for(book in result){
			if(result.hasOwnProperty(book)){
				output += '<div class="pure-u-1-3">' +
				'<img src= "' + result[book].image + '">' +
				'<h3>"'+ result[book].title +'"</h3>' +
				'<p class="description">"'+ result[book].teaser +'"</p>' +
				'</div>';          
			}
		}

		var update = document.getElementById('booksContainer');
		update.innerHTML = output;
	};
	ajax.send();
};
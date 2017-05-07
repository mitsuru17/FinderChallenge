var ajax = new XMLHttpRequest();
ajax.open("GET", JSON_FILE, true);
ajax.onload = function() {
	var list = JSON.parse(ajax.responseText).data.map(function(i) { return i.title; });
	new Awesomplete(document.getElementById("searchInput"),{
		list: list,
		minChars: 3,
		maxItems: 7
	});
};
ajax.send();
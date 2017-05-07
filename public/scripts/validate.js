function validate() {
	document.getElementById("searchInput").addEventListener('keyup', function(e){
		e.preventDefault();
		
		var query = document.getElementById("searchInput").value.length;
		if(query <= 2){
			document.getElementById("submitButton").setAttribute("disabled","disabled");
		}else{
			document.getElementById("submitButton").removeAttribute("disabled");
		}
	}, false);
};
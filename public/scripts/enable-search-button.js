var button = document.getElementById('buttonSearch');
var fieldSearch = document.getElementById('fieldSearch');

function habilita(){
	if (document.getElementById('fieldSearch').value().length >= 2) {
    	button.disabled = false;
    }else{
    	button.disabled = true;
    }
}

fieldSearch.addEventListener('focus', function() {
    habilita();
});
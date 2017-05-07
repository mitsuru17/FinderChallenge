function fetch(){
    loadJSON(function(content) {
        var output = "";
        for (i=0;i<9;i++){
            if(content.data.hasOwnProperty(i)){
                output += '<div class="pure-u-1-3">' +
                    '<img src= "' + content.data[i].image + '">' +
                    '<h3>"'+ content.data[i].title +'"</h3>' +
                    '<p class="description">"'+ content.data[i].teaser +'"</p>' +
                    '</div>';
            }
        }
        
        var update = document.getElementById('booksContainer');
        update.innerHTML = output;
    });
};
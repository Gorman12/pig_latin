var translated = function() {
  
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    var userText = $("input#text").val();


    $("#result").text(translated);
    $("#result").show();
    event.preventDefault();
  });
});

var vowels = ("a")




$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    var userText = $("input#text").val();

    // vowels.forEach(function(vowel) {
    //   var outputText = userText.charAt(0).concat("ay")
    //
    // });
    if (userText.charAt(0) === vowels) {
      var outputText = userText + "ay"
      alert(outputText);
    }




    $("#output").text(outputText);

    event.preventDefault();
  });
});

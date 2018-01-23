var pic = document.querySelector("#cat");
//var btn = document.querySelector("#getJSONBtn");

$("#btn").click(function() {
  $.getJSON("https://random.cat/meow")
    .done(function(data) {
      console.log(data);
      randomCat = data.file;
      $("#cat").attr("src", randomCat);
    })
    .fail(function() {
      console.log("PROBLEM!");
    });
});


$("#circle").on({
    mouseover: function(){
      $("#magic").css("background-image", "url('https://cdn140.picsart.com/240114037048212.png?r1024x1024')").css("background-size", "cover");
    },
    mouseleave: function(){
      $("#magic").css("background-image" , "none");
    },
    click: function(){
      $("#magic").css("background-image" , "none");
      $("#magic").html("Ha ha :P");
    }
  });

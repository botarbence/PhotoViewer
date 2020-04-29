
let photoData =[ {
    image: "images/beach_resort_sunset-1920x1200.jpg",
    title: "Rsort Sunset",
    description: "desciptongfcfc"
  },
  {
    image: "images/bicycle-1920x1200.jpg",
    title: "Bicycle",
    description: "desciptonvzxcvxv2"
  },
  {
    image: "images/moraine_lake_banff_national_park-1920x1200.jpg",
    title: "Maroiane Lake",
    description: "descipton3"
  },
  {
    image: "images/autumn_breeze-1920x1200.jpg",
    title: "Autumn Breeze",
    description: "dsfasdffgfdgdfgdfgfg"
  },
  {
    image:"images/paris_eiffel_tower-1920x1200.jpg",
    title: "Eiffel Tower",
    description: "fgsdfgdfgdgd"
  }
]

let photoNumber = 0;

$(document).ready(function(){
  $("*").dblclick(function(e){
    e.preventDefault();
  });   
});

// Basic image
$("#photo").attr("src", photoData[photoNumber].image);
$("#photo-title").text(photoData[photoNumber].title);
$("#photo-description").text(photoData[photoNumber].description);



// Photo loading function
function loadPhoto(photoNumber) {
  $("#photo").attr("src", photoData[photoNumber].image);
  $("#photo-title").text(photoData[photoNumber].title);
  $("#photo-description").text(photoData[photoNumber].description);
  $(".thumbnailbox").removeClass("thumbnailboxselected");
  $(".thumbnailbox[data-number=" + photoNumber + "]").addClass("thumbnailboxselected");
};

// Loading left
function leftSlide(){
  if (photoNumber>0){
    photoNumber--;
    loadPhoto(photoNumber);
  } else {
    photoNumber = photoData.length-1;
    loadPhoto(photoNumber);
  };
};


// Loading right
function rightSlide() {
  if (photoNumber<photoData.length-1){
    photoNumber++;
    loadPhoto(photoNumber);
  } else {
    photoNumber = 0;
    loadPhoto(photoNumber);
  };
};


// Controls
$(".right").on("click",rightSlide);

$(".left").on("click",leftSlide);

$(document).on("keydown", (event)=>{
  if (event.which===37){
    leftSlide();
  };
  if (event.which===39) {
    rightSlide();
  };
});

// Adding thumbnails

for (var i=0; i<photoData.length; i++) {
  $("#thumbnail").append($("<div>").attr("data-number", i).addClass("thumbnailbox")
    .append($("<img>").attr("src", photoData[i].image).addClass("thumbnailimage"))
    );
};
$(".thumbnailbox[data-number=" + photoNumber + "]").addClass("thumbnailboxselected");

//Control with thumbnails
$(".thumbnailimage").on("click", (event)=>{
  loadPhoto($(event.target).parent().attr("data-number"));
});


// Hover

$(".thumbnailimage").hover(function(event) {
  $(event.target).parent()
    .append($("<h3>").text(photoData[$(event.target).parent().data("number")].title).addClass("hover"));
    $("h3").hide().fadeIn()},
  function(event2){
    $("h3").fadeOut("normal", function(){
      $(this).remove();
    });
    
});
  


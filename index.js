
let photoData =[ {
    image: "images/beach_resort_sunset-1920x1200.jpg",
    title: "Resort Sunset",
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

let thumbNailArr = [0,1,2,3,4]

$(document).ready(function(){
  $("*").dblclick(function(e){
    e.preventDefault();
  });   
});

// Basic image
loadPhoto(thumbNailArr[2]);
for (let i=0; i<5; i++){
  thumbNailCreateRight(i);
  if (i==0 || i==4) {
    $(".thumbNailImage[data-number=" + i + "]").css({"left": (i*75) + "px", "opacity": 0});
  } else {
    $(".thumbNailImage[data-number=" + i + "]").css("left", (i*75) + "px");
  }
};

// Thumbnail Creation
function thumbNailCreateRight(imageNumber){
  $("#thumbnailcontainer").append($("<img>").attr({"data-number": imageNumber, "src": photoData[imageNumber].image}).addClass("thumbNailImage"));
};
function thumbNailCreateLeft(imageNumber){
  $("#thumbnailcontainer").prepend($("<img>").attr({"data-number": imageNumber, "src": photoData[imageNumber].image}).addClass("thumbNailImage"));
}
function thumbNailRemove(imageNumber){
  $(".thumbNailImage[data-number=" + imageNumber + "]").remove();
}

// Photo loading function
function loadPhoto(photoNumber) {
  $("#photo").attr("src", photoData[photoNumber].image);
  $("#photo-title").text(photoData[photoNumber].title);
  $("#photo-description").text(photoData[photoNumber].description);
    
};

// Loading left
function leftSlide(){
  thumbNailRemove(thumbNailArr[4]);
  if (thumbNailArr[0]==0){
    thumbNailArr.unshift(photoData.length-1);
  } else thumbNailArr.unshift(thumbNailArr[0]-1);
  thumbNailArr.pop();
  thumbNailCreateLeft(thumbNailArr[0]);
  $(".thumbNailImage[data-number=" + thumbNailArr[0] + "]").css({"left": "0px", "opacity": 0});
  $(".thumbNailImage[data-number=" + thumbNailArr[1] + "]").animate({left: "+=75px"}, { duration: 200, queue: false }).css("opacity", 1);
  $(".thumbNailImage[data-number=" + thumbNailArr[2] + "]").animate({left: "+=75px"}, { duration: 200, queue: false });
  $(".thumbNailImage[data-number=" + thumbNailArr[3] + "]").animate({left: "+=75px"}, { duration: 200, queue: false });
  $(".thumbNailImage[data-number=" + thumbNailArr[4] + "]").animate({left: "+=75px"}, { duration: 200, queue: false }).css("opacity", 0);
  loadPhoto(thumbNailArr[2]);
  console.log(thumbNailArr);
};


// Loading right
function rightSlide() {
  thumbNailRemove(thumbNailArr[0]);
  if (thumbNailArr[4]==photoData.length-1){
    thumbNailArr.push(0);
  } else thumbNailArr.push(thumbNailArr[4]+1);
  thumbNailArr.shift();
  thumbNailCreateRight(thumbNailArr[4]);
  $(".thumbNailImage[data-number=" + thumbNailArr[4] + "]").css({"left": "300px", "opacity": 0});
  $(".thumbNailImage[data-number=" + thumbNailArr[3] + "]").animate({left: "-=75px"}, { duration: 200, queue: false }).css("opacity", 1);
  $(".thumbNailImage[data-number=" + thumbNailArr[2] + "]").animate({left: "-=75px"}, { duration: 200, queue: false });
  $(".thumbNailImage[data-number=" + thumbNailArr[1] + "]").animate({left: "-=75px"}, { duration: 200, queue: false });
  $(".thumbNailImage[data-number=" + thumbNailArr[0] + "]").animate({left: "-=75px"}, { duration: 200, queue: false }).css("opacity", 0);
  loadPhoto(thumbNailArr[2]);
  console.log(thumbNailArr);
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

//Control with thumbnails
$(".thumbNailImage").on("click", (event)=>{
  loadPhoto($(event.target).parent().attr("data-number"));
});


// Hover
$(".thumbNailImage").hover(function(event) {
  $(event.target).parent()
    .append($("<h3>").text(photoData[$(event.target).parent().data("number")].title).addClass("hover"));
    $("h3").hide().fadeIn()},
  function(event2){
    $("h3").fadeOut("normal", function(){
      $(this).remove();
    });
});
  


$("#roy").click(function() {
	changeBlock("#roy");
  var vid = document.getElementsByName('roy-vid')[0];
  vid.src = vid.src;
});

$("#ecnow").click(function() {
	changeBlock("#ecnow");
  var vid = document.getElementsByName('ecnow-vid')[0];
  vid.src = vid.src;
});

$("#desalination").click(function() {
	changeBlock("#desalination");
});

$("#prints").click(function() {
	changeBlock("#prints");
});

$("#earthsmart").click(function() {
  changeBlock("#earthsmart");
});

$("#livpro").click(function() {
  changeBlock("#livpro");
});

$("#grease").click(function() {
  changeBlock("#grease");
});

$("#pathway").click(function() {
  changeBlock("#pathway");
});


//switch between projects
function changeBlock(id){
	$("#roy-block").hide();
	$("#ecnow-block").hide();
  $("#earthsmart-block").hide();
  $("#livpro-block").hide();
	$("#desalination-block").hide();
	$("#prints-block").hide();
  $("#grease-block").hide();
  $("#pathway-block").hide();

	$("#roy-li").removeClass("active");
	$("#ecnow-li").removeClass("active");
  $("#earthsmart-li").removeClass("active");
  $("#livpro-li").removeClass("active");
	$("#desalination-li").removeClass("active");
	$("#prints-li").removeClass("active");
  $("#grease-li").removeClass("active");
  $("#pathway-li").removeClass("active");

	var block = id + "-block";
	var li = id + "-li";
	$(block).show();
	$(li).addClass("active");
	$(window).scrollTop(0);
}


//fade top nav on scroll
$(window).on( 'scroll', function(){
 var scrollPosition = parseInt($(window).scrollTop());
 if ($(document).width() > 768){
   if(scrollPosition == 0){
    $(".top-nav").removeClass("fade-up");
  }
  else{
    $(".top-nav").addClass("fade-up");
  }
}
});

//select roy blair project version
$("#v1").click(function() {
  changeVersion("#v1");
  $("#text-blurb").show();
});

$("#v2").click(function() {
  changeVersion("#v2");
  $("#text-blurb").show();
});

$("#v3").click(function() {
  changeVersion("#v3");
  $("#text-blurb").show();
});

$("#v4").click(function() {
  changeVersion("#v4");
  $("#text-blurb").show();
});

$("#v5").click(function() {
  changeVersion("#v5");
  $("#text-blurb").show();
});

$("#v6").click(function() {
  changeVersion("#v6");
  $("#text-blurb").hide();
});

function changeVersion(id){
  $("#v2-block").hide();
  $("#v1-block").hide();
  $("#v3-block").hide();
  $("#v4-block").hide();
  $("#v5-block").hide();
  $("#v6-block").hide();

  $("#v2").removeClass("v-active");
  $("#v1").removeClass("v-active");
  $("#v3").removeClass("v-active");
  $("#v4").removeClass("v-active");
  $("#v5").removeClass("v-active");
  $("#v6").removeClass("v-active");

  var block = id + "-block";
  $(block).show();
  $(id).addClass("v-active");
}

/*grease version */
$("#grease-v1").click(function() {
  changeGreaseVersion("#grease-v1");
  $("#grease-text-blurb").show();
});

$("#grease-v2").click(function() {
  changeGreaseVersion("#grease-v2");
  $("#grease-text-blurb").hide();
});

function changeGreaseVersion(id){
  $("#grease-v2-block").hide();
  $("#grease-v1-block").hide();

  $("#grease-v2").removeClass("v-active");
  $("#grease-v1").removeClass("v-active");

  var block = id + "-block";
  $(block).show();
  $(id).addClass("v-active");
}

//change image on homepage
function changeImage() {
  var images = ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6'];
  $(document).mousemove(function (e) {
    var item = $('.slider>div.show');
    var index = images.indexOf('#' + $(item).attr('id'));
    setTimeout(function () {
      var next = index + 1;
      if (index === images.length - 1) {
        next = 0;
      }
      $(images[index]).removeClass().addClass('hide');
      $(images[next]).removeClass().addClass('show');

    }, 100);
  });
}


/*tech specs*/
$(".grease-tech-specs").click(function() {
  $(".grease-tech-specs").hide();
  $(".grease-tech-specs-show").show();
});
$(".grease-tech-specs-show").click(function() {
  $(".grease-tech-specs").show();
  $(".grease-tech-specs-show").hide();
});

$(".roy-tech-specs").click(function() {
  $(".roy-tech-specs").hide();
  $(".roy-tech-specs-show").show();
});
$(".roy-tech-specs-show").click(function() {
  $(".roy-tech-specs").show();
  $(".roy-tech-specs-show").hide();
});

$(".pathway-tech-specs").click(function() {
  $(".pathway-tech-specs").hide();
  $(".pathway-tech-specs-show").show();
});
$(".pathway-tech-specs-show").click(function() {
  $(".pathway-tech-specs").show();
  $(".pathway-tech-specs-show").hide();
});

$(".ecnow-tech-specs").click(function() {
  $(".ecnow-tech-specs").hide();
  $(".ecnow-tech-specs-show").show();
});
$(".ecnow-tech-specs-show").click(function() {
  $(".ecnow-tech-specs").show();
  $(".ecnow-tech-specs-show").hide();
});

$(".earthsmart-tech-specs").click(function() {
  $(".earthsmart-tech-specs").hide();
  $(".earthsmart-tech-specs-show").show();
});
$(".earthsmart-tech-specs-show").click(function() {
  $(".earthsmart-tech-specs").show();
  $(".earthsmart-tech-specs-show").hide();
});

$(".livpro-tech-specs").click(function() {
  $(".livpro-tech-specs").hide();
  $(".livpro-tech-specs-show").show();
});
$(".livpro-tech-specs-show").click(function() {
  $(".livpro-tech-specs").show();
  $(".livpro-tech-specs-show").hide();
});




changeImage();
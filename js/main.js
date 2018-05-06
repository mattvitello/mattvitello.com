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


//switch between projects
function changeBlock(id){
	$("#roy-block").hide();
	$("#ecnow-block").hide();
  $("#earthsmart-block").hide();
  $("#livpro-block").hide();
	$("#desalination-block").hide();
	$("#prints-block").hide();
  $("#grease-block").hide();

	$("#roy-li").removeClass("active");
	$("#ecnow-li").removeClass("active");
  $("#earthsmart-li").removeClass("active");
  $("#livpro-li").removeClass("active");
	$("#desalination-li").removeClass("active");
	$("#prints-li").removeClass("active");
  $("#grease-li").removeClass("active");

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
  $("#v2-block").hide();
  $("#v1-block").show();
  $("#v3-block").hide();
  $("#v4-block").hide();
  $("#v5-block").hide();

  $("#v2").removeClass("v-active");
  $("#v1").addClass("v-active");
  $("#v3").removeClass("v-active");
  $("#v4").removeClass("v-active");
  $("#v5").removeClass("v-active");

  $("#text-blurb").show();

});

$("#v2").click(function() {
  $("#v1-block").hide();
  $("#v2-block").show();
  $("#v3-block").hide();
  $("#v4-block").hide();
  $("#v5-block").hide();

  $("#v1").removeClass("v-active");
  $("#v2").addClass("v-active");
  $("#v3").removeClass("v-active");
  $("#v4").removeClass("v-active");
  $("#v5").removeClass("v-active");

  $("#text-blurb").show();
});

$("#v3").click(function() {
  $("#v1-block").hide();
  $("#v2-block").hide();
  $("#v3-block").show();
  $("#v4-block").hide();
  $("#v5-block").hide();

  $("#v1").removeClass("v-active");
  $("#v2").removeClass("v-active");
  $("#v3").addClass("v-active");
  $("#v4").removeClass("v-active");
  $("#v5").removeClass("v-active");

  $("#text-blurb").show();
});

$("#v4").click(function() {
  $("#v1-block").hide();
  $("#v2-block").hide();
  $("#v3-block").hide();
  $("#v4-block").show();
  $("#v5-block").hide();

  $("#v1").removeClass("v-active");
  $("#v2").removeClass("v-active");
  $("#v3").removeClass("v-active");
  $("#v4").addClass("v-active");
  $("#v5").removeClass("v-active");

  $("#text-blurb").show();
});

$("#v5").click(function() {
  $("#v1-block").hide();
  $("#v2-block").hide();
  $("#v3-block").hide();
  $("#v4-block").hide();
  $("#v5-block").show();

  $("#v1").removeClass("v-active");
  $("#v2").removeClass("v-active");
  $("#v3").removeClass("v-active");
  $("#v4").removeClass("v-active");
  $("#v5").addClass("v-active");

  $("#text-blurb").hide();
});


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


changeImage();
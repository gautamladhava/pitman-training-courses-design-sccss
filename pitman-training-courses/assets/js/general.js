function eqHeight() {
  $.fn.extend({
    equalHeights: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeights" + Math.random()).replace(".", "");
      $(this)
        .each(function () {
          var thistop = $(this).offset().top;
          if (thistop > top) {
            $("." + classname).removeClass(classname);
            top = thistop;
          }
          $(this).addClass(classname);
          $(this).height("auto");
          var h = Math.max.apply(
            null,
            $("." + classname)
              .map(function () {
                return $(this).height();
              })
              .get()
          );
          $("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  $(".time-line .top-content").equalHeights();
  $(".time-line .mid-content ").equalHeights();
  $(".time-line .bottom-content").equalHeights();
  // $(".course-list li ").equalHeights();
}

function hfuncation() {
  var hhight = $(".header").innerHeight();
  $(".main-wrapper").css("padding-top", hhight);
}
function ffuncation() {
  var fhight = $(".footer").innerHeight();
  $(".main-wrapper").css("padding-bottom", fhight);
  $(".footer").css("margin-top", -fhight);
}

$(document).ready(function () {
  $(".enquire-detail").hide();
  $(".enquire-detail:first").show();
  $(".enquire-type li:first-child").addClass("active");
  $(".enquire-type li").click(function () {
    $(".enquire-type li").removeClass("active");
    $(".enquire-detail").hide();
    var attrs = $(this).find("a").attr("data-value");
    $(this).addClass("active");
    $(".enquire-detail").each(function () {
      var data_value = $(this).attr("data-attr");
      if (data_value == attrs) {
        $(this).fadeIn(100);
      }
    });
  });

  $(".reason-content").hide();
  $(".reason-heading").click(function () {
    var content = $(this)
      .closest(".reason-content-wrapper")
      .find(".reason-content");
    $(content).slideToggle();
    $(this).closest(".reason-content-wrapper").toggleClass("open");
    $(".reason-content")
      .not($(this).closest(".reason-content-wrapper").find(".reason-content"))
      .slideUp();
    $(".reason-content-wrapper")
      .not($(this).closest(".reason-content-wrapper"))
      .removeClass("open");
  });

  $(".menu-list li").click(function (event) {
    if ($(window).width() < 991) {
      $(".menu-list li").find("a").css("color", "#ffffff");
    } else {
      $(".menu-list li").find("a").css("color", "#252B33");
    }
    var data_value = $(this).find("a").attr("data-value");
    var active = $(this).find("a");
    $(active).css("color", "#EA7024");
    $(".custom-section").each(function () {
      var data_target = $(this).attr("data-target");
      if (data_target == data_value) {
        var offset = $(this).offset().top;
        var hhight = $(".header").innerHeight();
        var section_scroll = offset - hhight;
        event.preventDefault();
        $("html, body").animate(
          { scrollTop: section_scroll },
          { duration: 200, easing: "linear", delay: 0 }
        );
        $(data_target).css("color", "red");
      }
    });
  });

  var hhight = $(".header").innerHeight();
  $(".menu-list").css("top", hhight);
  $(".slide-review").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });

  $(".open-menu").click(function () {
    $("body").toggleClass("open");
  });

  if ($(window).width() < 769) {
    $(".listing").hide();
    $(".list-heading").click(function () {
      $(this).closest(".footer-part").find(".listing").slideToggle();
      $(this).closest(".footer-part").toggleClass("open");
      $(".listing")
        .not($(this).closest(".footer-part").find(".listing"))
        .slideUp();
      $(".footer-part")
        .not($(this).closest(".footer-part"))
        .removeClass("open");
    });
  }
  var hhight = $(".header").innerHeight();
  $(".menu-list").css("top", hhight);
  $(".owerlly").css("top", hhight);

  $(".open-menu ").click(function () {
    $(".owerlly").toggleClass("open");
  });
  $(".owerlly").click(function () {
    $(this).removeClass("open");
    $("body").removeClass("open");
  });

  setTimeout(ffuncation, 200);
  setTimeout(hfuncation, 200);
  setTimeout(eqHeight, 200);
});

$(window).resize(function () {
  hfuncation();
  ffuncation();
  eqHeight();
  // window.location.reload();
  var hhight = $(".header").innerHeight();
  $(".menu-list").css("top", hhight);
  $(".owerlly").css("top", hhight);

  // if ($(window).width() < 768) {
  //   $(".listing").hide();
  //   $(".list-heading").click(function () {
  //     $(this).closest(".footer-part").find(".listing").slideToggle();
  //     $(this).closest(".footer-part").toggleClass("open");
  //     $(".listing")
  //       .not($(this).closest(".footer-part").find(".listing"))
  //       .slideUp();
  //     $(".footer-part")
  //       .not($(this).closest(".footer-part"))
  //       .removeClass("open");
  //   });
  // }
});

$(window).scroll(function () {
  var wscroll = $(window).scrollTop();
  if (wscroll > 0) {
    $(".header").css("box-shadow", "0 11px 12px 0 rgba(0,0,0,.1)");
  } else {
    $(".header").css("box-shadow", "none");
  }

  var hhight = $(".header").innerHeight();
  var windscroll = $(window).scrollTop();
  $(".custom-section").each(function (i) {
    if ($(this).position().top <= windscroll + hhight + 1) {
      if ($(window).width() > 991) {
        $(".menu-list li a").css("color", "#252b33");
        $(".menu-list li a").eq(i).css("color", "rgb(234, 112, 36)");
      } else {
        $(".menu-list li a").css("color", "#ffffff");
        $(".menu-list li a").eq(i).css("color", "rgb(234, 112, 36)");
      }
    }
  });
});

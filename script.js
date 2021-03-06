// preloader
var preloader = document.getElementById("loader");
function loaderFunction() {
  preloader.style.display = "none";
}

// Email

function sendEmail() {
  console.log("asd");
  var tempParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    // subject: document.getElementById("subject"),
    message: document.getElementById("message").value,
  };

  emailjs.send("gmail", "template_2p5vq5r", tempParams).then(function (res) {
    console.log("success", res.status);
    alert("Your message was successfully sent to Pankaj");
  });
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing anmation script
  var typed = new Typed(".typing", {
    strings: [
      "Senior IT engineer",
      "Great son",
      "Good friend",
      "Spirit Lifter",
      "Great Leader",
      "Annoying",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel scripts
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

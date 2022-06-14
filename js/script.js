/*
    ========================
         jquery codes
    ========================
*/

// dropdown menu for settings
$(".main1").click(function () {
    $(".sub1").slideToggle();
    $(".sub2").slideUp();
    $(".sub3").slideUp();

})

// dropdown menu for currency
$(".main2").click(function () {
    $(".sub2").slideToggle();
    $(".sub1").slideUp();
    $(".sub3").slideUp();

})

// dropdown menu for language
$(".main3").click(function () {
    $(".sub3").slideToggle();
    $(".sub1").slideUp();
    $(".sub2").slideUp();

})

// dropdown menu for navlist
$("#menubars").click(function () {
    $(".nav-list").slideToggle();

})
// dropdown menu for navlist close
$("#close").click(function () {
    $(".nav-list").slideUp();

})
// dropdown menu for quick view show
$(".fa-eye").click(function () {
    $(".quick").show();
})
// dropdown menu for quick view close
$(".fa-close").click(function () {
    $(".quick").hide();
})

// owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1170: {
            items: 5
        }
    }
})

// nav scroll
window.onscroll = function () {
    myFunction()
};
var nav = document.getElementById("nav"),
    sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky")
    }
}

// count to plugin 
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > $(".achivement").outerHeight()) {
        $('.timer').countTo();
    }
})

// shop page left menu
var acc = document.getElementsByClassName("left-menu");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active-shop");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			})
		}

        // account details
        $("#file-upload-communication-comments-create").change(function () {
        var leafname = $(this).val().split('\\').pop().split('/').pop();
        $('.file-upload-filename-communication-comments-create').text(leafname);
    });
    $('input#flexSwitchCheckChecked').click(function () {
        if($(this).prop("checked") === true){
            $('body').addClass('bg-dark text-white-e');
            $('.sidebar, .navbar-light').addClass('border-secondary');
            $('.navbar-brand').addClass('text-white');
            $('.bg-white, .bg-light, .when-hover .active').addClass('bg-dark-1');
            $('.text-dark').addClass('text-white-1');
            $('.border-white, .border').addClass('border-secondary-1');
            $('.border-top').addClass('border-top border-secondary-1');
            $('.border-2').addClass('border-2 border-secondary-1');
            $('.bg-white-rgba').addClass('bg-black-rgba');
            $('textarea').addClass('bg-dark-1 border-secondary-1');
            $('.dropdown-menu ').addClass('bg-dark-1 border-secondary-1 text-white-1');
            $('.dropdown-item ').addClass('text-white-1');
            $('a').addClass('text-white-1');
            $('input').addClass('border-secondary-1');
            $('footer').addClass('text-white');
        }else{
            $('body').removeClass('bg-dark text-white-e');
            $('.sidebar, .navbar-light').removeClass('border-secondary');
            $('.navbar-brand').removeClass('text-white');
            $('.bg-white, .bg-light, .when-hover .active').removeClass('bg-dark-1');
            $('.text-dark').removeClass('text-white-1');
            $('.border-white, .border').removeClass('border-secondary-1');
            $('.border-top').removeClass('border-top border-secondary-1');
            $('.border-2').removeClass('border-2 border-secondary-1');
            $('.bg-white-rgba').removeClass('bg-black-rgba');
            $('textarea').removeClass('bg-dark-1 border-secondary-1');
            $('.dropdown-menu ').removeClass('bg-dark-1 border-secondary-1 text-white-1');
            $('.dropdown-item ').removeClass('text-white-1');
            $('a ').removeClass('text-white-1');
            $('input').removeClass('border-secondary-1');
            $('footer').removeClass('text-white');
        }

    })
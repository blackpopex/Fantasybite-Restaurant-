// controls the button that takes users back to the top page
myBtn = document.getElementById("scrolltop-btn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 20;

}

// controls the hamburgen menu toggle button on mobile screens

function dpxFunction() {
    var mobileResponsiveBtn = document.getElementById("mobile-responsive-btn");
    var mobileSlideDownMenu = document.getElementById("nav-links-mobile");
    if (mobileSlideDownMenu.style.display === "none") {
        mobileSlideDownMenu.style.display = "block";
        mobileSlideDownMenu.style.height = "100%";

    } else {
        mobileSlideDownMenu.style.display = "none";
        mobileSlideDownMenu.style.height = "0%";

    }

}

//animate on scroll


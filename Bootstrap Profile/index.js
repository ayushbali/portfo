console.log("sd")


$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();    
    toggleOnclick($win, $navbar, width);

    //  resize nav
    $win.resize(function(){
        toggleOnclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");

    });


});

function toggleOnclick($win,$navbar,width){
    if($win.width()<=768){
        $navbar.css({left:`-${width}px`});
    }else{
        $navbar.css({left:'0px'});
    }
}


// typed js

var typed = new Typed('#typed',{
    strings:[
        "Jarvis, you there?",
        "Welcome",
        "Feel Free to explore",
        "Sometimes you gotta run, before you can walk",
        "I am Iron Man"
    ],
    typeSpeed:60,
    backSpeed:60,
    loop: true

})

// For about

var typed_2 = new Typed('#typed_2',{
    strings:[
        "Hey, my name is Ayush and I am CSE student."
    ],
    typeSpeed:60,
    backSpeed:60,

})


document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
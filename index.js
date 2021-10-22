$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-menu");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({right: `-${width}px`});
    }else{
        $navbar.css({right: '0=px'});
    }
}



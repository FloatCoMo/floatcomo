$(document).ready(function(){

    $(".navbar-nav li a").click(function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-ex1-collapse").collapse('hide');
    });


});

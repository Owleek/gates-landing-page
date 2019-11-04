$(document).ready(function(){
    const $catalogueMenuTitle = $(".catalogueMenu__title");
    
    if($(window).width() < 1200) {
        $(".catalogueMenu__title").html("Каталог товаров");
    } else {
        $(".catalogueMenu__title").html("Все разделы каталога")
    }

    $( window ).resize(function() {
        if($(window).width() < 1200) {
            $(".catalogueMenu__title").html("Каталог товаров");
        } else {
            $(".catalogueMenu__title").html("Все разделы каталога")
        }
    });

});
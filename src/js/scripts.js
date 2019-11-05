$(document).ready(function(){

    $(".header__menuToggler").on("click", function(){
        $("body").toggleClass("headerNavOpen");
    });

    $(".catalogueMenu").on("click", function(){
        $("body").toggleClass("catalogueDropdownOpen");
        return false;
    });

    $(".headerMenuDrop").on("click", function(){
        $("body").toggleClass("headerDropdownMenuOpen");
        return false;
    });


    $("body").on("click", function(ee) {
        if (!$(ee.target).is(".catalogueDropdown, .catalogueDropdown *") && $(".catalogueDropdown").is(":visible")) {
            $("body").removeClass("catalogueDropdownOpen");
        } else if (!$(ee.target).is(".header__dropdownMenu, .header__dropdownMenu *") && $(".header__dropdownMenu").is(":visible")) {
            $("body").removeClass("headerDropdownMenuOpen");
        }
    });
});
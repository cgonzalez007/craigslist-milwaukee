/* 
 * Chris Gonzalez 2017:
 * Displaying use of jQueryUI sortable interaction. Custom created jQuery file.
 * 
 * File created with help of jQueryUI website: 
 * 
 * sortable page:
 * https://jqueryui.com/sortable/
 * 
 * sortable API:
 * http://api.jqueryui.com/sortable/
 * 
 */
$(function () {
    /**
     * Configurations:
     * "Handle" or thing to grab to be able to sort is set to the headers of the
     * sortables (Much better experience, for me).  
     * 
     */
    $(".column").sortable({
        connectWith: ".column",
        handle: ".grouping-header",
        cancel: ".grouping-toggle",
        placeholder: "grouping-placeholder ui-corner-all"
    });

    /**
     * Allowing for "expand" and "miminize" functions of the sortable content
     * Made use of two font awesome icons: 
     *  fa-minus-square-o and fa-plus-square-o
     */
    $(".grouping")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".grouping-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<i class='fa fa-minus-square-o grouping-toggle' aria-hidden='true'></i>");
    /**
     * On click of the of any element belonging to the grouping-toggle class, will 
     * either expand grouping content or hide it. fa-minus-square-o class and 
     * fa-plus-square-o class from font awesome are toggled as well.
     */
    $(".grouping-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("fa-minus-square-o fa-plus-square-o");
        icon.closest(".grouping").find(".grouping-content").toggle();
    });

});


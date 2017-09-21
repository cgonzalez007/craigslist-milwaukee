/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".grouping-header",
      cancel: ".grouping-toggle",
      placeholder: "grouping-placeholder ui-corner-all"
    });
 
    $( ".grouping" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".grouping-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick grouping-toggle'></span>");
 
    $( ".grouping-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".grouping" ).find( ".grouping-content" ).toggle();
    });

});


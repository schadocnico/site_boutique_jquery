jQuery(document).ready(function(){

  $.getJSON( "boutique/boutique.json", function(data) {
    var items = [];
    $.each( data.boutique, function( key, val ) {
      items.push( "<li id='" + val.id + "'>" + '<a href="lol.html">' + val.nom + '</a></li>' );
    });

    var ul = $('.menu');

    items.forEach(e => ul.append(e));
  });
});

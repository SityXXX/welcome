if (!Modernizr.svg) {
  $("img[src$='.svg']")
    .attr("src", function(){
      this.attr('src').replace('.svg','.png')
    });
}

$('.selectpicker').selectpicker({

  width: '100%'

});

var lang = $('html').attr('lang');

$('.input-daterange').datepicker({

  language: 'uk-ua'

});


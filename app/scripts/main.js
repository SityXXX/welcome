if (!Modernizr.svg) {
  $("img[src$='.svg']")
    .attr("src", function(){
      this.attr('src').replace('.svg','.png')
    });
}

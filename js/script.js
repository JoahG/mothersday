 $(document).ready(function(){
  var $scratchArea = $('.scratch-area'),
      deviceWidth = $(window).width();

  function handleScratchUp(percent){
    $scratchArea.hide();
    $scratchArea.get(0).offsetHeight;
    $scratchArea.show();
  }

  var readyStateCheckInterval = setInterval(function() {
      if (document.readyState === "complete") {
          $('.offer-text').show();
          clearInterval(readyStateCheckInterval);
      }
  }, 10);


  var Scratcher = $scratchArea.wScratchPad({
      size        : 25,
      bg          : 'img/under.jpg',
      fg          : 'img/heart.jpg',
      realtime    : false,
      scratchDown : null,
      scratchUp   : function(e, precent){ handleScratchUp(); },
      scratchMove : null,
      cursor      : 'crosshair'
  });
});
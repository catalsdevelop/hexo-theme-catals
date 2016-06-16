'use strict';
(function(window){
  var catals = {};
  catals.loadCodepen = function (event, id, src, width, height) {
    var c = event.target;
    if (c) {
      c.outerHTML='<iframe id="' + id + '" src="'+ src +'" scrolling="no" frameborder="no" height="'+ height +'px" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width:'+ width  +';overflow: hidden;"></iframe>';
    }
  }
  window.catals = catals;
})(window);


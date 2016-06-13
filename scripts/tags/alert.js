'use strict';

var regCSSClass = /^[a-zA-Z0-9-_]+$/;

/**
 * Alert tag
 *
 * Syntax: {% alert [css classes] %}content{% endalert %}
 */
hexo.extend.tag.register('alert', function(args, content) {
  var html = '';

  // build html
  html += '<div class="warn">';
  html += hexo.render.renderSync({text: content, engine: 'markdown'});
  html += '</div>';

  return html;
}, {ends: true});
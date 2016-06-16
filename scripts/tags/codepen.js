'use script';
// {% codepen userId|anonymous|anon slugHash [defaultTab [height [width]]] %}
function codepenTagRender(args) {
  const userId = args[0] === 'anonymous' ? 'anon' : args[0];
  const slugHash = args[1];
  const theme = '24207';
  const defaultTab = args[2] != null ? args[2] : 'result';
  const height = args[3] != null ? args[3] : 250;
  const width = args[4] != null ? args[4] : '100%';
  const src = `//codepen.io/${userId}/embed/${slugHash}?height=${height}&theme-id=${theme}&slug-hash=${slugHash}&default-tab=${defaultTab}`;
  const id = `cp_embed_${slugHash.replace(/\//g, '_')}`

  return `<div style="width:${width};height:250px;text-align:center;line-height:250px;background:#eee;color:#333 !important;cursor:pointer;" onclick="catals.loadCodepen(event, '${id}', '${src}', '${width}', '${height}')">Click to load code.</div>`
//  return `<iframe id=${id} src=${src} scrolling="no" frameborder="no" height="${height}" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width: ${width}; overflow: hidden;"></iframe>`;
}

hexo.extend.tag.register('codepen', codepenTagRender);

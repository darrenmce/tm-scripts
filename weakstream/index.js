(function() {
  'use strict';

  const containerSel = 'div[data-player]';
  const adLinkSel = 'a[dont]';

  const container = $(containerSel);

  function fixContainer() {
    container.removeAttr('style');
    container.css('width', '100%');
    container.css('height', '100%');
  }

  fixContainer();

  const DEFAULT_HEIGHT = localStorage.getItem('weakHeight') ?? 1000;

  const resizeContainer = $(`<div id="resizer" style="height: ${DEFAULT_HEIGHT}px"></div>`);

  const heightInput = $(`<input id="height" type="number" value="${DEFAULT_HEIGHT}" />`);

  heightInput.change(() => {
    const newHeight = heightInput.val();
    localStorage.setItem('weakHeight', newHeight);
    resizeContainer.height(newHeight);
    fixContainer();
  });

  const $body = $('body');

  $body.empty();
  resizeContainer.append(container);
  $body.append(heightInput);
  $body.append(resizeContainer);

  setInterval(() => {
    const $adLinks = $(adLinkSel);
    if ($adLinks.length) {
      console.log('removing', $adLinks.length, $adLinks);
      $adLinks.remove();
    }
  }, 100);
})();

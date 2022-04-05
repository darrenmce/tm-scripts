(function() {
  'use strict';

  const appContentBaseSelector = '[data-test-id="APP_CONTENT"]';

  const sidebar = $(`${appContentBaseSelector} aside`);

  const player = $(`${appContentBaseSelector} section[class^="main__player-layout--"]`);

  const playerWidth = player.css("width");

  function applyCinema() {
    player.find('main').css({ maxWidth: 'revert' });

    player.css({
      width: "auto",
      margin: "revert"
    });

    sidebar.hide();
  }

  applyCinema();
})();

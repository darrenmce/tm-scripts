(function() {
  'use strict';

  const appContentBaseSelector = '[data-test-id="APP_CONTENT"]';

  const sidebar = $(`${appContentBaseSelector} aside`);

  const player = $(`${appContentBaseSelector} section[class^="main__player-layout--"]`);

  const playerWidth = player.css("width");

  function applyCinema() {
    player.css({
      width: "auto",
      margin: "revert"
    });

    sidebar.hide();
  }

  // for debugging purposes
  function restore() {
    sidebar.show();
    player.css({ width: playerWidth, margin: "0 auto" });
  }

  applyCinema();
})();

(function() {
  'use strict';

  const appContentBaseSelector = 'div.app-wrapper';

  const sideImage = '.inset-video-item-play-action-container'

  const mainPlayerDiv = '#main-embeddedPlayer';

  const vidContainer = $($(`${appContentBaseSelector} .vod-detail-page .container-lg`)[0]);

  function applyCinema() {
    vidContainer.css({ maxWidth: '100%' });
    $(sideImage).remove();
    $(mainPlayerDiv).css({ position: 'relative' });
    $(`${mainPlayerDiv} video`).css({ position: 'relative' });
    $(`div.embedded-player-container`).css({ position: 'relative' });
  }

  applyCinema();
})();

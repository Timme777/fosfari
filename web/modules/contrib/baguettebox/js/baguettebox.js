/**
 * @file
 * BaguetteBox behaviours.
 */

(function () {
  Drupal.behaviors.baguetteBox = {
    attach: function attach(context, settings) {

      'use strict';

      var bbSettings = settings.baguettebox;
      var captions = false;

      if (bbSettings.captions_source !== 'none') {
        captions = function (a) {
          var attribute = bbSettings.captions_source === 'image_title' ? 'title' : 'alt';
          return a.getElementsByTagName('img')[0][attribute];
        };
      }

      baguetteBox.run('.baguettebox', {
        captions: captions,
        animation: bbSettings.animation,
        buttons: bbSettings.buttons ? 'auto' : false,
        fullScreen: bbSettings.fullscreen,
        noScrollbars: bbSettings.hide_scrollbars
      });

    }
  }
})();

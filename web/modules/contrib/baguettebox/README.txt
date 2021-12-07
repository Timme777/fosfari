-= BaguetteBox Drupal module =-

Summary
=========================
This module provides integration with BaguetteBox library.

Requirements
=========================
 * BaguetteBox should be installed to libraries/baguettebox directory.

Installation
=========================
 * Install as usual, see http://drupal.org/node/895232 for further information.
 * Download BaguetteBox library from https://github.com/feimosi/baguetteBox.js.
   Use exact same version as defined in baguettebox.libraries.yml file
 * Unzip the library and place files to libraries directory.
   The directory structure should be as follows:
   /libraries/baguettebox.js/dist/baguetteBox.min.css
   /libraries/baguettebox.js/dist/baguetteBox.min.js


Notes
=========================
 * To make it work with Views you should either set "Use field template"
   checkbox or manually add "baguettebox" class in View field style settings.

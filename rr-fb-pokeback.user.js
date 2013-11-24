// ==UserScript==
// @name        Auto Poke-back
// @namespace   facebook
// @include     https://www.facebook.com/pokes*
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @author      Rikesh Ramlochund https://github.com/rrikesh/
// ==/UserScript==

/* global jQuery, console */
console.info('Auto Poke-back running');

jQuery.noConflict();

jQuery('document').ready(function($){
   "use strict";
   
   setInterval(function(){
      var $item = $('[id^="poke_live_item_"]')
      .find('a[ajaxify^="/pokes"]');
      
      if( $item.length ){
         $item.get(0).click();
         console.info('Poked!');
      }
      else{
         console.info('No one to poke.');
      }

   },10000);
   
});

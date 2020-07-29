// ==UserScript==
// @name         虎牙播放器界面优化
// @namespace    httpa://rortenfeat.com/
// @version      0.1
// @description  隐藏鼠标悬浮时的进入直播间提示
// @author       Rortenfeat
// @match        http://liveshare.huya.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*let centerLayout = document.getElementById("player-enter-room-center");
    if (centerLayout != null) {
    centerLayout.parentNode.removeChild(centerLayout);
    }*/

   let css = '#player-enter-room-center{display:none !important}'
   loadStyle(css)
   function loadStyle(css) {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.appendChild(document.createTextNode(css))
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(style)
   }

})();
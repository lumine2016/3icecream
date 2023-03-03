// ==UserScript==
// @name         三倍icecream
// @namespace    https://github.com/lumine2016
// @version      0.2
// @description  增加细分的bilibili播放倍速选项，最高3x
// @author       Lumine2016
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    waitForKeyElements("ul.bpx-player-ctrl-playbackrate-menu", (element) => {
        let speeds = [2.25, 2.5, 2.75, 3]
        for (const speed of speeds) {
            let li = document.createElement('li')
            li.dataset.value = speed
            li.innerText = speed + 'x'
            li.classList.add('bpx-player-ctrl-playbackrate-menu-item')
            element.insertBefore(li, element.children[0])
        }
    })
})();
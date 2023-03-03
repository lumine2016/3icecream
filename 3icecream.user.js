// ==UserScript==
// @name         三倍icecream
// @namespace    https://github.com/lumine2016
// @version      0.1
// @description  增加细分的bilibili播放倍速选项，最高3x
// @author       Lumine2016
// @match        https://www.bilibili.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = ()=>{
        setTimeout(()=>{
            let speed_menu = document.querySelector("ul.bpx-player-ctrl-playbackrate-menu")

            let li2_25 = document.createElement('li')
            li2_25.dataset.value = '2.25'
            li2_25.innerText = '2.25x'
            li2_25.classList.add('bpx-player-ctrl-playbackrate-menu-item')
            speed_menu.insertBefore(li2_25, speed_menu.children[0])

            let li2_5 = document.createElement('li')
            li2_5.dataset.value = '2.5'
            li2_5.innerText = '2.5x'
            li2_5.classList.add('bpx-player-ctrl-playbackrate-menu-item')
            speed_menu.insertBefore(li2_5, speed_menu.children[0])

            let li2_75 = document.createElement('li')
            li2_75.dataset.value = '2.75'
            li2_75.innerText = '2.75x'
            li2_75.classList.add('bpx-player-ctrl-playbackrate-menu-item')
            speed_menu.insertBefore(li2_75, speed_menu.children[0])

            let li3 = document.createElement('li')
            li3.dataset.value = '3'
            li3.innerText = '3x'
            li3.classList.add('bpx-player-ctrl-playbackrate-menu-item')
            speed_menu.insertBefore(li3, speed_menu.children[0])
        }, 3000)
    }
})();
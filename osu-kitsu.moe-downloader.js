// ==UserScript==
// @name         kitsu.moe dl mirror
// @version      1.0
// @description  replaces osu!direct button to kitsu.moe download mirror. based on oSumAtrIX's script
// @author       klovik
// @include      https://osu.ppy.sh/*
// ==/UserScript==

(() => {
    'use strict';
    let button;
    let interval = setInterval(() => {
        if (!location.pathname.includes('/beatmapsets/') || (button = document.querySelector("div.beatmapset-header__buttons > a[href*=support]")) == null) return;
        button.querySelector("span > span.btn-osu-big__left > span").innerText = 'chimu.moe';
        button.attributes.href.value = "https://chimu.moe/d/" + location.pathname.split('/')[2]
}, 500);
})();

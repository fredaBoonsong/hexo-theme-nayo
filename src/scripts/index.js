//----------
// index 
//----------


import Utils from './utils'

module.exports = {

    init: function () {

        initMenu();
        initHeader();
        initBackToTop();

        Utils.registerHoverItem( $('.social a'));

    }
}


// set clicked menu underline
function initMenu() {
    // get the url
    var href = window.location.href;
    // find the clicked menu
    var clicked_menu = $('#header-menu-home');

    if (href.indexOf('archives') > 0) {

        clicked_menu = $('#header-menu-archives');

    } else if (href.indexOf('categories') > 0) {

        clicked_menu = $('#header-menu-categories');

    } else if (href.indexOf('tags') > 0) {

        clicked_menu = $('#header-menu-tags');

    } else if (href.indexOf('about') > 0) {

        clicked_menu = $('#header-menu-about');

    }
    // set clicked menu underline and color 	 
    clicked_menu.addClass('header-menu-active');
}


var last_scroll = 0

function initHeader() {

    $(window).scroll(function () {

        if (Utils.isPc) {
            slideHeader();
        }
        resetBackToTop();
    });
}

function slideHeader() {

    var _scroll
    var _last = last_scroll

    if (_last != 0) {

        _scroll = $(window).scrollTop();

        if (_scroll <= 0) {
            setHeader();
        } else if (_scroll - _last > 0) {
            //下滑
            hideHeader();
        } else {
            //上划
            showHeader();
        }
    }
    last_scroll = _scroll
}


function resetBackToTop() {
    //back to top  
    if ($(window).scrollTop() > 800) {
        $('#backTop')
            .show();
    } else {
        $('#backTop')         
            .hide();
    }
}


function initBackToTop() {
    $('#backTop').click(()=> {
        $('html,body')
            .animate({
                scrollTop: 0
            }, 600);
    });
}

function showHeader() {

    $('.header')
        .removeClass('header-static')
        .addClass('header-fixed')
        .addClass('slideDown')
        .removeClass('slideUp');

}

function hideHeader() {
    $('.header')
        .addClass('slideUp')
        .removeClass('slideDown');
}

function setHeader() {

    $('.header').removeClass('header-fixed')
        .addClass('header-static')
        .removeClass('slideUp')
        .removeClass('slideDown');
}


// just say hi....
console.log('%c Nayo %c', 'background:#000; color:#fff', '', '山水一程 三生有幸');
console.log('%c Mail %c', 'background:#000; color:#fff', '', 'lemonreds@163.com ');
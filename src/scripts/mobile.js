//-----------
//slide-menu
//-----------

import Utils from './utils.js'

module.exports = {

    init: function () {
        if (!Utils.isPc) {
            initSlideMenu();
        }
    }
}

function initSlideMenu() {

    const  	$toggle = $('.mobile-toggle'),
        $menuSearch = $('.mobile-menu-search'),
        $mask = $('.mask');

    $toggle.click(() => {
        showMenu();
        for (let e of [$mask, $menuSearch]) {
            e.click(() => {
                hideMenu();
            })
        }
    })

  
}

const showMenu = function ($icon = $('.mobile-toggle'), $mask = $('.mask')) {

    $icon
        .removeClass('icon-menu')
        .addClass('icon-no-menu');

    $('.mobile-menu')
        .show()
        .removeClass('menuSlideOut')
        .addClass('menuSlideIn');

    $('.header')
        .removeClass('slide-left')
        .addClass('slide-right');

    $('.container')
        .removeClass('slide-left')
        .addClass('slide-right');

    $('#footer')
        .removeClass('slide-left')
        .addClass('slide-right');


    $mask.show();
}



const hideMenu = function ($icon = $('.mobile-toggle'), $mask = $('.mask')) {

    $icon
        .removeClass('icon-no-menu')
        .addClass('icon-menu');

    $('.mobile-menu')
        .removeClass('menuSlideIn')
        .addClass('menuSlideOut');


    $('.header')
        .removeClass('slide-right')
        .addClass('slide-left');
    $('.container')
        .removeClass('slide-right')
        .addClass('slide-left');

    $('#footer')
        .removeClass('slide-right')
        .addClass('slide-left');

    $mask.hide();
}
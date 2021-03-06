//------------------
//	post
//------------------

import Utils from './utils.js'
import Toc from './toc.js'


exports.init = () => {

    initPost();
    Toc.init();
}

function initPost() {

    //initPostTitle();

    initDonate();
    initShare();

}


//post页面标题跟踪
function initPostTitle() {

    if (!Utils.isPc) return;

    //初始化
    var $logo = $('.header-logo'),
        logoText = $('.header-logo').text();

    const $header = $('.header'),
        postTitle = $('.post-title');


    $(window).scroll(() => {

        if ($header.hasClass('slideDown')) {
            //文章的标题设置到header
            if (postTitle.length > 0) {
                $logo.addClass('header-title').text(postTitle.text());
            }

        } else if ($(window).scrollTop() == 0) {
            //还原LOGO
            $logo.removeClass('header-title').text(logoText);
        }
    })
}
//-----------
// donate
//-----------
function initDonate() {

    const $btn = $('.donate-btn'),
        $donate_box = $('#donate-box');
    let $mask;

    const $cancel = $('.donate-cancel'),
        $donate_wechat = $('.icon-donate-wechat'),
        $donate_alipay = $('.icon-donate-alipay');

    $btn.click(() => {
        $mask = Utils.createMask();

        if ($donate_box.is(':visible')) {
            $donate_box.hide();
        } else {
            $donate_box.show();
            $mask.show();
            showDonateQR($('.icon-donate-wechat'));
        }
        for (let e of [$mask, $cancel]) {
            e.click(() => {
                $donate_box.hide();
                $mask.remove();
            })
        }
    })

    for (let e of [$donate_wechat, $donate_alipay]) {
        e.click(() => {
            showDonateQR(e);
        })
    }

    //显示Donate二维码
    const showDonateQR = function ($icon) {

        const icon_name = $icon.attr('class');

        $('.donate-list span').removeClass('donate-active');
        $icon.addClass('donate-active');

        if (icon_name.indexOf('wechat') > 0) {

            $('.donate-img').hide();
            $('#donate-qr-wechat').show();

        } else if (icon_name.indexOf('alipay') > 0) {

            $('.donate-img').hide();
            $('#donate-qr-alipay').show();
        }
    }
}

//---------
// share
//---------
function initShare() {

    const $share_btn = $('.share-btn'),
        $iconShare = $('.-mob-share');


    $share_btn.click(() => {

        let $mask = Utils.createMask();

        if ($iconShare.is(':visible')) {
            $iconShare.hide();
            $mask.remove();
        } else {
            $mask.show();
            $iconShare.show();
            $mask.click(() => {
                $iconShare.hide();
                $mask.remove();
            })
        }
    });
}
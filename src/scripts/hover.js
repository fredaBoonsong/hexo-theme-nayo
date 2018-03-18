

import Style from '../css/_import/hover.styl'

module.exports = {

    init: function () {
        let $socials = $('.social a'),
            $shares = $('.-mob-share span');

        registerHoverItem($socials);
        registerHoverItem($shares);
    }
}
/**
 * hover时其他item颜色变淡效果
 * @param {Array}  
 */
function registerHoverItem($links) {

    if (typeof ($links.each) !== 'function') {
        console.log($links + ' not support \'each\' ');
        return;
    }
    $links.each(function (i) {
        $(this).hover(
            () => {
                $links.each(function (j) {
                    if (i != j) {
                        $(this).addClass('inactive-item')
                    }
                })
            },
            () => {
                $links.removeClass('inactive-item')
            })
    })
}
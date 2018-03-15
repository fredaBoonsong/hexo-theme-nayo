//------
// utils
//------


module.exports = {

    isPc: isPc(),
    cutString: cutString,
    scrollToId: scrollToId,
    registerHoverItem: registerHoverItem
}

function isPc() {

    const userAgentInfo = navigator.userAgent,
        Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


function cutString(str, maxlength) {

    if (str.length > maxlength) return str.substring(0, maxlength - 1) + '...';
    else
        return str;

}

function scrollToId(id) {

    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
    }, 400);
}


/**
 * hover时其他item的效果
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
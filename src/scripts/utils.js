//------
// utils
//------


module.exports = {

    isPc: isPc(),
    scrollToId: scrollToId,
  
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


function scrollToId(id) {

    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
    }, 400);
}
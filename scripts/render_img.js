/**
 * 渲染之后处理图片标签
 * 修改 src
 * images lazyload
 * 
 */


let cheerio = require('cheerio'),
    lodingGif = '/images/loading.gif';


hexo.extend.filter.register('after_render:html',
    function renderImg(source) {

        let $ = cheerio.load(source);

        $('.gallery,.banner').each(function (idx, element) {

            let bgImg = $(element).attr('data-origin');

            if (bgImg) {
                $(element).removeAttr('data-origin');
                $(element).attr({
                    'data-src': bgImg
                });
                $(element).css('background-image', 'url("' + lodingGif + '")');
            }

        });

        $('img').each(function (idx, element) {

            let src = $(element).attr('src');
            // a strange bug here to fix
            if (src && src !== lodingGif) {
                $(element).attr({
                    'data-src': src,
                    'src': lodingGif
                });
            }
        });

        return $.html();
    }
);
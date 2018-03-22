import Stlye from '../css/style.styl'

import Index from './index.js'
import Anm from './animate.js'
import Mobile from './mobile.js'
import Search from './search.js'
import Post from './post.js'
import Hover from './hover.js'

import Gallery from './gallery.js'


const $ = require('expose-loader?$!./jquery.js')

$(function () { 

    Index.init();
    Mobile.init();
    Search.init();
    Anm.init();
    Post.init();
    Hover.init();
    Gallery.init();
})
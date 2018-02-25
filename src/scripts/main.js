
import Stlye from '../css/style.styl'

require("expose-loader?$!./jquery.js")

import Index from './index.js'
import Anm from './animation.js'
import Mobile from './mobile.js'
import Search from './search.js'

import Post from './post.js'


$(function(){

    Index.init();
    Mobile.init();
    Search.init();
    Anm.init();
    Post.init()

});
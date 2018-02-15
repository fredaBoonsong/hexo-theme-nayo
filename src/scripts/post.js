//------------------
//	post
//------------------


// require("expose-loader?$!./jquery.js")

import Utils from './utils.js'
import Toc from './toc.js'

module.exports={

	init : function(){

		initPost();

		Toc.init();
	}

}
function initPost(){

	initPostTitle();
	initDonate();
	initShare();

}




var $logo;

var logoText;

//post页面标题跟踪
function initPostTitle(){




	 //初始化
	$logo = $('.header-logo');
	logoText = $('.header-logo').text();


	if( !Utils.isPc() ){
		setTitle();
	}

	$(window).scroll(function() {

		var $header =$('.header');
		
		if($header.hasClass('slideDown')){				
			setTitle();		
		}else if($(window).scrollTop() == 0){			
			setLogo();
		}
	})

	//文章的标题设置到header
	function setTitle(){	
		//获取post标题
		const postTitle = $('.post-title');
		if( postTitle.length > 0){
			$logo.addClass('header-title').text(postTitle.text());	
		}	
		
	}
	//还原LOGO
	function setLogo(){		
			$logo.removeClass('header-title').text(logoText);		
	}	
}

//-----------
// donate
//-----------
function initDonate(){
	$('.donate-btn').click(function(){				
		showDonateBox();
	})

	//显示DonateBox
	function showDonateBox(){

			var $donate_box = $('#donate-box');
			var $msk = $('.mask');


			if( $donate_box.is(':visible')){

				$donate_box.hide();			

			}else{

				$donate_box.show();	
				$msk.show();

				showDonateQR($('.icon-donate-wechat'));	

				$('.donate-cancel,.mask').click(function(){

					$donate_box.hide();		
					$msk.hide();
				})


				$('.icon-donate-wechat,.icon-donate-alipay').click(function (){							
					showDonateQR( $(this) );
				})		
			}
	}


	//显示Donate二维码
	function showDonateQR( $icon ){


		var icon_name = $icon.attr('class');
		
		$('.donate-list span').removeClass('donate-active');
		$icon.addClass('donate-active');


		if(icon_name.indexOf('wechat') > 0 ){
		
		$('.donate-img').hide();	
		$('#donate-qr-wechat').show();
		
		}else if(icon_name.indexOf('alipay') > 0){
			
		$('.donate-img').hide();
		$('#donate-qr-alipay').show();		
		}
	}
}

//---------
// share
//---------
function initShare(){

	$('.share-btn').click(function(){

		 var $iconShare = $('.-mob-share');

		 if($iconShare.is(':visible')){
          
          	$iconShare.hide();      
         
         }else {     
          
          	$iconShare.show();             
        }
	});
}



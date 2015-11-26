function gallery(sSelector){
	var g = this;
	g.gallery = $(sSelector);

	var exhibition__wrapper = g.gallery.find('.js-exhibition__wrapper')
	addBlock = function(){
		var hiddenBlock = '<div class="clearfix"></div><div class="b-hidden-block"><div class="b-arrow"></div><div class="b-block__img"></div><div class="b-right-block"><p class="b-exhibition__headline">Название выставки</p><p class="b-exhibition__describtion">Строка описания книги</p><p class="b-exhibition__title"></p><div class="b-exhibition__wrapper_button"><a href="#" class="b-exhibition__button">Перейти к выставке</a></div></div></div>'
		// тут нужно быть осторожным, ведь если добавить какой-то лишний блок перед js-exhibition__wrapper в html документе - индексация будет считаться по другоми и переменная a будет другой
		var a = $(this).index()
		if(a<4){x=2}
		else if(a<7){x=5}
		else if(a<10){x=8}
		else if(a<13){x=11}
		else if(a<16){x=14}
		else if(a<19){x=17}
		else if(a<22){x=20}
		else if(a<25){x=23}
		else if(a<28){x=26}
		else if(a<31){x=29}
		else if(a<34){x=32}
		else if(a<37){x=35}
		else if(a<40){x=38}
		$(window).on('resize', function(){
		    if($(window).width()<980){
		      x=a-1
		    }
		});
		$(window).resize();
		$('.b-hidden-block').remove()
		$('.js-exhibition__wrapper').eq(x).append(hiddenBlock)
		if(exhibition__wrapper.eq(x-1).length === 0){exhibition__wrapper.eq(x-2).append(hiddenBlock)}
		else if(exhibition__wrapper.eq(x).length === 0){exhibition__wrapper.eq(x-1).append(hiddenBlock)}
		var exhibition__headline    = $('.b-hidden-block').find('.b-exhibition__headline')
		var exhibition__describtion = $('.b-hidden-block').find('.b-exhibition__describtion')
		exhibition__headline.text(' ')
		exhibition__describtion.text(' ')
		var newHeadline = $(this).find('.b-exhibition__headline').text()
		var newDescribtion = $(this).find('.b-exhibition__describtion').text()
		$('.b-block__img').css('background-image',$(this).find('.b-exhibition__img').css("background-image"))
		exhibition__headline.text(newHeadline)
		exhibition__describtion.text(newDescribtion)
		var hiddenBlockTitle = g.gallery.find('.b-hidden-block').find('.b-exhibition__title')
		var hiddenBlockLink  = g.gallery.find('.b-hidden-block').find('.b-exhibition__button')
		// тут просто добавляется css со стрелочкой к каждому элементу.
		var arrow = $('.b-arrow');
		for (var i=1; i<=50; i+=3){
			if(a === i){
			arrow.addClass('b-arrow-left')
			}
		}
		for (var i=3; i<=50; i+=3){
			if(a === i){
			arrow.addClass('b-arrow-right')
			}
		}
		for (var i=2; i<=50; i+=3){
			if(a === i){
			arrow.addClass('b-arrow-middle')
			}
		}
		//к каждому элементу по порядковому № добавляем текст.
		if(a===1){hiddenBlockTitle.text('Подробное описание выставки№1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		if(a===2){hiddenBlockTitle.text('Подробное описание выставки№2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		if(a===3){hiddenBlockTitle.text('Подробное описание выставки№3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		if(a===4){hiddenBlockTitle.text('Подробное описание выставки№4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		if(a===5){hiddenBlockTitle.text('Подробное описание выставки№5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		if(a===6){hiddenBlockTitle.text('Подробное описание выставки№6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim aut mollitia porro, ex sapiente asperiores, iure totam neque, perspiciatis minus, numquam repudiandae maxime vel! Cupiditate possimus, excepturi quam harum!')}
		//к каждому элементу по порядковому №  добавляем ссылку.
		if(a===1){hiddenBlockLink.attr('href','http://google.com')};
		if(a===2){hiddenBlockLink.attr('href','http://google.com')};
		if(a===3){hiddenBlockLink.attr('href','http://google.com')};
		if(a===4){hiddenBlockLink.attr('href','http://google.com')};
		if(a===5){hiddenBlockLink.attr('href','http://google.com')};
		if(a===6){hiddenBlockLink.attr('href','http://google.com')};
	}
	exhibition__wrapper.click(addBlock)
}


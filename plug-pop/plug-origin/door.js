$.fn.extend({

	showPop : function({ele='body',option}){  //形参解构实参
		
		return $(ele).each(function(){
			$.ajax({
				url:'../plug-origin/door.css',
				success:function(msg){
						$('head style').append(msg);		
				}
			});
			
			$.ajax({
				url:'../plug-origin/door.html',
				success:function(msg){
						if(!$('.door').html()){
							$(ele).prepend(msg);
							$(`${ele} h2`).html(option);
							autoCenter();
							//窗口大小发生变化，自动居中
							$(window).resize(autoCenter);
							$('#mask').addClass('mask');
							//点击×关闭窗口
							$('.door span').click(function(){
								$('.door').hide();
								$('#mask').removeClass('mask');
							})
						}
						    
				}
			})
			
		});
		
		function autoCenter(){
			var oWidth=$('.door').outerWidth();
			var oHeight=$('.door').outerHeight();
			var width=$(window).width()/2-oWidth/2+'px';
			var height=$(window).height()/2-oHeight/2+'px';
			$(`.door`).css({
					left: width,
					top: height
				});
		}
	}
})
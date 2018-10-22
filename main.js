new fullpage('#fullpage', {
	//options here
	menu: '#myMenu',
	autoScrolling:true,
	scrollHorizontally: true,
	anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
	loopBottom: true,
	scrollBar:true,
	continuousVertical: true,
	afterRender: function(){
		$('.image').addClass('animated tada delay-0.5s')
	},
	afterLoad: function(origin, destination){
		if(destination.index===0){
			$('.image').addClass('animated tada delay-0.5s')
			console.log('安排')
		} else if(destination.index===1){
			$('.skillList').addClass('show animated zoomIn delay-0.3s')
		} else if(destination.index===2){
			$('.project1').addClass('animated rotateIn delay-0.5s')
			$('.project2').addClass('animated rotateIn delay-0.5s')
		} else if(destination.index===3){
			$('.info').addClass('show animated slideInUp delay-0.5s')
			$('.downloadPDF').addClass('show animated slideInUp delay-0.5s')
		}
		//使用 anchorLink
	},
	onLeave: function(index, nextIndex, direction){
		//离开第二节后
		if(index.index===0){
			$('.image').removeClass('animated tada delay-0.5s')
			console.log('2222222222')
		}
		else if(index.index === 1 ){
			$('.skillList').removeClass('show animated zoomIn delay-0.3s')
		}else if(index.index === 2){
			$('.project1').removeClass('animated rotateIn delay-0.5s')
			$('.project2').removeClass('animated rotateIn delay-0.5s')
		}else if(index.index === 3){
			$('.info').removeClass('show animated slideInUp delay-0.5s')
			$('.downloadPDF').removeClass('show animated slideInUp delay-0.5s')
		}
	},
	
});
	//methods
fullpage_api.setAllowScrolling(true);

$('.preview.click').on('click',(event)=>{
	$('.qr').addClass('show')
	$('.cancel').addClass('show')
})
$('.cancel').on('click',(event)=>{
	$('.qr').removeClass('show')
	$('.cancel').removeClass('show')
})

 
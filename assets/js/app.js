$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:18,
        items:2,
        nav:false,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    })
})

$(document).ready(function(){

	$('#bar1').barfiller({ barColor: '#ff517b' });
	$('#bar2').barfiller({ barColor: '#ff517b' });
	$('#bar3').barfiller({ barColor: '#ff517b' });
	$('#bar4').barfiller({ barColor: '#ff517b', duration: 3000 });
	
});
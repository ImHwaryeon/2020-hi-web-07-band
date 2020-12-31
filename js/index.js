$(".navi-title.down").mouseenter(onNaviEnter);
$(".navi-title.down").mouseleave(onNaviLeave);

function onNaviEnter(){
	$(this).find(".navi-title ul").addClass('active');
}
function onNaviLeave(){
	$(this).find(".navi-title ul").removeClass('active');
}


$(".header-wrapper .bar-wrap").click(onSubMenu);

function onSubMenu(){
	$(".header-wrapper .sub-menu").stop().slideToggle(200);
}


function onMainBanner() {
	var swiper = new Swiper('.main-wrapper.swiper-container', {
		slidesPerView: 1,
        loop: true,
        autoplay: {
			delay: 3000,
		}
	});
}
onMainBanner();
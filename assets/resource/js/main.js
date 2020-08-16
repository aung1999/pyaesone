$(document).ready(function(){
	$('.hover-btn'). mousemove(function(){

		$(this).html('more about me <i class="fas fa-user animate__animated animate__fadeInLeft animate__faster"><i/>')
	});
	$('.hover-btn').hover(function(){

		$(this).html('more about me <i class="fas fa-user animate__animated animate__fadeOutLeft animate__faster"><i/>')
	});
});
import '@babel/polyfill';
// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import ionRangeSlider from 'ion-rangeslider';

svg4everybody();
// window.$ = $;
// window.jQuery = $;

window.ionRangeSlider = ionRangeSlider;

$(".js-range-slider").ionRangeSlider({
	min: 0,
	max: 27,
	from: 5,
	hide_min_max: true,
	skin: "custom",
	values: [
		"0/27<br>0/20",
		"1/27<br>1/20",
		"2/27<br>2/20",
		"3/27<br>3/20",
		"4/27<br>4/20",
		"5/27<br>5/20",
		"6/27<br>6/20",
		"7/27<br>7/20",
		"8/27<br>8/20",
		"9/27<br>9/20",
		"10/27<br>10/20",
		"11/27<br>11/20",
		"12/27<br>12/20",
		"13/27<br>13/20",
		"14/27<br>14/20",
		"15/27<br>15/20",
		"16/27<br>16/20",
		"17/27<br>17/20",
		"18/27<br>18/20",
		"19/27<br>19/20",
		"20/27<br>20/20",
		"21/27<br>20/20",
		"22/27<br>20/20",
		"23/27<br>20/20",
		"24/27<br>20/20",
		"25/27<br>20/20",
		"26/27<br>20/20",
		"27/27<br>20/20",
	]
});

require('ninelines-ua-parser');

$('.player__top-arrow').on('click', function () {
	$('.player__top').toggleClass('player__top--hide');
})
$('.player__list-title').on('click', function () {
	$(this).parent().toggleClass('player__list--active');
});
$('.player__list-item').on('click', function () {
	let view = $(this).hasClass('player__list-item--view');
	let target = $(this).attr('target');
	if (view) {
		$(this).parent().find('.player__list-item--view').removeClass('player__list-item--active');
		$(this).addClass('player__list-item--active');
	} else {
		$(`#${target}`).toggleClass('player__middle-graph--hide');
		$(this).toggleClass('player__list-item--active');
	}
});

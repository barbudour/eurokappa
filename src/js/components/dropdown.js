const lists = document.querySelectorAll('.player__list');
var i;
for (i = 0; i < lists.length; i++) {
	let list = lists[i];
	let title = lists[i].querySelector('.player__list-title');
	title.addEventListener('click', () => {
		list.classList.toggle('player__list--active');
	})
}
const items = document.querySelectorAll('.player__list-item');
for (i = 0; i < items.length; i++) {
	let item = items[i];
	item.addEventListener('click', () => {
		item.classList.toggle('player__list-item--active')
	})
}
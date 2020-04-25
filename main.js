var trail = document.createElement('div');
trail.className = 'trail';

var some = document.createElement('div');
some.className = 'trail';
some.style.background = 'red';

var abc = document.createElement('div');
abc.className = 'trail';
abc.style.background = 'yellow';

var array = [];
array.push(trail);
array.push(some);
array.push(abc);

function displayMoved(event) {

	array.forEach(function(a) {
		a.style.left = (event.pageX - Math.floor(Math.random() * 30)) + 'px';
		a.style.top = (event.pageY - Math.floor(Math.random() * 30)) + 'px';
		
		document.body.appendChild(a);
	});
}

var scheduled = false, lastEvent;
addEventListener('mousemove', function(event) {
	lastEvent = event;
	if (!scheduled) {
		scheduled = true;
		setTimeout(function() {
			scheduled = false;
			displayMoved(lastEvent);
//		console.log(event);
		}, 300);
	}
});

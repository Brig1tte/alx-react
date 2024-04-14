import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
	const count = parseInt($('#count').text()) || 0;
	$('#count').text(`${count + 1} clicks on the button`);
}

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="myButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('#myButton').on('click', debouncedUpdateCounter);

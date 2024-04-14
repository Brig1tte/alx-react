import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  const count = parseInt($('#count').text()) || 0;
  $('#count').text(`${count + 1} clicks on the button`);
}

$('body').append('<button id="myButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('#myButton').on('click', debouncedUpdateCounter);

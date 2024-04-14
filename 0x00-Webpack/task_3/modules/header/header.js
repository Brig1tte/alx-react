import $ from 'jquery';

console.log('Init header');

$('body').append('<div id="logo"></div>');
$('#logo').css('background-image', `url(${'./assets/holberton-logo.jpg'})`);
$('#logo').css('width', '200px');
$('#logo').css('height', '200px');

$('body').append('<h1>Holberton Dashboard</h1>');

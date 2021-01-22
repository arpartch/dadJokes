$(document).ready(() => {
    console.log('jQuery is ready to go!');
});

const $container = $('<div>');
const $title = $('<h1>', {
    text: 'Dad Jokes'
});

$container.append($title);
$(document.body).append($container);
$title.css('color', 'tomato');

const $jokeButton = $('<button></button>', {
    text: 'Click for a new joke 😂'
}) 
$jokeButton.appendTo($container);
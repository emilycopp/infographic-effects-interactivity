var $needs = $('.family');
var $ingredients = $('.recipe');
var $winner = $('.cups');
var $hour = $('.requires');
var $minute = $('.requires');
var $tips = $('.tips');

var $percent = $('#percent');
var percentMax = parseInt($percent.attr('data-max'), 10);
var current = 0;


var updateTick = function () {
  if (current < percentMax) {
    requestAnimationFrame(updatePercent);
  }
};

var updatePercent = function () {
  current += 0.3;
  $percent.html(Math.round(current));
  updateTick();
};

updatePercent();

$needs.waypoint(function (direction) {
  if (direction == 'down') {
    $needs.addClass('js-needs-animate');
  } else {
    $needs.removeClass('js-needs-animate');
  }
}, { offset: '60%' });

$ingredients.waypoint(function (direction) {
  if (direction == 'down') {
    $ingredients.addClass('js-ingredients-animate');
  } else {
    $ingredients.removeClass('js-ingredients-animate');
  }
}, { offset: '50%' });

$winner.waypoint(function (direction) {
  if (direction == 'down') {
    $winner.addClass('js-winner-animate');
  } else {
    $winner.removeClass('js-winner-animate');
  }
}, { offset: '50%' });

$hour.waypoint(function (direction) {
  if (direction == 'down') {
    $hour.addClass('js-hour-animate');
  } else {
    $hour.removeClass('js-hour-animate');
  }
}, { offset: '40%' });

$minute.waypoint(function (direction) {
  if (direction == 'down') {
    $minute.addClass('js-minute-animate');
  } else {
    $minute.removeClass('js-minute-animate');
  }
}, { offset: '40%' });

$tips.waypoint(function (direction) {
  if (direction == 'down') {
    $tips.addClass('js-tips-animate');
  } else {
    $tips.removeClass('js-tips-animate');
  }
}, { offset: '90%' });

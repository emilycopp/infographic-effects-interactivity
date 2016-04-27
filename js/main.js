var $recipe = ('.recipe');

var $percent = $('#percent');
var percentMax = parseInt($percent.attr('data-max'), 10);
var current = 0;

var updatePercent = function () {
  current += 0.3;
  $percent.html(Math.round(current));
  updateTick();
};

var updateTick = function () {
  if (current < percentMax) {
    requestAnimationFrame(updatePercent);
  }
};

updatePercent();

$recipe.waypoint(function (direction) {
  if (direction == 'down') {
    $recipe.addClass('js-recipe-animate');
  } else {
    $recipe.removeClass('js-recipe-animate');
  }
}, { offset: '50%' });

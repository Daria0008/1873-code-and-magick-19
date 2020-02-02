'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BETWEEN_COLUMN_WIDTH = 50;
var BAR_HEIGHT = 20;
var BAR_WIDTH = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var DIAGRAM_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {

  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

//пишем две строчки текста в самом верху

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура, Вы победили!', CLOUD_X + GAP, CLOUD_Y + 2 * GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, CLOUD_Y + 2 * GAP + FONT_GAP);

  // рисуем прямоугольное поле диаграммы.
  // высота прямоугольного поля диаграммы в переменной DIAGRAM_HEIGHT

  ctx.fillStyle = '#000';
  ctx.fillRect(CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP + 2 * FONT_GAP, CLOUD_WIDTH - 4 * GAP - 2 * FONT_GAP, DIAGRAM_HEIGHT);

  // рисуем столбик "Вы"

  ctx.fillText('Вы', CLOUD_X + 2 * GAP, DIAGRAM_HEIGHT - GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + 2 * GAP, DIAGRAM_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * MathRound(times[0]/1000);
  ctx.fillText(times[0], CLOUD_X + 2 * GAP, BAR_HEIGHT * MathRound(times[0]/1000) + GAP);

  //рисуем столбики циклом
  // x y width height

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + 2 * GAP + TEXT_WIDTH * i + GAP, DIAGRAM_HEIGHT - GAP);
    ctx.fillStyle = 'rgb(0, 0, ' + 255 - 10 * i + ')';
    ctx.fillRect(CLOUD_X + 2 * GAP + TEXT_WIDTH * i + GAP * i, DIAGRAM_HEIGHT - GAP - FONT_GAP - GAP, BAR_WIDTH, BAR_HEIGHT * MathRound(times[i]/1000);
    ctx.fillText(times[i], CLOUD_X + 2 * GAP + TEXT_WIDTH * i + GAP, BAR_HEIGHT * MathRound(times[i]/1000));
  }
};

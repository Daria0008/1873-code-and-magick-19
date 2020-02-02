'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
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
  ctx.fillText('Ура, Вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  // рисуем прямоугольное поле диаграммы.
  // По х смещение на два gap от края основного поля, по у смещаемся вниз от текста на 1 gap
  // высота прямоугольного поля диаграммы в переменной DIAGRAM_HEIGHT

  ctx.fillStyle = '#000';
  ctx.fillRect(CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP + 2 * FONT_GAP, CLOUD_WIDTH - 3 * GAP, DIAGRAM_HEIGHT);

  //рисуем столбики циклом
  // X = (BAR_WIDTH * BAR[I]) / MAX_BAR

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);

  }


};

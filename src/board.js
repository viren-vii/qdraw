const { fabric } = require('fabric');

const canvasDiv = document.getElementById('canvasDiv');
const canvas = new fabric.Canvas('canvas', { backgroundColor: '#fff', isDrawingMode: true });

let bgColor = '#fff';
let currentColor = '#000';

const clearEl = $('#clear-canvas');

const currentColorEl = $('.currentColor');
const activeColor = $('#activeColor');
const colorPicker = $('#colorPicker');

const bgcurrentColorEl = $('.bgCurrentColor');
const bgactiveColor = $('#bgActiveColor');
const bgcolorPicker = $('#bgColorPicker');

const sliderIp = $('#slider');

clearEl.on('click', () => {
  canvas.clear();
  bgcurrentColorEl.css({ color: '#808080' });
});

bgactiveColor.on('click', () => {
  bgcolorPicker.click();
});

bgcolorPicker.on('change', () => {
  bgColor = bgcolorPicker.val();
  bgcurrentColorEl.css({ color: bgColor });
  canvas.backgroundColor = bgColor;
});

activeColor.on('click', () => {
  colorPicker.click();
});

colorPicker.on('change', () => {
  currentColor = colorPicker.val();
  currentColorEl.css({ color: currentColor });
  canvas.freeDrawingBrush.color = currentColor;
});

sliderIp.on('change', () => {
  console.log(sliderIp.val());
  const currentWidth = sliderIp.val();
  canvas.freeDrawingBrush.width = currentWidth;
});

function outputsize() {
  const width = canvasDiv.offsetWidth;
  const height = canvasDiv.offsetHeight;
  // console.log(`${width} ${height}`);
  canvas.setHeight(height - 15);
  canvas.setWidth(width - 15);
}
new ResizeObserver(outputsize).observe(canvasDiv);

const changeMode = (t) => {
  if (t === 'e') {
    canvas.freeDrawingBrush.color = bgColor;
    canvas.freeDrawingBrush.width = 10;
    canvas.isDrawingMode = true;
  } else {
    canvas.freeDrawingBrush.color = currentColor;
  }
};

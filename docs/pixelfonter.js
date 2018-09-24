'use strict';

const srcCanvas = document.querySelector('#canvas');
let imageLoaded = false;
const downloadLink = document.querySelector('#download');

function regenerateFont(srcImage) {
	const haveWASM = typeof(Module) !== 'undefined' && typeof(Module.generate) !== 'undefined';
	if (!haveWASM && typeof(fonthx) === 'undefined') {
		return;
	}
	const ttf = haveWASM? Module.generate(srcImage) : fonthx.examples.pixelfonter.PixelFonterBrowserApp.generate(srcImage);
	const css = window.document.styleSheets[1];

	downloadLink.href = 'data:font/truetype;base64,' + ttf;

	css.insertRule("@font-face {font-family: 'pixelfont'; src:url(data:font/truetype;base64," + ttf + ") format('truetype');}", css.cssRules.length);
	if (css.rules.length > 1) {
		css.deleteRule(0);
	}
}

function ready() {
	fetch('pixel-font-5x5.png').then(function (resp) {
		return resp.blob()
	}).then(function (blob) {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = function () {
			regenerateFont(reader.result);
			imageLoaded = true;
		}
	});
}

// callback from WASM
function wasmReady() {
	if (imageLoaded) {
		regenerateFont(srcCanvas.toDataURL());
	} else {
		ready();
	}
}

// create editing cells
const img = new Image();
const scale = 8;
const cellSize = 5;
const cells = document.querySelector('#cells');
img.onload = function () {
	const numCells = (img.width / cellSize) * (img.height / cellSize);
	for (let idx = 0; idx < numCells; idx++) {
		const cell = document.createElement('canvas');
		cell.width = cellSize;
		cell.height = cellSize;

		let x = (idx * cellSize);
		const row = Math.floor(x / img.width);
		x = x % img.width;
		const y = row * cellSize;
		cell.dataset.x = x;
		cell.dataset.y = y;

		cell.getContext('2d').drawImage(img, 0 - x, 0 - y);
		cell.style.width = (cellSize * scale) + 'px';
		cell.style.height = (cellSize * scale) + 'px';

		cell.addEventListener('click', function (ev) {
			const cell = ev.target;
			const x = Math.floor(ev.offsetX / scale);
			const y = Math.floor(ev.offsetY / scale);
			const ctx = cell.getContext('2d');
			const srcCtx = srcCanvas.getContext('2d');
			const newFill = ctx.getImageData(x, y, 1, 1).data[0] === 0 ? 255 : 0;
			srcCtx.fillStyle = ctx.fillStyle = `rgba(${newFill}, ${newFill}, ${newFill}, 255)`;
			ctx.fillRect(x, y, 1, 1);
			srcCtx.fillRect(parseInt(cell.dataset.x) + x, parseInt(cell.dataset.y) + y, 1, 1);
			regenerateFont(srcCanvas.toDataURL());
		});

		cells.appendChild(cell);
	}
	const ctx = srcCanvas.getContext('2d');
	ctx.canvas.width = img.width;
	ctx.canvas.height = img.height;
	ctx.drawImage(img, 0, 0);
	ready();
};
img.src = 'pixel-font-5x5.png';
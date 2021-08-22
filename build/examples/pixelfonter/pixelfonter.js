'use strict';

const defaultOptions = {
  name: 'pixelfont',
  format: 'ttf',
  floatingPointCoords: false,
  shape: 2,
  includeSVG: false,
  svgSheet: false,
  glyphWidth: 5,
  glyphHeight: 6,
  codepointString: '65-90,97-122,33-58',
};

const makeEditor = (sectionId, options) => {
  const section = document.getElementById(sectionId);
  const srcImage = section.dataset.image;
  console.log("make editor " + sectionId, srcImage, options.name);
  const regenerateFont = image => {
    console.log('Generate for ' + options.name);
    const generate = fonthx.examples.pixelfonter.PixelFonterBrowserApp.generate;
    const downloadTTFLink = section.querySelector('.pf-downloadTTF');
    const ttf = generate(image, options);
    if (downloadTTFLink) {
      downloadTTFLink.href = 'data:font/truetype;base64,' + ttf;
    }
    const css = window.document.styleSheets[2];
    css.insertRule(`@font-face {font-family: ${options.name}; src:url(data:font/truetype;base64,${ttf}) format('truetype');}`, css.cssRules.length);
    const downloadOTFLink = section.querySelector('.pf-downloadOTF');
    if (downloadOTFLink) {
      const otf = generate(image, Object.assign(options, {format: 'otf'}));
      downloadOTFLink.href = 'data:font/opentype;base64,' + otf;
    }
    // const svgOtf = generate(image, Object.assign(baseOptions, {includeSVG: 'true'}));
    // downloadSVGLink.href = 'data:font/opentype;base64,' + svgOtf;
  };
  const srcCanvas = section.querySelector('.pf-canvas');
  // create editing cells
  const img = new Image();
  const scale = 8;
  const {glyphWidth, glyphHeight} = options;
  const cells = section.querySelector('.pf-cells');
  img.onload = () => {
    console.log("image loaded " + sectionId, srcImage, options.name);
    const numCells = (img.width / glyphWidth) * (img.height / glyphWidth);
    for (let idx = 0; idx < numCells; idx++) {
      const cell = document.createElement('canvas');
      cell.width = glyphWidth;
      cell.height = glyphHeight;
      let x = (idx * glyphWidth);
      const row = Math.floor(x / img.width);
      x = x % img.width;
      const y = row * glyphHeight;
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.getContext('2d').drawImage(img, 0 - x, 0 - y);
      cell.style.width = (glyphWidth * scale) + 'px';
      cell.style.height = (glyphHeight * scale) + 'px';
      cell.addEventListener('click', ev => {
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
    // todo – do we have to load this twice? does it matter?
    fetch(srcImage).then(resp => {
      return resp.blob()
    }).then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        regenerateFont(reader.result);
      }
    });
  };
  img.src = srcImage;
};

makeEditor('basic', defaultOptions);
makeEditor('color', Object.assign({}, defaultOptions, {
  name: 'pixelfontcolor',
  includeSVG: true
}));


const sections = document.querySelectorAll('.pf-page');
const menuButtons = document.querySelectorAll('[data-toggle]');
menuButtons.forEach(el => {
  el.addEventListener('click', () => {
    showSection(el.dataset.toggle);
  });
});

function showSection(id) {
  sections.forEach(el => el.style.display = 'none');
  menuButtons.forEach(el => {
    el.classList.toggle('pf-menuButton--active', el.dataset.toggle === id);
  });
  document.getElementById(id).style.display = 'block';
}
showSection('basic');


// ,65799-65804,' + Array.from(new Array(26), (el, idx) => {
//     return `${String.fromCharCode(65 + idx)}.sc`;
//   }).join(',')


//makeEditor('color', Object.assign(defaultOptions, {includeSVG: true, name: 'pixelfont-color'}));

/*

  features: {
    languageSystems: [
      {
        script: 'DFLT',
        language: 'DFLT'
      }
    ],
    features: [{
      name: 'smcp',
      lookups: [{
        type: 1,
        rules: Array.from(new Array(26), (el, idx) => {
          const c = String.fromCharCode(65 + idx);
          return [c, `${c}.sc`];
        })
      }]
    }],
  }

 */
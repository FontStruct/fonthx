'use strict';

const defaultOptions = {
  name: 'pixelfont',
  format: 'ttf',
  floatingPointCoords: false,
  shape: 1,
  includeSVG: false,
  svgSheet: false,
  glyphWidth: 5,
  glyphHeight: 6,
  codepointString: '65-90,97-122,33-58',
};

const makeEditor = (sectionId, options = {}) => {
  options = Object.assign({}, defaultOptions, options);
  const section = document.getElementById(sectionId);
  const srcImage = section.dataset.image;
  const regenerateFont = image => {
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
  };
  const srcCanvas = section.querySelector('.pf-canvas');
  // create editing cells
  const img = new Image();
  const scale = 8;
  const {glyphWidth, glyphHeight} = options;
  const cells = section.querySelector('.pf-cells');
  img.onload = () => {
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

makeEditor('basic');
makeEditor('color', {
  name: 'pixelfontcolor',
  includeSVG: true
});
makeEditor('smp', {
  name: 'pixelfontsmp',
  codepointString: defaultOptions.codepointString + ',65535-65560'
});
makeEditor('gsub', {
  name: 'pixelfontgsub',
  codepointString: defaultOptions.codepointString + ',' + (Array.from(new Array(26), (el, idx) => `${String.fromCharCode(65 + idx)}.sc`)).join(','),
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
          const c = String.fromCharCode(97 + idx);
          return [c, `${c.toUpperCase()}.sc`];
        })
      }]
    }, {
      name: 'c2sc',
      lookups: [{
        type: 1,
        rules: Array.from(new Array(26), (el, idx) => {
          const c = String.fromCharCode(65 + idx);
          return [c, `${c}.sc`];
        })
      }]
    }],
  }
});
makeEditor('liga', {
  name: 'pixelfontliga',
  codepointString: defaultOptions.codepointString + ',F_F,A_E,a_e,f_f,f_i,f_l',
  features: {
    languageSystems: [
      {
        script: 'DFLT',
        language: 'DFLT'
      }
    ],
    features: [{
      name: 'liga',
      lookups: [{
        type: 4,
        rules: [
          [[['F', 'F']], 'F_F'],
          [[['A', 'E']], 'A_E'],
          [[['a', 'e']], 'a_e'],
          [[['f', 'f']], 'f_f'],
          [[['f', 'i']], 'f_i'],
          [[['f', 'l']], 'f_l']
        ]
      }]
    }],
  }
});

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
    el.classList.toggle('pf-button--active', el.dataset.toggle === id);
  });
  document.getElementById(id).style.display = 'block';
}

let sectionId = 'basic';
if (window.location.hash) {
  let hash = window.location.hash.substr(1).replace('-example', '');
  if (hash && document.getElementById(hash)) {
    sectionId = hash;
  }
}
showSection(sectionId);

const featureToggles = document.querySelectorAll('[data-toggle-feature]');
featureToggles.forEach(el => {
  const featureTag = el.dataset.toggleFeature;
  const targets = document.querySelectorAll(el.dataset.toggleFeatureTarget);
  el.addEventListener('click', () => {
    targets.forEach(targetEl => {
      let currentSettings = targetEl.style.fontFeatureSettings;
      currentSettings = currentSettings.split(',').map(f => f.replace(/[\s\\"]+/g, ''));
      if (!currentSettings) {
        currentSettings = [];
      }
      if (currentSettings.indexOf(featureTag) === -1) {
        currentSettings.push(featureTag);
      } else {
        currentSettings = currentSettings.filter(f => f !== featureTag);
      }
      currentSettings = currentSettings.filter(f => f !== '');
      currentSettings = currentSettings.map(f => '"' + f + '"').join(',');
      targetEl.style.fontFeatureSettings = currentSettings;
    });
  });
});


const palatte = document.querySelector("#colorbox");

palatte.addEventListener("input", getcolor);
function getcolor() {
  const colorHex = palatte.value;
  showBox(colorHex);
  showhex(colorHex);
  showRgb(colorHex);
 
}
function showBox(boxcolor) {
  document.querySelector("#box").style.backgroundColor = boxcolor;

}

function showhex(hexcode) {
  document.querySelector("#HEX").innerText = `Hex code: ${hexcode}`;
}
function showRgb(hexcode) {
  const r = parseInt(hexcode.substring(1, 3), 16);
  const g = parseInt(hexcode.substring(3, 5), 16);
  const b = parseInt(hexcode.substring(5, 7), 16);
  const rgbresult = { r, g, b };
  showHsl(r, g, b);
  document.querySelector(
    "#RGB"
  ).innerText = `RGB :${rgbresult.r}, ${rgbresult.g}, ${rgbresult.b}`;
}
function showHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  document.querySelector("#HSL").innerText = `HSL : ${h.toFixed(1)}, ${s.toFixed(
    1
  )}, ${l.toFixed(1)}`;
}

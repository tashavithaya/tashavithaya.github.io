document.querySelectorAll('a').forEach(function (elem) {
  elem.onmouseenter = elem.onmouseleave = function (e) {
    var tolerance = 5;
    var left = 0;
    var right = elem.clientWidth;
    var x = e.pageX - elem.offsetLeft;
    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;
    elem.style.setProperty('--x', "".concat(x, "px"));
  };
});
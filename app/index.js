function navigate(page_name) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    //console.debug(this);
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "pages/" + page_name + ".html", true);
  xhttp.send();
}

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

var myMarked = require("marked");
myMarked.setOptions({
  breaks: true,
  sanitize: true,
  sanitizer: escapeHtml
});

function renderPreview(el) {
  document.getElementById("preview").querySelector("output").innerHTML = myMarked(el.value);
}

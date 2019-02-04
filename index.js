
function navigate(page_name) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //console.debug(this);
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "pages/"+page_name+".html", true);
    xhttp.send();
}

function renderPreview(el) {
    document.getElementById("preview").querySelector("output").innerHTML = marked(el.value);
}

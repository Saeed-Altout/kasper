/*Start Include Fiels Html In And Contact:To Search About With Enter In Chrome XMLHttpRequest()*/
function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}
/*End Include Fiels Html In And Contact*/

let includes = Array.from(document.querySelectorAll("[data-include]"));
includes.map((include) => {
    let file = include.dataset["include"] + ".html";
    load(include, file);
});

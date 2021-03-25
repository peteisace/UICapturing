var sass = require('./scss/main.scss');
import h2ml2canvas from 'html2canvas';

console.log('hello');

document.onmousemove = function(ev) {
    //console.log(ev.clientX, ev.clientY);
};

h2ml2canvas(document.body).then(function(canvas) {
    recurse(canvas, '\t');
    document.body.appendChild(canvas);
});


function recurse(element, tab) {
    console.log(tab + element.outerHTML);
    alert(element.childNodes.length);

    element.childNodes.forEach((el) => {
        tab += '\t';
        recurse(el, tab);
    });
}

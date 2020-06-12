
// ---------------------------------------------------

const doodle = document.querySelector('css-doodle');

// ---------------------------------------------------

let quotes;
let request = new XMLHttpRequest();
request.open('GET', 'quotes.json', true);

request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        let data = JSON.parse(this.response);
        quotes = data;
    } else {
        console.log(this.status)
    }
};

request.send();

// --------------------------------------------------

//  to do - start with random
//  to do - make sure next is not the same than previous

function updateText() {

    let entry = quotes[Math.floor(Math.random() * quotes.length)];

    let blockquoteContainer = document.getElementById('quote');
    blockquoteContainer.innerHTML = entry.text;
    blockquoteContainer.cite = entry.url;

    let citeContainer = document.getElementById('source');
    citeContainer.innerHTML = entry.source;

    let authorContainer = document.getElementById('author');
    authorContainer.innerHTML = entry.author;

    doodle.update()

}





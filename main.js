
// const numberOfSquares = num;
let squareDivs = 256;

while(squareDivs > 0) {
    const div = document.createElement('div');
    div.className = 'square'
    document.querySelector('#square-wrapper').appendChild(div);
    squareDivs--
}


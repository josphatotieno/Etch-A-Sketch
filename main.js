const squaresWrapper = document.querySelector('#square-wrapper');
let squareDivs = 16 * 16;

while(squareDivs > 0) {
        const div = document.createElement('div');
        div.className = 'square'
        document.querySelector('#square-wrapper').appendChild(div);
        squareDivs--
    }

document.querySelector('#btn').addEventListener('click', () => {

    const numberOfSquares = prompt('Enter number of squares to create grid');

    if(numberOfSquares !== '') {
        createGridOfSquares(numberOfSquares);
    }   
});

function createGridOfSquares(squares) {
    let squareDivs = squares * squares;
    
    squaresWrapper.innerHTML = '';

    while(squareDivs > 0) {
        const div = document.createElement('div');
        div.className = 'square';
        squaresWrapper.style.gridTemplateColumns = `repeat(${squares},30px)`;
        
        squaresWrapper.appendChild(div);

        squareDivs--;
    }
}

const random1 = Math.floor(Math.random() * 256);
const random2 = Math.floor(Math.random() * 256);
const random3 = Math.floor(Math.random() * 256);

squaresWrapper.addEventListener('mouseover', (e) => {
    if(e.target.className === 'square') {
        e.target.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    }
});

squaresWrapper.addEventListener('mouseout', (e) => {
    if(e.target.className === 'square') {
        e.target.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    }
});

console.log(random1,random2,random3);




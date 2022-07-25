const squaresWrapper = document.querySelector('#square-wrapper');
let squareDivs = 256;

while(squareDivs > 0) {
        const div = document.createElement('div');
        div.className = 'square'
        document.querySelector('#square-wrapper').appendChild(div);
        squareDivs--
    }

document.querySelector('#btn').addEventListener('click', () => {

    const numberOfSquares = prompt('Enter number of squares to create grid');

    if(numberOfSquares !== '') {
        createGridOfSquares(numberOfSquares)
    
    }

    
})

function createGridOfSquares(squares) {
    let squareDivs = squares * squares;
    
    squaresWrapper.innerHTML = '';

    while(squareDivs > 0) {
        const div1 = document.createElement('div');
        div1.className = 'new-square';
        squaresWrapper.style.gridTemplateColumns = `repeat(${squares},1fr)`;
        
        squaresWrapper.appendChild(div1);

        squareDivs--
    }
}






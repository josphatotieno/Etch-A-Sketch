const squaresWrapper = document.querySelector('#square-wrapper');
let squareDivs = 16 * 16;

while(squareDivs > 0) {
        const div = document.createElement('div');
        div.className = 'square'
        document.querySelector('#square-wrapper').appendChild(div);
        squareDivs--
    }

document.querySelector('#btn1').addEventListener('click', () => {

    const numberOfSquares = parseInt(prompt('Enter number of squares between 1-100 to create grid'));

    if(numberOfSquares > 0 && numberOfSquares <= 100) {
        createGridOfSquares(numberOfSquares);
    } else {
        alert('Please enter number between 1-100')
    }   
});

function createGridOfSquares(squares) {
    let squareDivs = squares * squares;
    
    squaresWrapper.innerHTML = '';

    while(squareDivs > 0) {
        const div = document.createElement('div');
        div.className = 'square';
        squaresWrapper.style.gridTemplateColumns = `repeat(${squares},minmax(0px,1fr))`;

        squaresWrapper.style.gridTemplateRows = `repeat(${squares},minmax(0px,1fr))`;

        squaresWrapper.appendChild(div);

        squareDivs--;
    }
}

document.querySelector('#randomColor-btn').addEventListener('click', () => {
    squaresWrapper.addEventListener('click', (e) => {
        if(e.target.className === 'square') {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
     });

})

document.querySelector('#colorpicker').addEventListener('input', (e) => {
    
    const colorPicked = e.target.value;

    squaresWrapper.addEventListener('click', (e) => {
        if(e.target.className === 'square') {
            e.target.style.backgroundColor = `${colorPicked}`;
        }
    });
    
});

document.querySelector('#eraser-btn').addEventListener('click', (e) => {
    
    squaresWrapper.addEventListener('click', (e) => {
        if(e.target.className === 'square') {
            e.target.style.backgroundColor = 'rgb(235, 235, 235)';
            e.target.style.transition = 'background-color .5s ease-in-out';
        }
    });

});




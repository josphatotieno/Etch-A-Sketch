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

const random1 = Math.floor(Math.random() * 256);
const random2 = Math.floor(Math.random() * 256);
const random3 = Math.floor(Math.random() * 256);

document.querySelector('#btn2').addEventListener('click', () => {
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

})

// squaresWrapper.addEventListener('mouseover', (e) => {
//     if(e.target.className === 'square') {
//         e.target.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
//     }
// });

// squaresWrapper.addEventListener('mouseout', (e) => {
//     if(e.target.className === 'square') {
//         e.target.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
//     }
// });

document.querySelector('#colorpicker').addEventListener('input', (e) => {
    
    const colorPicked = e.target.value;

    squaresWrapper.addEventListener('mouseover', (e) => {
        if(e.target.className === 'square') {
            e.target.style.backgroundColor = `${colorPicked}`;
        }
    });
    
    squaresWrapper.addEventListener('mouseout', (e) => {
        if(e.target.className === 'square') {
            e.target.style.backgroundColor = `${colorPicked}`;
        }
    });
})




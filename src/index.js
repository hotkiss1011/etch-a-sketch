//query selectors
let body = document.querySelector('body');
let sketchArea = document.querySelector('.sketch-area');
sketchArea.setAttribute('style', 'display: flex; flex-direction: column; border-radius: 15px;');
let colorBtn = document.querySelector('.color-btn');
let color = document.querySelector('#color');
let eraser = document.querySelector('.eraser');
let clear = document.querySelector('.clear');
let rows = document.querySelector('#rows');
let update = document.querySelector('.submit');
let rgbBtn = document.querySelector('.rgb-btn');
rgbBtn.addEventListener('click', function (){
    alert("Sorry! This feature isn't working just yet. Be sure to check back soon!")
});

//set start color
let colorInput = color.value;
colorBtn.setAttribute('style', `background-color: ${colorInput}`);

//on color button click, click color input
colorBtn.addEventListener('click', function() {
    color.click();
});

//on change of color value, update color input value and button background color
color.addEventListener('change', function() {
    colorInput = color.value;
    colorBtn.setAttribute('style', `background-color: ${colorInput}`);
    return colorInput;
})

//on click of eraser, turns color to white
eraser.addEventListener('click', function() {
    colorInput = '#ffffff';
});

//set number of row/columns
let n = 16;
let height = 500;
let width = 500;

function updateRows() {
    n = rows.value;
    sketchArea.innerHTML = '';
    makeGrid(n);
}

//makes grid that is n squares wide and n squares tall
function makeGrid(n) {
    update.addEventListener('click', updateRows);
    //this makes each of the rows
    for (let j=0; j < n; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'display: flex;')
        
        //this creates each square and puts it in a row
        for (let i=0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add(`square`);
            square.setAttribute('style', `border: 1px #e2e2e2 solid; width: ${Math.round(width/n)}px; height: ${Math.round(height/n)}px;`);
            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = colorInput;
            })
            
            row.appendChild(square);

            //clears all squares on click of clear button
            clear.addEventListener('click', function() {
                square.style.backgroundColor = "#ffffff";
            })
        }
        sketchArea.appendChild(row);
    }
}

//creates grid on load
makeGrid(n);

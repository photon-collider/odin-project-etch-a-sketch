container = document.querySelector("#container");

clearGridBtn = document.querySelector("#clear-grid-btn");

clearGridBtn.addEventListener('click', function () {
  activatedCells = document.querySelectorAll(".hovered-over")
  activatedCells.forEach((cell) => {
    cell.classList.remove('hovered-over');
  });

  let newGridSize = 1;

  do {
    newGridSize =  prompt("How many squares per side for the new grid?\n Choose Between (1- 128)");
  }
  while((newGridSize< 1) && (newGridSize > 128))

  while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }

  createGrid(newGridSize);
});


function createGrid (gridSize=16) {

  for (i=0; i < gridSize; i++){
    const divRow = document.createElement('div');
    divRow.classList.add('grid-row');
    for (j = 0; j < gridSize; j++){
      const divCell = document.createElement('div')
      cssWidthText = 'width: ' + 100/gridSize +"%;";
      divCell.style.cssText = cssWidthText ;

      divCell.classList.add('cell');

      divCell.addEventListener('mouseover',function () {
        divCell.classList.add('hovered-over')
      });

      divRow.appendChild(divCell);
    };

    container.appendChild(divRow);
  };


}


createGrid();

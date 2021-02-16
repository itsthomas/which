const numberList = Array(144)
  .fill()
  .map((val, idx) => idx + 1);

// source goes here
const app = function () {
  console.log("hello from app!");
  initGrid();
};

const initGrid = () => {
  var gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  gridContainer.className = "grid";
  numberList.forEach((number, idx) => {
    const currTile = document.createElement("div");
    currTile.innerHTML = number;
    currTile.addEventListener("click", (e) => {
      handleClick(e, idx);
    });
    gridContainer.appendChild(currTile);
  });
  var gridContainerOuter = document.createElement("div");
  gridContainerOuter.setAttribute("class", "grid-outer");
  gridContainerOuter.appendChild(gridContainer)
  document.body.appendChild(gridContainerOuter);
};

const handleClick = async (e, tileIndex) => {
  const allTiles = document.getElementById("grid-container").children;
  // remove existing colored tiles
  for (let i = 0; i < 144; i++) {
    allTiles.item(i).removeAttribute("class");
  }
  // calculate multiples
  const multiples = getMultiples(tileIndex + 1);
  // color new tiles
  multiples.forEach((multiple) => {
    allTiles.item(multiple - 1).setAttribute("class", "coloured-tile");
  });
  allTiles.item(tileIndex).className = "coloured-tile";
};

export const getMultiples = (selectedNumber) =>
  numberList.filter((num) => num % selectedNumber === 0);

export default app;

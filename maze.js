const maze = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[1, 0, 0, 0, 1, 0, 0, 0, 0, 1],[1, 0, 1, 0, 1, 0, 1, 1, 0, 1],[1, 0, 1, 0, 0, 0, 1, 0, 0, 1],[1, 0, 1, 1, 1, 0, 1, 1, 0, 1],[1, 0, 0, 0, 1, 0, 0, 0, 0, 1],[1, 1, 1, 0, 1, 1, 1, 1, 0, 1],[1, 0, 0, 0, 0, 0, 0, 1, 0, 1],[1, 0, 1, 1, 1, 1, 0, 1, 0, 1],[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],];
const mazeContainer = document.getElementById('maze');
const player = document.createElement('div');
player.classList.add('cell', 'player');

let playerPosition = {x: 1, y: 1};
let exitPosition = {x: 8, y: 8};
function drawMaze() {
    mazeContainer.innerHTML = '';
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if(maze[y][x] === 1)
                cell.classList.add('wall');
            if(x === playerPosition.x && y === playerPosition.y)
                cell.appendChild(player);
            if(x === exitPosition.x && y === exitPosition.y){
                cell.classList.add('exit');
                cell.innerHTML = '&#x1F3C1;';
            }
            mazeContainer.append(cell);
        }
    }
}
function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;
    if (maze[newY][newX] !== 1){
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawMaze();
        checkWin();
    }
}
function checkWin() {
    if (playerPosition.x === exitPosition.x && playerPosition.y === exitPosition.y){
        setTimeout(() => 
        alert('Congratulations! You Escaped the maze.'),100);
        arrow.innerText = "Congratulations! You Escaped the maze.";
    }
}
 
document.addEventListener('keydown',(e) => {
    if (e.key === 'ArrowUp')
        movePlayer(0, -1);
    if (e.key === 'ArrowDown')
        movePlayer(0, 1);
    if (e.key === 'ArrowLeft')
        movePlayer(-1, 0);
    if (e.key === 'ArrowRight')
        movePlayer(1, 0);
});
drawMaze();
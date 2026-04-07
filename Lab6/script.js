document.addEventListener("DOMContentLoaded", () => {
    const gridElement = document.getElementById('grid');
    const movesCounter = document.getElementById('moves-counter');
    const minMovesElement = document.getElementById('min-moves');
    const btnRestart = document.getElementById('btn-restart');
    const btnNewGame = document.getElementById('btn-new-game');
    const winMessage = document.getElementById('win-message');

    let levels = [];
    let currentLevel = null;
    let gridState = [];
    let moves = 0;

   
    fetch('data/levels.json')
        .then(response => response.json())
        .then(data => {
            levels = data;
            startNewGame();
        })
        .catch(error => console.error("Помилка завантаження рівнів:", error));

    function startNewGame() {
     
        const randomIndex = Math.floor(Math.random() * levels.length);
        currentLevel = levels[randomIndex];
        resetGame();
    }

    function resetGame() {
       
        gridState = currentLevel.grid.map(row => [...row]);
        moves = 0;
        minMovesElement.textContent = currentLevel.minMoves;
        updateUI();
        winMessage.classList.add('hidden');
    }

    function updateUI() {
        movesCounter.textContent = moves;
        gridElement.innerHTML = '';

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                
                if (gridState[row][col] === 1) {
                    cell.classList.add('is-on');
                } else {
                    cell.classList.add('is-off');
                }

                cell.addEventListener('click', () => handleCellClick(row, col));
                gridElement.appendChild(cell);
            }
        }
    }

    function handleCellClick(row, col) {
        if (!winMessage.classList.contains('hidden')) return; // Гра завершена

        moves++;
        toggleCell(row, col);       
        toggleCell(row - 1, col);   
        toggleCell(row + 1, col);   
        toggleCell(row, col - 1);   
        toggleCell(row, col + 1);   

        updateUI();
        checkWinCondition();
    }

    function toggleCell(row, col) {
        if (row >= 0 && row < 5 && col >= 0 && col < 5) {
            gridState[row][col] = gridState[row][col] === 1 ? 0 : 1;
        }
    }

    function checkWinCondition() {
        const hasLightOn = gridState.some(row => row.includes(1));
        if (!hasLightOn) {
            winMessage.classList.remove('hidden');
        }
    }

    
    btnRestart.addEventListener('click', resetGame);
    btnNewGame.addEventListener('click', startNewGame);
});

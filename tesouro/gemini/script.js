// Constantes e variáveis globais
const DURATION_SECONDS = 90 * 60; // 90 minutos
let timeRemaining = DURATION_SECONDS;
let timerInterval;
let gameStatus = 'initial'; // 'initial', 'playing', 'paused', 'finished'

let teams = []; // Array para armazenar as equipes

// Mapeamento dos sobreviventes e suas cartas
const survivors = {
    d: { name: 'Daniel', fragment: 'EM JERUSALÉM', cards: [{ score: 25, stars: 3 }, { score: 20, stars: 2 }, { score: 15, stars: 1 }, { score: 30, stars: 4, rare: true }, { score: 10, stars: 1 }] },
    e: { name: 'Ester', fragment: 'O CORAÇÃO PURO', cards: [{ score: 22, stars: 3 }, { score: 18, stars: 2 }, { score: 12, stars: 1 }, { score: 28, stars: 4, rare: true }, { score: 8, stars: 1 }] },
    n: { name: 'Neemias', fragment: 'SERÁ TRANSFORMADO', cards: [{ score: 24, stars: 3 }, { score: 19, stars: 2 }, { score: 14, stars: 1 }, { score: 32, stars: 4, rare: true }, { score: 9, stars: 1 }] },
    m: { name: 'Miriã', fragment: 'PELO PODER', cards: [{ score: 21, stars: 3 }, { score: 16, stars: 2 }, { score: 11, stars: 1 }, { score: 27, stars: 4, rare: true }, { score: 6, stars: 1 }] },
    s: { name: 'Esdras', fragment: 'DO ESPÍRITO SANTO', cards: [{ score: 23, stars: 3 }, { score: 17, stars: 2 }, { score: 13, stars: 1 }, { score: 29, stars: 4, rare: true }, { score: 7, stars: 1 }] },
    z: { name: 'Zorobabel', fragment: 'E PELA PALAVRA', cards: [{ score: 26, stars: 3 }, { score: 20, stars: 2 }, { score: 15, stars: 1 }, { score: 35, stars: 5, superRare: true }, { score: 10, stars: 1 }] },
};

// Referências aos elementos do DOM
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerMessageEl = document.getElementById('timer-message');
const teamNameInput = document.getElementById('team-name-input');
const addTeamBtn = document.getElementById('add-team-btn');
const teamsListEl = document.getElementById('teams-list');
const rankingListEl = document.getElementById('ranking-list');

// Referências dos modais
const modalFragment = document.getElementById('modal-fragment');
const modalScore = document.getElementById('modal-score');
const survivorSelect = document.getElementById('survivor-select');
const cardSelect = document.getElementById('card-select');
const modalTeamNameFragment = document.getElementById('modal-team-name-fragment');
const modalTeamNameScore = document.getElementById('modal-team-name-score');
const manualScoreInput = document.getElementById('manual-score-input');
const addFragmentBtn = document.getElementById('add-fragment-btn');
const updateScoreBtn = document.getElementById('update-score-btn');
const closeBtns = document.querySelectorAll('.close-btn');

// Funções do Timer
function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    
    // Alerta de tempo
    if (timeRemaining <= 30 * 60 && timeRemaining > 15 * 60) {
        timerMessageEl.textContent = 'O tempo está acabando! Foco na jornada.';
        minutesEl.style.color = '#FFA500'; // Laranja
    } else if (timeRemaining <= 15 * 60 && timeRemaining > 5 * 60) {
        timerMessageEl.textContent = 'O final se aproxima! A perseverança é a chave.';
        minutesEl.style.color = '#FF8C00'; // Laranja mais escuro
    } else if (timeRemaining <= 5 * 60 && timeRemaining > 0) {
        timerMessageEl.textContent = 'Últimos minutos! O Espírito Santo guia o seu caminho!';
        minutesEl.style.color = '#B22222'; // Vermelho
    } else if (timeRemaining <= 0) {
        timerMessageEl.textContent = 'Tempo esgotado! A sua jornada continua, mas o desafio do tempo terminou.';
        endGame();
    }
}

function startTimer() {
    if (gameStatus === 'playing' || gameStatus === 'finished') return;
    gameStatus = 'playing';
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}

function pauseTimer() {
    if (gameStatus !== 'playing') return;
    gameStatus = 'paused';
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = DURATION_SECONDS;
    gameStatus = 'initial';
    updateTimerDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    timerMessageEl.textContent = 'Tempo restante: 90 minutos';
    minutesEl.style.color = 'var(--primary-color)';
}

// Funções de Equipe e Pontuação
function renderTeams() {
    teamsListEl.innerHTML = '';
    teams.forEach(team => {
        const teamItem = document.createElement('div');
        teamItem.classList.add('team-item');
        teamItem.setAttribute('data-id', team.id);

        let statusClass = '';
        if (team.status === 'playing') statusClass = 'status-playing';
        else if (team.status === 'finished') statusClass = 'status-finished';
        else if (team.status === 'timeout') statusClass = 'status-timeout';

        teamItem.innerHTML = `
            <div class="team-details">
                <span class="team-name">${team.name}</span>
                <span class="team-score">Pontos: ${team.score}</span>
                <span class="team-status ${statusClass}">${team.status.toUpperCase()}</span>
                <div class="team-fragments-display">
                    ${Object.values(survivors).map(s => {
                        const hasFragment = team.fragments.includes(s.fragment);
                        return `<span class="fragment-icon" style="background-color: ${hasFragment ? 'var(--success-color)' : '#ccc'};" title="${s.name}: ${s.fragment}"></span>`;
                    }).join('')}
                </div>
            </div>
            <div class="team-controls">
                <button class="add-fragment-btn control-btn" data-team-id="${team.id}">+ Fragmento</button>
                <button class="manual-score-btn control-btn" data-team-id="${team.id}">+ Pontos</button>
                <button class="finish-game-btn control-btn" data-team-id="${team.id}">Finalizar</button>
            </div>
        `;
        teamsListEl.appendChild(teamItem);
    });

    // Adiciona event listeners aos novos botões
    document.querySelectorAll('.add-fragment-btn').forEach(button => {
        button.addEventListener('click', openFragmentModal);
    });

    document.querySelectorAll('.manual-score-btn').forEach(button => {
        button.addEventListener('click', openScoreModal);
    });

    document.querySelectorAll('.finish-game-btn').forEach(button => {
        button.addEventListener('click', handleFinishGame);
    });

    renderRanking();
}

function addTeam() {
    const name = teamNameInput.value.trim();
    if (name === '') {
        alert('Por favor, insira o nome da equipe.');
        return;
    }

    const newTeam = {
        id: Date.now(),
        name: name,
        score: 0,
        status: 'playing',
        fragments: [],
        completionTime: null,
    };
    teams.push(newTeam);
    teamNameInput.value = '';
    renderTeams();
}

// Funções de Ranking
function renderRanking() {
    // Ordena as equipes
    const sortedTeams = [...teams].sort((a, b) => {
        if (a.status === 'finished' && b.status !== 'finished') return -1;
        if (a.status !== 'finished' && b.status === 'finished') return 1;
        
        if (a.status === 'finished' && b.status === 'finished') {
            if (a.completionTime !== b.completionTime) {
                return a.completionTime - b.completionTime; // Quem terminou primeiro fica na frente
            }
        }
        return b.score - a.score; // Em caso de empate no status/tempo, ordena pela pontuação
    });

    rankingListEl.innerHTML = '';
    sortedTeams.forEach((team, index) => {
        const rankingItem = document.createElement('li');
        rankingItem.classList.add('ranking-item');

        if (index === 0) rankingItem.classList.add('gold');
        else if (index === 1) rankingItem.classList.add('silver');
        else if (index === 2) rankingItem.classList.add('bronze');

        rankingItem.innerHTML = `
            <span class="rank">${index + 1}</span>
            <div class="team-details">
                <span class="team-name">${team.name}</span>
                <span class="team-score">Pontos: ${team.score}</span>
            </div>
        `;
        rankingListEl.appendChild(rankingItem);
    });
}

// Funções de Modal
let currentTeamId;

function openFragmentModal(event) {
    currentTeamId = parseInt(event.target.getAttribute('data-team-id'));
    const team = teams.find(t => t.id === currentTeamId);
    if (!team || team.status !== 'playing') {
        alert('Não é possível adicionar fragmentos para esta equipe.');
        return;
    }
    modalTeamNameFragment.textContent = team.name;
    modalFragment.style.display = 'block';
    
    // Preenche as opções de sobreviventes e cartas
    survivorSelect.innerHTML = Object.entries(survivors).map(([key, value]) => `<option value="${key}">${value.name}</option>`).join('');
    updateCardOptions();
}

function updateCardOptions() {
    const survivorKey = survivorSelect.value;
    const survivor = survivors[survivorKey];
    cardSelect.innerHTML = survivor.cards.map((card, index) => {
        const rareText = card.rare ? ' (Carta Rara!)' : (card.superRare ? ' (Carta Super Rara!)' : '');
        return `<option value="${index}">${survivor.fragment} - ${card.score} pontos ${'⭐'.repeat(card.stars)}${rareText}</option>`;
    }).join('');
}

function handleAddFragment() {
    const team = teams.find(t => t.id === currentTeamId);
    const survivorKey = survivorSelect.value;
    const cardIndex = parseInt(cardSelect.value);

    const fragment = survivors[survivorKey].fragment;
    const card = survivors[survivorKey].cards[cardIndex];

    if (team.fragments.includes(fragment)) {
        alert('Esta equipe já possui este fragmento.');
        return;
    }

    team.fragments.push(fragment);
    team.score += card.score;
    renderTeams();
    closeModals();
}

function openScoreModal(event) {
    currentTeamId = parseInt(event.target.getAttribute('data-team-id'));
    const team = teams.find(t => t.id === currentTeamId);
    if (!team) return;
    modalTeamNameScore.textContent = team.name;
    modalScore.style.display = 'block';
    manualScoreInput.value = '';
}

function handleUpdateScore() {
    const team = teams.find(t => t.id === currentTeamId);
    const scoreToAdd = parseInt(manualScoreInput.value);
    if (isNaN(scoreToAdd)) {
        alert('Por favor, insira um número válido.');
        return;
    }
    team.score += scoreToAdd;
    renderTeams();
    closeModals();
}

function closeModals() {
    modalFragment.style.display = 'none';
    modalScore.style.display = 'none';
}

function handleFinishGame(event) {
    const teamId = parseInt(event.target.getAttribute('data-team-id'));
    const team = teams.find(t => t.id === teamId);
    if (!team) return;

    if (team.status !== 'playing') {
        alert('Esta equipe já finalizou o jogo.');
        return;
    }

    team.status = 'finished';
    team.completionTime = DURATION_SECONDS - timeRemaining;
    renderTeams();
}

function endGame() {
    gameStatus = 'finished';
    teams.forEach(team => {
        if (team.status === 'playing') {
            team.status = 'timeout';
        }
    });
    clearInterval(timerInterval);
    renderTeams();
    // Você pode adicionar a lógica de cálculo de pontuação final aqui
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
addTeamBtn.addEventListener('click', addTeam);
survivorSelect.addEventListener('change', updateCardOptions);
addFragmentBtn.addEventListener('click', handleAddFragment);
updateScoreBtn.addEventListener('click', handleUpdateScore);

closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModals);
});

window.addEventListener('click', (event) => {
    if (event.target === modalFragment) {
        modalFragment.style.display = 'none';
    }
    if (event.target === modalScore) {
        modalScore.style.display = 'none';
    }
});

// Inicializa a exibição do timer
updateTimerDisplay();
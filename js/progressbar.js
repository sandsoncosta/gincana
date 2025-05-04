// Definindo as cores dos times
const coresTimes = {
  "Sementes Ágape": "#2ecc71",
  "Novos Convertidos": "#3498db",
  "Novos Membros": "#9b59b6",
  "Liga Teen": "#e74c3c",
  "Liga": "#e67e22",
  "Adultos": "#34495e"
};
// Dados da gincana com pontuações por categoria
const pontuacoesPorTime01_05 = [
  {
    time: "Sementes Ágape",
    espadas: 0,
    versiculo: 150,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Novos Convertidos",
    espadas: 0,
    versiculo: 250,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Liga Teen",
    espadas: 60,
    versiculo: 300,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Liga",
    espadas: 0,
    versiculo: 150,
    biblia: 40,
    visitantes: 0,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Novos Membros",
    espadas: 20,
    versiculo: 200,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Adultos",
    espadas: 20,
    versiculo: 300,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  }
];


// Dados para 04/05 (você pode substituir por dados reais quando tiver)
const pontuacoesPorTime04_05 = [
  {
    time: "Sementes Ágape",
    espadas: 40,
    versiculo: 150,
    biblia: 0,
    visitantes: 44,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Novos Convertidos",
    espadas: 0,
    versiculo: 300,
    biblia: 34,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Liga Teen",
    espadas: 60,
    versiculo: 300,
    biblia: 0,
    visitantes: 57,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Liga",
    espadas: 0,
    versiculo: 150,
    biblia: 40,
    visitantes: 43,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Novos Membros",
    espadas: 20,
    versiculo: 200,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Adultos",
    espadas: 20,
    versiculo: 300,
    biblia: 0,
    visitantes: 44,
    caracterizacao: 0,
    grito: 10
  }

];

// Dados para 04/05 (você pode substituir por dados reais quando tiver)
const pontuacoesPorTime05_05 = [
  {
    time: "Sementes Ágape",
    espadas: 40,
    versiculo: 150,
    biblia: 0,
    visitantes: 44,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Novos Convertidos",
    espadas: 0,
    versiculo: 300,
    biblia: 34,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Liga Teen",
    espadas: 60,
    versiculo: 300,
    biblia: 0,
    visitantes: 57,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Liga",
    espadas: 0,
    versiculo: 150,
    biblia: 40,
    visitantes: 43,
    caracterizacao: 20,
    grito: 10
  },
  {
    time: "Novos Membros",
    espadas: 20,
    versiculo: 200,
    biblia: 0,
    visitantes: 0,
    caracterizacao: 0,
    grito: 10
  },
  {
    time: "Adultos",
    espadas: 20,
    versiculo: 300,
    biblia: 0,
    visitantes: 44,
    caracterizacao: 0,
    grito: 10
  }
  
];


// Função para calcular o total de cada time
function calcularTotal(time) {
  return time.espadas + time.versiculo + time.biblia + time.visitantes + time.caracterizacao + time.grito;
}

// Preparar dados para o gráfico
function prepararDadosGrafico() {
  // Criar arrays com nomes dos times
  const nomesTimes = pontuacoesPorTime01_05.map(time => time.time);
  
  // Preparar dados para o formato esperado pelo Chart.js
  const dadosGrafico = {
    labels: ['01/05', '04/05', '05/05'],
    datasets: nomesTimes.map(nomeTime => {
      const time01_05 = pontuacoesPorTime01_05.find(t => t.time === nomeTime);
      const time04_05 = pontuacoesPorTime04_05.find(t => t.time === nomeTime);
      const time05_05 = pontuacoesPorTime05_05.find(t => t.time === nomeTime);
      
      return {
        label: nomeTime,
        data: [
          calcularTotal(time01_05),
          calcularTotal(time04_05),
          calcularTotal(time05_05)
        ],
        backgroundColor: coresTimes[nomeTime],
        borderColor: coresTimes[nomeTime],
        tension: 0.1,
        borderWidth: 2
      };
    })
  };
  
  return dadosGrafico;
}
  
// Criar o gráfico
function criarGrafico() {
  const ctx = document.getElementById('gincanaChart').getContext('2d');
  const dadosGrafico = prepararDadosGrafico();
  
  const myChart = new Chart(ctx, {
      type: 'line',
      data: dadosGrafico,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true, // Título lateral do eixo Y
                      text: 'Pontos',
                      color: '#fff'  // Título do eixo Y branco
                  },
                  ticks: {
                      color: '#fff'  // Ticks do eixo Y brancos
                  }
              },
              x: {
                  title: {
                      display: false,  // Título inferior do eixo X
                      text: 'Datas',
                      color: '#fff'  // Título do eixo X branco
                  },
                  ticks: {
                      color: '#fff'  // Ticks do eixo X brancos
                  }
              }
          },
          plugins: {
              legend: {
                  position: 'bottom',
                  labels: {
                      color: '#fff'  // Cor das legendas (nomes) brancas
                  }
              },
              tooltip: {
                  enabled: false // Desabilitar tooltips para não mostrar pontuações
              },
              datalabels: {
                  display: false // Desabilitar números nos pontos do gráfico
              }
          }
      },
      plugins: [ChartDataLabels] // Certifique-se de que o plugin ChartDataLabels está carregado
  });
}
  
// Criar cards para cada time
function criarCards() {
  const teamsContainer = document.getElementById('teamsContainer');
  
  Object.entries(coresTimes).forEach(([time, cor]) => {
    const pontos01_05 = calcularTotal(pontuacoesPorTime01_05.find(t => t.time === time));
    const pontos04_05 = calcularTotal(pontuacoesPorTime04_05.find(t => t.time === time));
    const pontos05_05 = calcularTotal(pontuacoesPorTime05_05.find(t => t.time === time));
    
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.borderLeft = `4px solid ${cor}`;
    
    card.innerHTML = `
      <h4>${time}</h4>
      <div class="team-points">
        <span>01/05:<br>${pontos01_05} pontos</span>
        <span>04/05:<br>${pontos04_05} pontos</span>
        <span>05/05:<br>${pontos05_05} pontos</span>
      </div>
    `;
    
    teamsContainer.appendChild(card);
  });
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
  criarGrafico();
  criarCards();
});

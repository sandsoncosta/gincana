// Definindo as cores dos times
const coresTimes = {
  "Sementes Ágape": "#2ecc71",
  "Novos Convertidos": "#3498db",
  "Novos Membros": "#9b59b6",
  "Liga Teen": "#e74c3c",
  "Liga": "#e67e22",
  "Adultos": "#34495e"
};

// Estrutura de dados dinâmica para as pontuações - organizada por data
const pontuacoesPorData = {
  "01/05": [
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
  ],
  "04/05": [
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
  ],
  "05/05": [
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
  ],
  "18/05": [
    {
      time: "Sementes Ágape",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Novos Convertidos",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Liga Teen",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Liga",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Novos Membros",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Adultos",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    }
  ],
  "25/05": [
    {
      time: "Sementes Ágape",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Novos Convertidos",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Liga Teen",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Liga",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Novos Membros",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    },
    {
      time: "Adultos",
      espadas: 0,
      versiculo: 0,
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 0
    }
  ]
};

// Função para calcular o total de cada time
function calcularTotal(time) {
  return time.espadas + time.versiculo + time.biblia + time.visitantes + time.caracterizacao + time.grito;
}

// Preparar dados para o gráfico de pontuação total
function prepararDadosTotais() {
  // Obter todas as datas disponíveis
  const datas = Object.keys(pontuacoesPorData).sort();
  
  // Obter todos os nomes dos times
  const nomesTimes = pontuacoesPorData[datas[0]].map(time => time.time);
  
  // Calcular pontuação total de cada time (soma de todas as datas)
  const pontuacaoTotal = {};
  nomesTimes.forEach(nomeTime => {
    pontuacaoTotal[nomeTime] = 0;
    datas.forEach(data => {
      const timeData = pontuacoesPorData[data].find(t => t.time === nomeTime);
      pontuacaoTotal[nomeTime] += calcularTotal(timeData);
    });
  });
  
  // Retornar array formatado para o gráfico de barras
  return {
    labels: Object.keys(pontuacaoTotal),
    dados: Object.values(pontuacaoTotal),
    cores: Object.keys(pontuacaoTotal).map(time => coresTimes[time])
  };
}

// Preparar dados para gráficos de categoria específica
function prepararDadosCategoria(categoria) {
  // Obter todas as datas disponíveis
  const datas = Object.keys(pontuacoesPorData).sort();
  
  // Obter todos os nomes dos times
  const nomesTimes = pontuacoesPorData[datas[0]].map(time => time.time);
  
  // Calcular pontuação da categoria para cada time (soma de todas as datas)
  const pontuacaoCategoria = {};
  nomesTimes.forEach(nomeTime => {
    pontuacaoCategoria[nomeTime] = 0;
    datas.forEach(data => {
      const timeData = pontuacoesPorData[data].find(t => t.time === nomeTime);
      pontuacaoCategoria[nomeTime] += timeData[categoria] || 0;
    });
  });
  
  // Retornar dados formatados
  return {
    labels: Object.keys(pontuacaoCategoria),
    dados: Object.values(pontuacaoCategoria),
    cores: Object.keys(pontuacaoCategoria).map(time => coresTimes[time])
  };
}

// Ordenar dados por pontuação (do maior para o menor)
function ordenarDadosPorPontuacao(dados) {
  // Criar array de objetos com label e valor para ordenação
  const itemsParaOrdenar = dados.labels.map((label, index) => ({
    label,
    valor: dados.dados[index],
    cor: dados.cores[index]
  }));
  
  // Ordenar do maior para o menor
  itemsParaOrdenar.sort((a, b) => b.valor - a.valor);
  
  // Recriar o objeto de dados com os itens ordenados
  return {
    labels: itemsParaOrdenar.map(item => item.label),
    dados: itemsParaOrdenar.map(item => item.valor),
    cores: itemsParaOrdenar.map(item => item.cor)
  };
}

// Criar gráfico de barras horizontal
function criarGraficoBarrasHorizontal(elementId, titulo, dados) {
  const ctx = document.getElementById(elementId).getContext('2d');
  
  // Ordenar dados
  const dadosOrdenados = ordenarDadosPorPontuacao(dados);
  
  // Criar o gráfico
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dadosOrdenados.labels,
      datasets: [{
        label: titulo,
        data: dadosOrdenados.dados,
        backgroundColor: dadosOrdenados.cores,
        borderColor: dadosOrdenados.cores,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // Define o eixo y como eixo de índice (barras horizontais)
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Oculta a legenda
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw} pontos`;
            }
          }
        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold'
          },
          formatter: (value) => {
            return value;
          }
        }
      },
      scales: {
        y: {
          ticks: {
            color: '#fff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          beginAtZero: true,
          ticks: {
            color: '#fff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

// Criar cards para cada time
function criarCards() {
  const teamsContainer = document.getElementById('teamsContainer');
  teamsContainer.innerHTML = ''; // Limpar container
  
  const datas = Object.keys(pontuacoesPorData).sort();
  
  // Calcular totais para ordenação
  const timesTotais = [];
  
  Object.entries(coresTimes).forEach(([time, cor]) => {
    let totalPontos = 0;
    
    datas.forEach(data => {
      const timeData = pontuacoesPorData[data].find(t => t.time === time);
      if (timeData) totalPontos += calcularTotal(timeData);
    });
    
    timesTotais.push({ time, cor, totalPontos });
  });
  
  // Ordenar times por pontuação total
  timesTotais.sort((a, b) => b.totalPontos - a.totalPontos);
  
  // Criar cards na ordem
  timesTotais.forEach(({ time, cor, totalPontos }) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.borderLeft = `4px solid ${cor}`;
    
    // Construir o conteúdo HTML do card
    let cardHTML = `<h4>${time}</h4><div class="team-points">`;
    
    // Adicionar pontuação para cada data
    datas.forEach(data => {
      const timeData = pontuacoesPorData[data].find(t => t.time === time);
      const pontos = calcularTotal(timeData);
      cardHTML += `<span>${data}:<br>${pontos} pontos</span>`;
    });
    
    cardHTML += `</div>`;
    card.innerHTML = cardHTML;
    
    teamsContainer.appendChild(card);
  });
}

// Criar todos os gráficos
function criarTodosGraficos() {
  // Limpar gráficos existentes
  Chart.helpers.each(Chart.instances, (chart) => {
    chart.destroy();
  });
  
  // Gráfico de pontuação total
  const containerTotal = document.createElement('div');
  containerTotal.className = 'grafico-container';
  containerTotal.innerHTML = `
    <div class="grafico-titulo">Pontuação Total</div>
    <canvas id="graficoTotal"></canvas>
  `;
  document.querySelector('#progresso .chart-container').appendChild(containerTotal);
  
  // Criar gráficos para cada categoria
  const categorias = [
    { id: 'espadas', nome: 'Espadas para o Ar' },
    { id: 'versiculo', nome: 'Versículo' },
    { id: 'biblia', nome: 'Bíblias' },
    { id: 'visitantes', nome: 'Visitantes' },
    { id: 'caracterizacao', nome: 'Caracterização' },
    { id: 'grito', nome: 'Grito de Guerra' }
  ];
  
  // Container para categorias
  const containerCategorias = document.createElement('div');
  containerCategorias.className = 'categorias-container';
  document.querySelector('#progresso .chart-container').appendChild(containerCategorias);
  
  // Criar gráfico total
  criarGraficoBarrasHorizontal(
    'graficoTotal',
    'Pontuação Total',
    prepararDadosTotais()
  );
  
  // Criar gráfico para cada categoria
  categorias.forEach(categoria => {
    // Criar container
    const container = document.createElement('div');
    container.className = 'grafico-container';
    container.innerHTML = `
      <div class="grafico-titulo">Pontuação: ${categoria.nome}</div>
      <canvas id="grafico${categoria.id}"></canvas>
    `;
    containerCategorias.appendChild(container);
    
    // Criar gráfico
    criarGraficoBarrasHorizontal(
      `grafico${categoria.id}`,
      categoria.nome,
      prepararDadosCategoria(categoria.id)
    );
  });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Limpar conteúdo da div chart-container
  const chartContainer = document.querySelector('#progresso .chart-container');
  chartContainer.innerHTML = '';
  
  // Criar gráficos
  criarTodosGraficos();
  
  // Criar cards
  criarCards();
});
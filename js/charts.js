// Configuração base para todos os gráficos - Placar Geral
export function criarConfiguracaoBase(labels, dados, cores, sufixo = '') {
  return {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: dados,
        backgroundColor: cores,
        borderColor: cores,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false

        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold',
            size: 14
          },
          anchor: 'end',
          align: 'top',
          offset: -5,
          formatter: function(value) {
            return value + sufixo;
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Times',
            color: '#fff'
          },
          ticks: {
            display: false,
            color: '#fff'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Pontuação',
            color: '#fff'
          },
          ticks: {
            display: true,
            color: '#fff'
          },
          suggestedMax: Math.max(...dados) * 1.2 || 10
        }
      }
    }
  };
}

// Função para criar um gráfico
export function criarGrafico(idCanvas, labels, dados, cores, sufixo = '') {
  const ctx = document.getElementById(idCanvas).getContext('2d');
  return new Chart(ctx, criarConfiguracaoBase(labels, dados, cores, sufixo));
}

// Função para inicializar todos os gráficos
export function inicializarGraficos(dadosGraficos, coresTimes) {
  // Registrar o plugin datalabels
  Chart.register(ChartDataLabels);
  
  // Criar gráfico de classificação geral
  criarGrafico(
    'graficoClassificacaoGeral',
    dadosGraficos.geral.times,
    dadosGraficos.geral.pontuacoes,
    dadosGraficos.geral.times.map(time => coresTimes[time])
  );
  
  // Criar gráfico de espadas para o ar
  criarGrafico(
    'graficoEspadasParaOAr',
    dadosGraficos.espadas.times,
    dadosGraficos.espadas.pontuacoes,
    dadosGraficos.espadas.times.map(time => coresTimes[time])
  );
  
  // Criar gráfico de quiz bíblico
  criarGrafico(
    'graficoQuiz',
    dadosGraficos.versiculo.times,
    dadosGraficos.versiculo.pontuacoes,
    dadosGraficos.versiculo.times.map(time => coresTimes[time])
  );
  
  // Criar gráfico de bíblias
  criarGrafico(
    'graficoBiblias',
    dadosGraficos.biblia.times,
    dadosGraficos.biblia.pontuacoes,
    dadosGraficos.biblia.times.map(time => coresTimes[time])
    // '%'
  );
  
  // Criar gráfico de visitantes
  criarGrafico(
    'graficoVisitantes',
    dadosGraficos.visitantes.times,
    dadosGraficos.visitantes.pontuacoes,
    dadosGraficos.visitantes.times.map(time => coresTimes[time])
  );
  
  // Criar gráfico de caracterização
  criarGrafico(
    'graficoCaracterizacao',
    dadosGraficos.caracterizacao.times,
    dadosGraficos.caracterizacao.pontuacoes,
    dadosGraficos.caracterizacao.times.map(time => coresTimes[time])
  );
  
  // Criar gráfico de grito de guerra
  criarGrafico(
    'graficoGrito',
    dadosGraficos.grito.times,
    dadosGraficos.grito.pontuacoes,
    dadosGraficos.grito.times.map(time => coresTimes[time])
  );
}
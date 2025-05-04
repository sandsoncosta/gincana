// Versão corrigida do progressbar.js

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
  ]};

// Variável global para controlar a categoria atualmente selecionada
let categoriaAtual = 'total';

// Função para calcular o total de cada time
function calcularTotal(time) {
  return time.espadas + time.versiculo + time.biblia + time.visitantes + time.caracterizacao + time.grito;
}

// Função para obter o valor de uma categoria específica ou o total
function getValorCategoria(timeData, categoria) {
  if (categoria === 'total') {
    return calcularTotal(timeData);
  }
  return timeData[categoria] || 0;
}

// Função para preparar dados para um gráfico específico de categoria
function prepararDadosGraficoPorCategoria(categoria) {
  // Obter todas as datas disponíveis em ordem cronológica
  const datas = Object.keys(pontuacoesPorData).sort();
  
  // Obter todos os nomes dos times
  const nomesTimes = pontuacoesPorData[datas[0]].map(time => time.time);
  
  // Preparar dados para o formato esperado pelo Chart.js
  const dadosGrafico = {
    labels: datas,
    datasets: nomesTimes.map(nomeTime => {
      // Para cada time, mapear os pontos por data
      const pontosPorData = datas.map(data => {
        const timeData = pontuacoesPorData[data].find(t => t.time === nomeTime);
        return getValorCategoria(timeData, categoria);
      });
      
      return {
        label: nomeTime,
        data: pontosPorData,
        backgroundColor: coresTimes[nomeTime],
        borderColor: coresTimes[nomeTime],
        tension: 0.1,
        borderWidth: 2
      };
    })
  };
  
  return dadosGrafico;
}
  
// Função para criar gráfico por categoria
function criarGraficoPorCategoria(categoria, titulo) {
  const canvasId = `grafico${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
  const canvas = document.getElementById(canvasId);
  
  if (!canvas) {
    console.error(`Canvas com ID ${canvasId} não encontrado`);
    return null;
  }
  
  const ctx = canvas.getContext('2d');
  const dadosGrafico = prepararDadosGraficoPorCategoria(categoria);

  return new Chart(ctx, {
    type: 'bar',
    data: dadosGrafico,
    options: {
      indexAxis: 'y', // Gráfico horizontal
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          suggestedMax: Math.max(...dadosGrafico.datasets.flatMap(dataset => dataset.data)) + 50 || 50,
          title: {
            display: true,
            text: 'Pontos',
            color: '#fff'
          },
          ticks: {
            color: '#fff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Datas',
            color: '#fff'
          },
          ticks: {
            color: '#fff'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#fff',
            boxWidth: 12,
            padding: 20
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            title: function(context) {
              return context[0].label;
            },
            label: function(context) {
              return `${context.dataset.label}: ${context.raw} pontos`;
            }
          }
        },
        datalabels: {
          display: function(context) {
            // Exibir apenas se o valor não for zero
            return context.dataset.data[context.dataIndex] !== 0;
          },
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 4,
          padding: 4,
          font: {
            weight: 'bold',
            size: 10
          },
          anchor: 'end',
          align: 'right',
          offset: function(context) {
            const datasetIndex = context.datasetIndex;
            const totalDatasets = context.chart.data.datasets.length;
            return 5 + (datasetIndex * 20) - ((totalDatasets - 1) * 10);
          },
          formatter: (value) => value
        },
        title: {
          display: true,
          text: titulo,
          color: '#fff',
          font: {
            size: 18,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        }
      },
      elements: {
        bar: {
          barThickness: 25, // Barra mais grossa
          categoryPercentage: 0.8, // Mais espaço para as barras
          barPercentage: 0.9 // Barras mais largas
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

// Função para criar cards para cada time baseado na categoria atual
function criarCards(categoria = categoriaAtual) {
  const teamsContainer = document.getElementById('teamsContainer');
  
  if (!teamsContainer) {
    console.error('Container para cards dos times não encontrado');
    return;
  }
  
  // Limpar o container
  teamsContainer.innerHTML = '';
  
  const datas = Object.keys(pontuacoesPorData).sort();
  
  Object.entries(coresTimes).forEach(([time, cor]) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.borderLeft = `4px solid ${cor}`;
    
    // Construir o conteúdo HTML do card
    let cardHTML = `<h4>${time}</h4><div class="team-points">`;
    
    // Adicionar pontuação para cada data
    datas.forEach(data => {
      const timeData = pontuacoesPorData[data].find(t => t.time === time);
      if (timeData) {
        const pontos = getValorCategoria(timeData, categoria);
        cardHTML += `<span>${data}:<br>${pontos} pontos</span>`;
      }
    });
    
    cardHTML += `</div>`;
    card.innerHTML = cardHTML;
    
    teamsContainer.appendChild(card);
  });
}

// Função para criar as abas de categorias
function criarAbasCategorias() {
  // Definindo as categorias e seus títulos
  const categorias = [
    { id: 'total', titulo: 'Pontuação Total por Time' },
    { id: 'espadas', titulo: 'Pontuação de Espadas para o Ar' },
    { id: 'versiculo', titulo: 'Pontuação do Quiz Bíblico' },
    { id: 'biblia', titulo: 'Pontuação de Bíblias' },
    { id: 'visitantes', titulo: 'Pontuação de Visitantes' },
    { id: 'caracterizacao', titulo: 'Pontuação de Caracterização' },
    { id: 'grito', titulo: 'Pontuação de Grito de Guerra' }
  ];
  
  // Criar as abas
  const categoriasTabsContainer = document.getElementById('categoriasTabs');
  const categoriasContentContainer = document.getElementById('categoriasContent');
  
  if (!categoriasTabsContainer || !categoriasContentContainer) {
    console.error('Containers para abas ou conteúdo não encontrados');
    return;
  }
  
  // Limpar os containers
  categoriasTabsContainer.innerHTML = '';
  categoriasContentContainer.innerHTML = '';
  
  categorias.forEach((categoria, index) => {
    // Criar botão da aba
    const tabButton = document.createElement('button');
    tabButton.className = `categoria-tab-button ${index === 0 ? 'active' : ''}`;
    tabButton.setAttribute('data-categoria', categoria.id);
    tabButton.textContent = categoria.titulo;
    categoriasTabsContainer.appendChild(tabButton);
    
    // Criar conteúdo da aba
    const tabContent = document.createElement('div');
    tabContent.className = `categoria-tab-content ${index === 0 ? 'active' : ''}`;
    tabContent.id = `categoria-${categoria.id}`;
    
    tabContent.innerHTML = `
      <div class="chart-container">
        <canvas id="grafico${categoria.id.charAt(0).toUpperCase() + categoria.id.slice(1)}"></canvas>
      </div>
    `;
    
    categoriasContentContainer.appendChild(tabContent);
  });
  
  // Adicionar event listeners para as abas
  const tabButtons = document.querySelectorAll('.categoria-tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover 'active' de todos os botões e conteúdos
      document.querySelectorAll('.categoria-tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.categoria-tab-content').forEach(content => content.classList.remove('active'));
      
      // Adicionar 'active' ao botão clicado e seu conteúdo correspondente
      this.classList.add('active');
      const categoriaId = this.getAttribute('data-categoria');
      categoriaAtual = categoriaId; // Atualizar a categoria atual
      
      const contentEl = document.getElementById(`categoria-${categoriaId}`);
      if (contentEl) {
        contentEl.classList.add('active');
      }
      
      // Atualizar os cards com a nova categoria
      criarCards(categoriaId);
    });
  });
}

// Inicializar todos os gráficos
function inicializarGraficos() {
  const categorias = [
    { id: 'total', titulo: 'Pontuação Total por Time' },
    { id: 'espadas', titulo: 'Pontuação de Espadas para o Ar' },
    { id: 'versiculo', titulo: 'Pontuação do Quiz Bíblico' },
    { id: 'biblia', titulo: 'Pontuação de Bíblias' },
    { id: 'visitantes', titulo: 'Pontuação de Visitantes' },
    { id: 'caracterizacao', titulo: 'Pontuação de Caracterização' },
    { id: 'grito', titulo: 'Pontuação de Grito de Guerra' }
  ];
  
  categorias.forEach(categoria => {
    try {
      criarGraficoPorCategoria(categoria.id, categoria.titulo);
    } catch (error) {
      console.error(`Erro ao criar gráfico para ${categoria.id}:`, error);
    }
  });
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se estamos na aba de progresso
  const progressoTab = document.getElementById('progresso');
  if (!progressoTab) {
    console.error('Aba de progresso não encontrada');
    return;
  }
  
  try {
    criarAbasCategorias();
    inicializarGraficos();
    criarCards(categoriaAtual); // Usar a categoria atual
  } catch (error) {
    console.error('Erro ao inicializar a página:', error);
  }
});

// Helper para adicionar novas datas facilmente
function adicionarNovaData(data, pontuacoes) {
  pontuacoesPorData[data] = pontuacoes;
  
  // Atualizar a interface após adicionar novos dados
  try {
    inicializarGraficos();
    criarCards(categoriaAtual); // Usar a categoria atual
  } catch (error) {
    console.error('Erro ao atualizar interface após adicionar nova data:', error);
  }
}
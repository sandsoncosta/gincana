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
      porcentagembiblias: 68.75,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10
    },
    {
      time: "Novos Convertidos",
      espadas: 0,
      versiculo: 250,
      biblia: 0,
      porcentagembiblias: 78.26,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10
    },
    {
      time: "Liga Teen",
      espadas: 60,
      versiculo: 300,
      biblia: 0,
      porcentagembiblias: 50,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Liga",
      espadas: 0,
      versiculo: 150,
      biblia: 30,
      porcentagembiblias: 100,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Novos Membros",
      espadas: 20,
      versiculo: 200,
      biblia: 0,
      porcentagembiblias: 82.75,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10
    },
    {
      time: "Adultos",
      espadas: 20,
      versiculo: 300,
      biblia: 0,
      porcentagembiblias: 70.58,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10
    }
  ],
  "04/05": [
    {
      time: "Sementes Ágape",
      espadas: 0,
      versiculo: 100,
      biblia: 0,
      porcentagembiblias: 64.70,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Novos Convertidos",
      espadas: 10,
      versiculo: 100, // QUIZ
      biblia: 30,
      porcentagembiblias: 100,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Liga Teen",
      espadas: 10,
      versiculo: 50, // QUIZ
      biblia: 40,
      porcentagembiblias: 100,
      visitantes: 15,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Liga",
      espadas: 10,
      versiculo: 100, // QUIZ
      biblia: 0,
      porcentagembiblias: 77.77,
      visitantes: 5,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Novos Membros",
      espadas: 10,
      versiculo: 100, // QUIZ
      biblia: 0,
      porcentagembiblias: 81.81,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10
    },
    {
      time: "Adultos",
      espadas: 10,
      versiculo: 50,
      biblia: 0,
      porcentagembiblias: 80,
      visitantes: 10,
      caracterizacao: 0,
      grito: 10
    }
  ]
};

// Variável global para controlar a categoria atualmente selecionada
let categoriaAtual = 'total';

// Mapeamento customizado de IDs para evitar conflitos
const mapeamentoIDs = {
  'total': 'graficoTotal',
  'espadas': 'graficoEspadas',
  'versiculo': 'graficoVersiculo',
  'biblia': 'graficoBiblia',
  'visitantes': 'grafVisitantes', // IDs modificados
  'caracterizacao': 'grafCaracterizacao', // IDs modificados
  'grito': 'grafGrito' // IDs modificados
};

// Armazenar instâncias de gráficos para permitir destruição quando necessário
const graficosInstancias = {};

// Função para calcular o total de cada time
function calcularTotal(time) {
  // Somar apenas os campos que devem entrar na pontuação total
  // Não inclui porcentagembiblias na soma, apenas os campos originais
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
        if (!timeData) return 0; // Garantir que não haja valores indefinidos
        // Se a categoria for 'biblia', use o valor de 'porcentagembiblias'
        if (categoria === 'biblia') {
          return timeData.porcentagembiblias || 0;
        }
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

// Função para limpar/destruir um gráfico se ele já existir
function limparGraficoExistente(canvasId) {
  if (graficosInstancias[canvasId]) {
    console.log(`Destruindo gráfico existente para canvas ${canvasId}`);
    graficosInstancias[canvasId].destroy();
    graficosInstancias[canvasId] = null;
  }
}

// Função para criar gráfico por categoria
function criarGraficoPorCategoria(categoria, titulo) {
  // Usar o mapeamento de IDs para obter o ID correto do canvas
  const canvasId = mapeamentoIDs[categoria] || `grafico${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
  const canvas = document.getElementById(canvasId);
  
  if (!canvas) {
    console.error(`Canvas com ID ${canvasId} não encontrado para categoria ${categoria}`);
    return null;
  }
  
  // Limpar qualquer gráfico existente para este canvas
  limparGraficoExistente(canvasId);
  
  const ctx = canvas.getContext('2d');
  const dadosGrafico = prepararDadosGraficoPorCategoria(categoria);

  // Criar o novo gráfico e armazenar a instância
  const grafico = new Chart(ctx, {
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
            text: categoria === 'biblia' ? 'Porcentagem (%)' : 'Pontos',
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
              if (categoria === 'biblia') {
                return `${context.dataset.label}: ${context.raw}%`;
              }
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
          // Posicionar exatamente no final da barra
          anchor: 'end',
          align: 'end',
          offset: 5, // Pequeno espaçamento fixo para a direita
          formatter: function(value, context) {
            if (context.chart.options.scales.x.title.text === 'Porcentagem (%)') {
              return value + '%';
            }
            return value;
          }
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

  // Armazenar a instância do gráfico para referência futura
  graficosInstancias[canvasId] = grafico;
  
  return grafico;
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
        let pontos;
        
        // Tratamento específico para cada categoria
        if (categoria === 'biblia') {
          pontos = timeData.porcentagembiblias || 0;
          cardHTML += `<span>${data}:<br>${pontos}%</span>`;
        } else {
          pontos = getValorCategoria(timeData, categoria);
          cardHTML += `<span>${data}:<br>${pontos} pontos</span>`;
        }
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
    
    // Usar o mapeamento de IDs para obter o ID correto do canvas
    const canvasId = mapeamentoIDs[categoria.id];
    
    tabContent.innerHTML = `
      <div class="chart-container">
        <canvas id="${canvasId}"></canvas>
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

// Inicializar todos os gráficos - Sequencial para evitar conflitos
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
  
  // Criar os gráficos de forma sequencial para evitar conflitos
  let delayCounter = 0;
  
  categorias.forEach(categoria => {
    setTimeout(() => {
      try {
        const canvasId = mapeamentoIDs[categoria.id];
        const canvas = document.getElementById(canvasId);
        
        if (canvas) {
          console.log(`Criando gráfico para ${categoria.id} com ID ${canvasId}`);
          criarGraficoPorCategoria(categoria.id, categoria.titulo);
        } else {
          console.error(`Canvas com ID ${canvasId} não encontrado para categoria ${categoria.id}`);
        }
      } catch (error) {
        console.error(`Erro ao criar gráfico para ${categoria.id}:`, error);
      }
    }, delayCounter * 100); // Incrementar o atraso para cada gráfico
    
    delayCounter++;
  });
}

// Inicializar a página com um sequenciamento adequado
document.addEventListener('DOMContentLoaded', function() {
  // Pequeno atraso para garantir que todos os elementos estejam carregados
  setTimeout(() => {
    const progressoTab = document.getElementById('progresso');
    if (!progressoTab) {
      console.error('Aba de progresso não encontrada');
      return;
    }
    
    try {
      console.log('Inicializando abas de categorias...');
      criarAbasCategorias();
      
      // Atraso maior para garantir que o DOM esteja atualizado
      setTimeout(() => {
        console.log('Inicializando gráficos...');
        inicializarGraficos();
        
        // Atraso maior para criar os cards
        setTimeout(() => {
          console.log('Criando cards...');
          criarCards(categoriaAtual);
        }, 700);
      }, 200);
    } catch (error) {
      console.error('Erro ao inicializar a página:', error);
    }
  }, 100);
});

// Helper para adicionar novas datas facilmente
function adicionarNovaData(data, pontuacoes) {
  // Garantir que todas as pontuações tenham o campo 'porcentagembiblias'
  pontuacoes = pontuacoes.map(time => {
    if (!('porcentagembiblias' in time)) {
      time.porcentagembiblias = 0;
    }
    return time;
  });
  
  pontuacoesPorData[data] = pontuacoes;
  
  // Atualizar a interface após adicionar novos dados
  try {
    setTimeout(() => {
      inicializarGraficos();
      setTimeout(() => {
        criarCards(categoriaAtual);
      }, 700);
    }, 200);
  } catch (error) {
    console.error('Erro ao atualizar interface após adicionar nova data:', error);
  }
}
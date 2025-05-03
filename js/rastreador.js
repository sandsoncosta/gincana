// Dados fixos da gincana com pontuações por categoria
const pontuacoesPorTime = [
    {
      time: "Sementes Ágape",
      total: 160,
      espadas: 0,
      versiculo: 150, //QUIZ
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10
    },
    {
      time: "Novos Convertidos",
      total: 260,
      espadas: 0,
      versiculo: 250, //QUIZ
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10,
      pontosBiblia: 0
    },
    {
      time: "Liga Teen",
      total: 390,
      espadas: 60,
      versiculo: 300, //QUIZ
      biblia: 0,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10,
      pontosBiblia: 0
    },
    {
      time: "Liga",
      total: 220,
      espadas: 0,
      versiculo: 150, //QUIZ
      biblia: 40,
      visitantes: 0,
      caracterizacao: 20,
      grito: 10,
      pontosBiblia: 0
    },
    {
      time: "Novos Membros",
      total: 230,
      espadas: 20,
      versiculo: 200, //QUIZ
      biblia: 0,
      visitantes: 0,
      caracterizacao: 0,
      grito: 10,
      pontosBiblia: 0
    },
    {
      time: "Adultos",
      total: 330,
      espadas: 20,
      versiculo: 330, //QUIZ
      biblia: 70.58, // Não é ponto, é percentual
      visitantes: 0,
      caracterizacao: 0,
      grito: 10,
      pontosBiblia: 0
    }
  ];
  
  // Não é mais necessário calcular os totais, pois já estão definidos
  // Caso queira verificar se os totais estão corretos:
  /*
  pontuacoesPorTime.forEach(time => {
    const calculatedTotal = time.espadas + time.versiculo + time.biblia;
    if (time.total !== calculatedTotal) {
      console.warn(`Total incorreto para ${time.time}: definido ${time.total}, calculado ${calculatedTotal}`);
    }
  });
  */
  
  // Criar arrays para classificação geral
  const timesComPontosGeral = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontuacao: time.total
  }));
  
  // Ordenar os dados pela pontuação geral (maior para menor)
  timesComPontosGeral.sort((a, b) => b.pontuacao - a.pontuacao);
  
  // Criar arrays para espadas para o ar
  const timesComPontosEspadas = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosEspada: time.espadas
  }));
  
  // Criar arrays para quiz
  const timesComPontosVersiculo = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosVersiculo: time.versiculo
  }));
  
  // Criar arrays para pontuação por Bíblia
  const timesComPontosBiblias = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosBiblia: time.biblia
  }));
  
  // Criar arrays para pontuação por Visitantes
  const timesComPontosVisitantes = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosVisitantes: time.visitantes
  }));
  
  // Criar arrays para pontuação por Caracterização
  const timesComPontosCaracterizacao = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosCaracterizacao: time.caracterizacao
  }));
  
  // Criar arrays para pontuação por Guito de Guerra
  const timesComPontosGrito = [...pontuacoesPorTime].map(time => ({
    time: time.time,
    pontosGrito: time.grito
  }));
  
  // Ordenar os dados pela pontuação de espadas (maior para menor)
  timesComPontosEspadas.sort((a, b) => b.pontosEspada - a.pontosEspada);
  
  // Ordenar os dados pela pontuação de versículo (maior para menor)
  timesComPontosVersiculo.sort((a, b) => b.pontosVersiculo - a.pontosVersiculo);
  
  // Ordenar os dados pela pontuação de Bíblia (maior para menor)
  timesComPontosBiblias.sort((a, b) => b.pontosBiblia - a.pontosBiblia);
  
  // Ordenar os dados pela pontuação de Visitantes (maior para menor)
  timesComPontosVisitantes.sort((a, b) => b.pontosVisitantes - a.pontosVisitantes);
  
  // Ordenar os dados pela pontuação de Caracterização (maior para menor)
  timesComPontosCaracterizacao.sort((a, b) => b.pontosCaracterizacao - a.pontosCaracterizacao);
  
  // Ordenar os dados pela pontuação de Grito de Guerra (maior para menor)
  timesComPontosGrito.sort((a, b) => b.pontosGrito - a.pontosGrito);
  
  // Atualizando os arrays para classificação geral
  const timesOrdenadosGeral = timesComPontosGeral.map(item => item.time);
  const totaisOrdenadosGeral = timesComPontosGeral.map(item => item.pontuacao);
  
  // Atualizando os arrays para espadas para o ar
  const timesOrdenadosEspadas = timesComPontosEspadas.map(item => item.time);
  const totaisOrdenadosEspadas = timesComPontosEspadas.map(item => item.pontosEspada);
  
  // Atualizando os arrays para encontre o versículo
  const timesOrdenadosVersiculo = timesComPontosVersiculo.map(item => item.time);
  const totaisOrdenadosVersiculo = timesComPontosVersiculo.map(item => item.pontosVersiculo);
  
  // Atualizando os arrays para bíblias
  const timesOrdenadosBiblia = timesComPontosBiblias.map(item => item.time);
  const totaisOrdenadosBiblia = timesComPontosBiblias.map(item => item.pontosBiblia);
  
  // Atualizando os arrays para visitantes
  const timesOrdenadosVisitantes = timesComPontosVisitantes.map(item => item.time);
  const totaisOrdenadosVisitantes = timesComPontosVisitantes.map(item => item.pontosVisitantes);
  
  // Atualizando os arrays para caracterização
  const timesOrdenadosCaracterizacao = timesComPontosCaracterizacao.map(item => item.time);
  const totaisOrdenadosCaracterizacao = timesComPontosCaracterizacao.map(item => item.pontosCaracterizacao);
  
  // Atualizando os arrays para grito de guerra
  const timesOrdenadosGrito = timesComPontosGrito.map(item => item.time);
  const totaisOrdenadosGrito = timesComPontosGrito.map(item => item.pontosGrito);
  
  // Definindo as cores dos times
  const coresTimes = {
    "Sementes Ágape": "#2ecc71",
    "Novos Convertidos": "#3498db",
    "Novos Membros": "#9b59b6", 
    "Liga Teen": "#e74c3c", 
    "Liga": "#e67e22", 
    "Adultos": "#34495e" 
  };
  
  // Certifique-se de que o Chart.js e o plugin datalabels estão carregados
  // Registrando o plugin (se necessário)
  Chart.register(ChartDataLabels);
  
  // Gráfico Classificação Geral
  const ctxClassificacaoGeral = document.getElementById('graficoClassificacaoGeral').getContext('2d');
  new Chart(ctxClassificacaoGeral, {
      type: 'bar',
      data: {
          labels: timesOrdenadosGeral,
          datasets: [{
              data: totaisOrdenadosGeral,
              backgroundColor: timesOrdenadosGeral.map(time => coresTimes[time]),
              borderColor: timesOrdenadosGeral.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
              },
              datalabels: {
                  color: '#fff',
                  font: {
                      weight: 'bold',
                      size: 14
                  },
                  anchor: 'end', // Ancorar no final da barra (topo)
                  align: 'top',   // Alinhar o topo do label com o ponto de ancoragem
                  offset: -5,    // Empurrar o label 5 pixels para cima
                  formatter: function(value) {
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosGeral) * 1.2
              }
          }
      }
  });
  
  // Gráfico Espadas para o Ar
  const ctxEspadasParaOAr = document.getElementById('graficoEspadasParaOAr').getContext('2d');
  new Chart(ctxEspadasParaOAr, {
      type: 'bar',
      data: {
          labels: timesOrdenadosEspadas,
          datasets: [{
              data: totaisOrdenadosEspadas,
              backgroundColor: timesOrdenadosEspadas.map(time => coresTimes[time]),
              borderColor: timesOrdenadosEspadas.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosEspadas) * 1.2
              }
          }
      }
  });
  
  // Gráfico Encontre o Versículo
  const ctxEncontreVersiculo = document.getElementById('graficoQuiz').getContext('2d');
  new Chart(ctxEncontreVersiculo, {
      type: 'bar',
      data: {
          labels: timesOrdenadosVersiculo,
          datasets: [{
              data: totaisOrdenadosVersiculo,
              backgroundColor: timesOrdenadosVersiculo.map(time => coresTimes[time]),
              borderColor: timesOrdenadosVersiculo.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosVersiculo) * 1.2
              }
          }
      }
  });
  
  // Gráfico Bíblias
  const ctxBiblias = document.getElementById('graficoBiblias').getContext('2d');
  new Chart(ctxBiblias, {
      type: 'bar',
      data: {
          labels: timesOrdenadosBiblia,
          datasets: [{
              data: totaisOrdenadosBiblia,
              backgroundColor: timesOrdenadosBiblia.map(time => coresTimes[time]),
              borderColor: timesOrdenadosBiblia.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value + '%';
                  }
              }
          },
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Pontuação em %',
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosBiblia) * 1.2
              }
          }
      }
  });
  
  // Gráfico Visitantes
  const ctxVisitantes = document.getElementById('graficoVisitantes').getContext('2d');
  new Chart(ctxVisitantes, {
      type: 'bar',
      data: {
          labels: timesOrdenadosVisitantes,
          datasets: [{
              data: totaisOrdenadosVisitantes,
              backgroundColor: timesOrdenadosVisitantes.map(time => coresTimes[time]),
              borderColor: timesOrdenadosVisitantes.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosVisitantes) * 1.2 || 10
              }
          }
      }
  });
  
  // Gráfico Caracterização
  const ctxCaracterizacao = document.getElementById('graficoCaracterizacao').getContext('2d');
  new Chart(ctxCaracterizacao, {
      type: 'bar',
      data: {
          labels: timesOrdenadosCaracterizacao,
          datasets: [{
              data: totaisOrdenadosCaracterizacao,
              backgroundColor: timesOrdenadosCaracterizacao.map(time => coresTimes[time]),
              borderColor: timesOrdenadosCaracterizacao.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosGrito) * 1.2 || 10
              }
          }
      }
  });
  
  // Gráfico Grito de Guerra
  const ctxGrito = document.getElementById('graficoGrito').getContext('2d');
  new Chart(ctxGrito, {
      type: 'bar',
      data: {
          labels: timesOrdenadosGrito,
          datasets: [{
              data: totaisOrdenadosGrito,
              backgroundColor: timesOrdenadosGrito.map(time => coresTimes[time]),
              borderColor: timesOrdenadosGrito.map(time => coresTimes[time]),
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
                  callbacks: {
                      label: function(tooltipItem) {
                          return `Pontuação: ${tooltipItem.raw}`;
                      }
                  }
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
                      return value;
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
                      display: false,
                      color: '#fff'
                  },
                  suggestedMax: Math.max(...totaisOrdenadosGrito) * 1.2 || 10
              }
          }
      }
  });
  
  function gerarLegendaTimes(coresTimes, containerClass) {
    const legendasContainers = document.querySelectorAll(`.${containerClass}`);
  
    legendasContainers.forEach(legendasContainer => {
        legendasContainer.style.display = 'flex';
        legendasContainer.style.flexWrap = 'wrap';
        legendasContainer.style.gap = '10px'; // Reduzi um pouco o gap para caber dentro da div do gráfico
        legendasContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior
  
        const timesOrdenados = Object.entries(coresTimes)
            .sort(([, corA], [, corB]) => {
                const nomeA = Object.keys(coresTimes).find(key => coresTimes[key] === corA);
                const nomeB = Object.keys(coresTimes).find(key => coresTimes[key] === corB);
                return nomeA.localeCompare(nomeB);
            })
            .map(([time, cor]) => ({ time, cor }));
  
        timesOrdenados.forEach(item => {
            const cor = item.cor;
            const time = item.time;
  
            const legendaItem = document.createElement('div');
            legendaItem.style.display = 'flex';
            legendaItem.style.alignItems = 'center';
            legendaItem.style.marginBottom = '5px'; // Ajustei a margem
  
            const corDiv = document.createElement('div');
            corDiv.style.width = '15px'; // Reduzi o tamanho do quadrado de cor
            corDiv.style.height = '15px'; // Reduzi o tamanho do quadrado de cor
            corDiv.style.backgroundColor = cor;
            corDiv.style.borderRadius = '3px'; // Ajustei o raio da borda
            corDiv.style.marginRight = '5px'; // Reduzi a margem
  
            const nomeSpan = document.createElement('span');
            nomeSpan.textContent = time;
            nomeSpan.style.color = '#fff';
            nomeSpan.style.fontSize = '0.9em'; // Reduzi o tamanho da fonte
  
            legendaItem.appendChild(corDiv);
            legendaItem.appendChild(nomeSpan);
            legendasContainer.appendChild(legendaItem);
        });
    });
  }
  
  gerarLegendaTimes(coresTimes, 'legendas-times');
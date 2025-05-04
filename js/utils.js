// Função para calcular o total de pontos de cada time
export function calcularTotais(pontuacoesPorTime) {
  return pontuacoesPorTime.map(time => {
    // Calcular o total somando todas as categorias
    const total = time.espadas + time.versiculo + time.biblia + 
                  time.visitantes + time.caracterizacao + time.grito;
    
    // Retornar um novo objeto com o total calculado
    return {
      ...time,
      total: total
    };
  });
}

// Função para ordenar times por pontuação específica
export function ordenarTimesPorPontuacao(times, propriedade) {
  return [...times].sort((a, b) => b[propriedade] - a[propriedade]);
}

// Função para extrair arrays de nomes de times e pontuações de uma lista ordenada
export function extrairDadosGrafico(timesOrdenados, propriedade) {
  return {
    times: timesOrdenados.map(item => item.time),
    pontuacoes: timesOrdenados.map(item => item[propriedade])
  };
}

// Função para gerar legendas para os times
export function gerarLegendaTimes(coresTimes, containerClass) {
  const legendasContainers = document.querySelectorAll(`.${containerClass}`);

  legendasContainers.forEach(legendasContainer => {
    legendasContainer.style.display = 'flex';
    legendasContainer.style.flexWrap = 'wrap';
    legendasContainer.style.gap = '10px';
    legendasContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

    const timesOrdenados = Object.entries(coresTimes)
      .sort(([nomeA], [nomeB]) => nomeA.localeCompare(nomeB))
      .map(([time, cor]) => ({ time, cor }));

    timesOrdenados.forEach(item => {
      const cor = item.cor;
      const time = item.time;

      const legendaItem = document.createElement('div');
      legendaItem.style.display = 'flex';
      legendaItem.style.alignItems = 'center';
      legendaItem.style.marginBottom = '5px';

      const corDiv = document.createElement('div');
      corDiv.style.width = '15px';
      corDiv.style.height = '15px';
      corDiv.style.backgroundColor = cor;
      corDiv.style.borderRadius = '3px';
      corDiv.style.marginRight = '5px';

      const nomeSpan = document.createElement('span');
      nomeSpan.textContent = time;
      nomeSpan.style.color = '#fff';
      nomeSpan.style.fontSize = '0.9em';

      legendaItem.appendChild(corDiv);
      legendaItem.appendChild(nomeSpan);
      legendasContainer.appendChild(legendaItem);
    });
  });
}
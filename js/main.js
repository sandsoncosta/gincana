// Importar dados e funções dos outros módulos
import { pontuacoesPorTime, coresTimes } from './data.js';
import { calcularTotais, ordenarTimesPorPontuacao, extrairDadosGrafico, gerarLegendaTimes } from './utils.js';
import { inicializarGraficos } from './charts.js';

// Calcular os totais para cada time
const timesComTotais = calcularTotais(pontuacoesPorTime);

// Ordenar os dados por diferentes categorias
const timesOrdenadosGeral = ordenarTimesPorPontuacao(timesComTotais, 'total');
const timesOrdenadosEspadas = ordenarTimesPorPontuacao(timesComTotais, 'espadas');
const timesOrdenadosVersiculo = ordenarTimesPorPontuacao(timesComTotais, 'versiculo');
const timesOrdenadosBiblia = ordenarTimesPorPontuacao(timesComTotais, 'biblia');
const timesOrdenadosVisitantes = ordenarTimesPorPontuacao(timesComTotais, 'visitantes');
const timesOrdenadosCaracterizacao = ordenarTimesPorPontuacao(timesComTotais, 'caracterizacao');
const timesOrdenadosGrito = ordenarTimesPorPontuacao(timesComTotais, 'grito');

// Extrair dados para os gráficos
const dadosGraficos = {
  geral: extrairDadosGrafico(timesOrdenadosGeral, 'total'),
  espadas: extrairDadosGrafico(timesOrdenadosEspadas, 'espadas'),
  versiculo: extrairDadosGrafico(timesOrdenadosVersiculo, 'versiculo'),
  biblia: extrairDadosGrafico(timesOrdenadosBiblia, 'biblia'),
  visitantes: extrairDadosGrafico(timesOrdenadosVisitantes, 'visitantes'),
  caracterizacao: extrairDadosGrafico(timesOrdenadosCaracterizacao, 'caracterizacao'),
  grito: extrairDadosGrafico(timesOrdenadosGrito, 'grito')
};

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todos os gráficos
  inicializarGraficos(dadosGraficos, coresTimes);
  
  // Gerar as legendas para os times
  gerarLegendaTimes(coresTimes, 'legendas-times');
  
  // Exibir os totais no console para verificação
  console.log('Times com totais calculados:', timesComTotais);
});
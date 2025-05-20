// Dados da gincana com pontuações por categoria
// A pontuação vai sendo incrementada conforme os dias das gincanas vão passando
// Incluir 0 para o dia de não pontuação
export const dadosBrutos = [
  {
    time: "Adultos",
    espadas: [20,10,20],
    versiculo: [300,50,50], // QUIZ
    biblia: [0,0,0],
    visitantes: [0,10,0],
    caracterizacao: [0,0,20],
    grito: [10,10,10]
  },
  {
    time: "Liga",
    espadas: [0,10,10],
    versiculo: [150,100,100], // QUIZ
    biblia: [30,0,30],
    visitantes: [0,5,0],
    caracterizacao: [20,20,20],
    grito: [10,10,10]
  },
  {
    time: "Liga Teen",
    espadas: [60,20,0],
    versiculo: [300,50,50], // QUIZ
    biblia: [0,30,0],
    visitantes: [0,15,0],
    caracterizacao: [20,20,20],
    grito: [10,10,10]
  },
  {
    time: "Novos Convertidos",
    espadas: [0,10,0], 
    versiculo: [250,100,50], // QUIZ
    biblia: [0,30,0],
    visitantes: [0,0,0],
    caracterizacao: [0,20,20],
    grito: [10,10,10]
  },
  {
    time: "Novos Membros",
    espadas: [20,10,20],
    versiculo: [200,100,100], // QUIZ
    biblia: [0,0,0],
    visitantes: [0,0,10],
    caracterizacao: [0,20,0],
    grito: [10,10,10]
  },
  {
    time: "Sementes Ágape",
    espadas: [0,0,10],
    versiculo: [150,100,50], // QUIZ
    biblia: [0,0,0],
    visitantes: [0,0,0],
    caracterizacao: [0,20,20],
    grito: [10,10,10]
  }
];

// Função para somar os valores
const somarCampos = (item) => {
  const campos = ["espadas", "versiculo", "biblia", "visitantes", "caracterizacao", "grito"];
  const resultado = { time: item.time };
  campos.forEach(campo => {
    const valor = item[campo];
    if (Array.isArray(valor)) {
      resultado[campo] = valor.reduce((acc, val) => acc + val, 0);
    } else {
      resultado[campo] = valor;
    }
  });
  return resultado;
};

// Gerando a lista final com os valores somados
export const pontuacoesPorTime = dadosBrutos.map(somarCampos);

// Definindo as cores dos times
export const coresTimes = {
  "Sementes Ágape": "#2ecc71",
  "Novos Convertidos": "#3498db",
  "Novos Membros": "#9b59b6",
  "Liga Teen": "#e74c3c",
  "Liga": "#e67e22",
  "Adultos": "#34495e"
};

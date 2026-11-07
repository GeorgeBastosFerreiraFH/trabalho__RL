let input = require('fs').readFileSync('stdin.txt', 'utf8');
let lines = input.split("\n").filter(linha => linha.trim() !== "");

//Array criado para armazenar as velocidades
let velocidades = []

// Itera sobre as linhas dos dados de entrada do Beecrowd
lines.map(linha => linha.trim().split(" ")).forEach((elemento, indice) => {
    // Transforma os dados em números
    let velocidade = elemento.map(Number);
    // Separa somente os arrays de velocidades (índices ímpares)
    if (indice % 2 !== 0) {
        // Insere os arrays dentro de um array específico para velocidades
        velocidades.push(velocidade);
    }
});

//Função de Maior Velocidade
function maiorVelocidade(linha) {
    //Variavel para guardar a maior velocidade
    let numeroMaior = linha[0]
    //Laço que intera sobre os elementos e comparar para achar o maior numero
    for (let i = 0; i < linha.length; i++) {
        if (linha[i] > numeroMaior) {
            numeroMaior = linha[i]
        }
    }
    // Armazena o maior número encontrado
    return numeroMaior;
}

//Função devolver nivel
function devolverNivel(elemento) {
    //Condicional que compara o valor recebido e retorna o nivel.
    if (elemento < 10) {
        return 1
    } else if (elemento >= 10 && elemento < 20) {
        return 2
    } else {
        return 3
    }
}

//Laço que intera sobre as velocidades e aplica as funções linha por linha!
velocidades.forEach((elemento) =>{
    console.log(devolverNivel(maiorVelocidade(elemento)))
})

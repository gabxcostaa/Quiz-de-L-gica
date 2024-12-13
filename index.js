const botaoComecar = document.getElementById('botao-comecar');
const divPerguntas = document.getElementById('perguntas');

// Função para embaralhar um array
function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

let perguntasRestantes = []; // Array para armazenar perguntas não exibidas

// Função para exibir uma pergunta aleatória
function exibirPerguntaAleatoria() {
    // Limpa o conteúdo da div
    divPerguntas.innerHTML = '';

    // Verifica se ainda há perguntas
    if (perguntasRestantes.length === 0) {
        divPerguntas.textContent = 'Quiz finalizado! Parabéns! Você acertou todas as questões sem errar uma!';
        return;
    }

    // Seleciona uma pergunta aleatória
    const indiceAleatorio = Math.floor(Math.random() * perguntasRestantes.length);
    const perguntaAtual = perguntasRestantes.splice(indiceAleatorio, 1)[0];

    // Cria o elemento da pergunta
    const perguntaElemento = document.createElement('p');
    perguntaElemento.textContent = perguntaAtual.pergunta;
    divPerguntas.appendChild(perguntaElemento);

    // Cria as alternativas e embaralha a ordem
    const alternativas = embaralharArray([
        { texto: perguntaAtual.alternativaCorreta, correta: true },
        { texto: perguntaAtual.alternativaIncorreta1, correta: false },
        { texto: perguntaAtual.alternativaIncorreta2, correta: false },
        { texto: perguntaAtual.alternativaIncorreta3, correta: false }
    ]);

    // Adiciona cada alternativa como um botão
    alternativas.forEach((alternativa) => {
        const botao = document.createElement('button');
        botao.textContent = `${alternativa.texto}`;
        botao.className = 'botao-alternativa';
        botao.addEventListener('click', () => {
            if (alternativa.correta) {
                alert('Resposta correta!');
                exibirPerguntaAleatoria(); // Exibe a próxima pergunta aleatória
            } else {
                alert('Resposta incorreta. O quiz será reiniciado!');
                iniciarQuiz(); // Reinicia o quiz
            }
        });
        divPerguntas.appendChild(botao);
    });
}
// Função para iniciar o quiz
function iniciarQuiz() {
    perguntasRestantes = [...perguntasErespostas];
    exibirPerguntaAleatoria();
}

// Ao clicar no botão, inicia o quiz
botaoComecar.addEventListener('click', (evento) => {
    evento.preventDefault();
    iniciarQuiz();
    botaoComecar.remove()
});

const perguntasErespostas = [
    {
        pergunta: ' Uma lesma deve subir um poste de 10 metros de altura. De dia sobe 2m e à noite desce 1m. Em quantos dias atingirá o topo do poste?',
        alternativaIncorreta1: '10 dias',
        alternativaIncorreta2: '5 dias',
        alternativaIncorreta3: '8 dias',
        alternativaCorreta:    '9 dias',
    },
    {
        pergunta: "Um pastor diz para outro: 'Dê um de seus carneiros que ficamos com igual número de carneiros.' O outro responde: 'Nada disso, dê-me um de seus carneiros que ficarei com o dobro dos seus'. Quantos carneiros têm cada um?",
        alternativaIncorreta1: "4 e 8",
        alternativaIncorreta2: "1 e 2",
        alternativaIncorreta3: "6 e 10",
        alternativaCorreta:    "5 e 7",
    },
    {
        pergunta: "O professor Epaminondas, no primeiro dia de aula, apostou que, entre os alunos daquela classe, pelo menos dois fariam aniversário no mesmo dia do mês. O professor tinha certeza de que ganharia a aposta, pois naquela classe o número de alunos era maior ou igual a: ",
        alternativaIncorreta1: "31",
        alternativaIncorreta2: "28",
        alternativaIncorreta3: "30",
        alternativaCorreta:    "32",
    },
    {
        pergunta: "Se amanhã for feriado, então hoje José irá viajar. Ora, amanhã não será feriado: Então, pode-se afirmar que ...?  ",
        alternativaIncorreta1: "José nunca viaja no feriado",
        alternativaIncorreta2: "José somente viaja em véspera de feriado",
        alternativaIncorreta3: "José não viajará hoje",
        alternativaCorreta:    "É possível que José viage hoje",
    },
    {
        pergunta: "Maria tinha alguns biscoitos. Ela comeu dois e deu dois à irmã. Depois deu metade do que sobrou ao irmão. Se o irmão ficou com 5 biscoitos, quantos tinha Maria no início?",
        alternativaIncorreta1: "30 biscoitos",
        alternativaIncorreta2: "22 biscoitos",
        alternativaIncorreta3: "12 biscoitos",
        alternativaCorreta:    "14 biscoitos",
    },
    {
        pergunta: "Um dos três princípios fundamentais que compõem o pensamento lógico é o do terceiro excluído, que diz que uma declaração só pode assumir o valor verdadeiro ou falso, nenhum outro. Desta forma, pode-se classificar como uma proposição lógica a seguinte opção: ",
        alternativaIncorreta1: "Os dançarinos chegaram!",
        alternativaIncorreta2: "Estejam preparados para o sinal de início da apresentação.",
        alternativaIncorreta3: "Nossos lugares foram reservados?",
        alternativaCorreta:    "A coreografia está muito bem ensaida.",
    },
    {
        pergunta: "Considere que a seguinte afirmação seja falsa : Se João vai à praia, então gosta de comprar na feira.É correto afirmar que ",
        alternativaIncorreta1: "Vai à praia e gosta de comprar na feira.",
        alternativaIncorreta2: "Não vai à praia e gosta de comprar na feira.",
        alternativaIncorreta3: "Não vai à praia e não gosta de comprar na feira.",
        alternativaCorreta:    "Vai à praia e não gosta de comprar na feira.",
    },
    {
        pergunta: `A seguinte sequência numérica segue um determinado padrão. 
         ... , 18, 9, 54, 27, 162, ...  
         Desta forma, obedecendo às mesmas leis que a criaram, o número que antecede o 18 e o número que sucede o 162 são, respectivamente:`,
        alternativaIncorreta1: "6 e 81",
        alternativaIncorreta2: "3 e 60",
        alternativaIncorreta3: "6 e 60",
        alternativaCorreta:    "3 e 81",
    },
    {
        pergunta: "Se o amanhã de ontem era quinta-feira, que dia é o dia depois do amanhã de ontem?  ",
        alternativaIncorreta1: "Domingo",
        alternativaIncorreta2: "Quarta",
        alternativaIncorreta3: "Sábado",
        alternativaCorreta:    "Sexta - feira",
    },
    {
        pergunta: `Quatro suspeitos de praticar um crime fazem as seguintes declarações:
    João: Carlos é o criminoso

    Pedro: eu não sou criminoso

    Carlos: Paulo é o criminoso

    Paulo: Carlos está mentindo

    Sabendo que apenas um dos suspeitos mente, determine quem é o criminoso.`,
        alternativaIncorreta1: "Paulo",
        alternativaIncorreta2: "João",
        alternativaIncorreta3: "Pedro",
        alternativaCorreta:    "Carlos",
    },


];

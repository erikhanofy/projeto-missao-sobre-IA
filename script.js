const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o seu nível de conhecimento sobre Botânica?",
alternativas: [
{
texto: "Baixo",

afirmacao:[ "Você sabe apenas a base sobre Botânica ",
            "Seu nivel de conhecimento é razoavel",
            "Continue se esforçando"]
},
{
texto: "Médio",

afirmacao: ["Você tem um bom entendimento sobre Botânica. ",
            "Seu nivel de conhecimento sobre esse assunto é bom",
            "Realização de exercícios pode te dar ainda mais conhecimento sobre esse assunto"]
},
{
texto: "Alto",

afirmacao: ["Você tem tem um conhecimento aprofundado sobre Botânica",
            "Parabéns pelo seu conhecimento, continue assim",
            "Sempre dedique pelo menos 1h do seu dia para os estudos"]
}
]
},
{
enunciado: "1 - Qual é a função principal das raízes nas plantas?",
alternativas: [
{
texto: "a)  Armazenar água e nutrientes",

afirmacao: " 1-A) Esta alternativa esta correta pois as raízes das plantas têm como função principal absorver água e nutrientes do solo, além de ancorar a planta no substrato." 
            ["Parabéns você acertou, continue assim." ]
},
{
texto: "b) Realizar fotossíntese",

afirmacao: " Está alternativa está incorreta. "
            ["Sempre estude pelo menos 1h por dia",
             "A realização de exercícios pode te ajudar" ]
},
{
texto: "c) Produzir sementes",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
},
{
texto: "d) Todas as alternativas estão corretas",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
}

]
},
{
enunciado: "2 - O que é a clorofila nas plantas?",
alternativas: [
{
texto: "a) Uma substância responsável pela coloração das flores",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
},
{
texto: "b) Um pigmento responsável pela fotossíntese",

afirmacao: "2-B) Está alternativa está correta pois a clorofila é o pigmento responsável por captar a energia luminosa necessária para o processo de fotossíntese, fundamental para a produção de alimentos pelas plantas. "
["Parabéns você acertou, continue assim." ]
},

{
texto: "c) Uma enzima que regula o crescimento das raízes",
afirmacao: "Está altenativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
},
{
texto: "d) Todas as alternativas estão corretas",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
}
]
},
{
enunciado: "3 - Qual é a estrutura das plantas responsável pela reprodução sexuada ?",
alternativas: [
{
texto: "a) Caule",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]
},
{
texto: "b) Flor",
afirmacao: "3-B) Está alternativa está correta pois a flor é a estrutura das plantas responsável pela reprodução sexuada, onde ocorrem os processos de polinização e fecundação, resultando na formação de sementes e frutos. "
["Parabéns você acertou, continue assim." ]
},

{
texto: "c) Folha",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]

},

{
texto: "d) Todas as alternativas estão corretas",
afirmacao: "Está alternativa está incorreta. "
["Sempre estude pelo menos 1h por dia",
    "A realização de exercícios pode te ajudar" ]

}
]
}


];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();

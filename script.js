const receitas = [
    {
        titulo: "Brownie",
        descricao: "Receita ideal para os amantes de chocolate!",
        autor: "Evilyn Feitosa",
        avaliacao: "4/4",
        imagem: "assets/imagens/1701277217025.jpg",
        ingredientes: [
            "200g de chocolate meio amargo",
            "150g de manteiga",
            "3 ovos",
            "200g de açúcar",
            "100g de farinha de trigo",
            "1 pitada de sal",
            "1 colher de chá de essência de baunilha"
        ],
        modoPreparo: "Derreta o chocolate e a manteiga juntos em banho-maria. Em uma tigela separada, bata os ovos com o açúcar até formar um creme. Adicione o chocolate derretido e misture bem. Acrescente a farinha peneirada, o sal e a essência de baunilha. Misture até ficar homogêneo. Despeje a massa em uma assadeira e asse em forno preaquecido a 180°C por cerca de 25-30 minutos."
    },
    {
        titulo: "Banana Bread",
        descricao: "Um pão doce com sabor tropical!",
        autor: "Evilyn Feitosa",
        avaliacao: "4/4",
        imagem: "assets/imagens/1701277217025.jpg",
        ingredientes: [
            "3 bananas maduras",
            "100g de açúcar",
            "2 ovos",
            "150g de farinha de trigo",
            "1 colher de chá de fermento em pó",
            "1 colher de chá de canela"
        ],
        modoPreparo: "Amasse as bananas e misture com os ovos. Adicione o açúcar, a farinha, o fermento e a canela. Mexa bem até formar uma massa homogênea. Despeje em uma forma untada e leve ao forno preaquecido a 180°C por cerca de 40 minutos."
    },
    {
        titulo: "Bolo de Caneca",
        descricao: "Perfeito para uma sobremesa rápida!",
        autor: "Evilyn Feitosa",
        avaliacao: "4/4",
        imagem: "assets/imagens/1701277217025.jpg",
        ingredientes: [
            "1 ovo",
            "4 colheres (sopa) de leite",
            "3 colheres (sopa) de óleo",
            "4 colheres (sopa) de açúcar",
            "2 colheres (sopa) de chocolate em pó",
            "4 colheres (sopa) de farinha de trigo",
            "1 colher (café) de fermento em pó"
        ],
        modoPreparo: "Em uma caneca, coloque o ovo e bata com um garfo. Adicione o leite, o óleo, o açúcar e o chocolate, e bata até misturar bem. Acrescente a farinha de trigo e o fermento, e mexa até a massa ficar homogênea. Leve ao micro-ondas por 3 minutos em potência alta."
    },
    {
        titulo: "Cheesecake",
        descricao: "Delícia cremosa com toque de frutas vermelhas!",
        autor: "Evilyn Feitosa",
        avaliacao: "4/4",
        imagem: "assets/imagens/1701277217025.jpg",
        ingredientes: [
            "200g de biscoito maisena triturado",
            "100g de manteiga derretida",
            "600g de cream cheese",
            "200g de açúcar",
            "3 ovos",
            "1 colher (chá) de essência de baunilha",
            "300g de creme de leite",
            "200g de geleia de frutas (opcional)"
        ],
        modoPreparo: "Misture o biscoito triturado com a manteiga derretida e pressione a mistura no fundo de uma forma de fundo removível. Asse a base por 10 minutos a 180°C. Bata o cream cheese com o açúcar até ficar cremoso. Adicione os ovos, a essência de baunilha e o creme de leite. Despeje o creme sobre a base de biscoito e asse por cerca de 1 hora a 160°C. Depois de esfriar, cubra com a geleia de frutas e leve à geladeira antes de servir."
    },
    {
        titulo: 'Pudim',
        descricao: 'Uma receita clássica e irresistível!',
        avaliacao: '4/4',
        autor: 'Evilyn Feitosa',
        imagem: 'assets/imagens/1701277217025.jpg',
        ingredientes: [
            "1 lata de leite condensado",
            "2 medidas (da lata) de leite",
            "3 ovos",
            "1 xícara de açúcar (para a calda)"
        ],
        modoPreparo: "Para a calda, derreta o açúcar em uma panela até caramelizar e despeje em uma forma de pudim. No liquidificador, bata o leite condensado, o leite e os ovos. Despeje a mistura na forma caramelizada. Cozinhe em banho-maria no forno preaquecido a 180°C por cerca de 1 hora e 30 minutos. Depois de frio, leve à geladeira por algumas horas antes de desenformar."
    },
    {
        titulo: "Cookies",
        descricao: "Cookies crocantes com gotas de chocolate!",
        autor: "Evilyn Feitosa",
        avaliacao: "4/4",
        imagem: "assets/imagens/1701277217025.jpg",
        ingredientes: [
            "200g de manteiga",
            "150g de açúcar mascavo",
            "100g de açúcar",
            "2 ovos",
            "300g de farinha de trigo",
            "1 colher (chá) de fermento em pó",
            "200g de gotas de chocolate"
        ],
        modoPreparo: "Bata a manteiga com os açúcares até obter um creme claro. Adicione os ovos um a um e continue batendo. Misture a farinha e o fermento até incorporar. Adicione as gotas de chocolate e misture. Forme pequenas bolinhas e coloque-as em uma assadeira forrada com papel manteiga. Asse em forno preaquecido a 180°C por 12-15 minutos."
    }
];

const container = document.getElementById('receitas-card-container');
const detalhesReceita = document.getElementById('detalhes-receita');
const tituloReceita = document.getElementById('titulo-receita');
const ingredientesReceita = document.getElementById('ingredientes-receita');
const modoPreparoReceita = document.getElementById('modo-preparo-receita');
const voltar = document.getElementById('voltar');


function exibirCards() {
    // biome-ignore lint/complexity/noForEach: <explanation>
    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('receitas-card');

        card.innerHTML = `
            <header class="card-cabecalho">
                <div class="card-cabecalho-detalhes">
                    <span class="destaque amarelo">Em alta</span>
                    <h3 class="receita-titulo">${receita.titulo}</h3>
                </div>
                <p class="receita-avaliacao">Maravilhoso . ${receita.avaliacao}</p>
            </header>
            <p class="receita-descricao">${receita.descricao}</p>
            <div class="receita-autor">
                <img src="${receita.imagem}" alt="Imagem do autor">
                <span class="receita-autor-nome">${receita.autor}</span>
            </div>
        `;

        card.addEventListener('click', () => mostrarDetalhes(receita));
        container.appendChild(card);
    });
}

// Função para mostrar os detalhes da receita
function mostrarDetalhes(receita) {
    tituloReceita.innerText = receita.titulo;
    ingredientesReceita.innerHTML = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
    modoPreparoReceita.innerText = receita.modoPreparo;

    container.style.display = 'none'; // Esconde os cards
    detalhesReceita.style.display = 'block'; // Exibe os detalhes da receita
}

// Função para voltar aos cards de receitas
voltar.addEventListener('click', () => {
    container.style.display = 'flex'; // Exibe os cards
    detalhesReceita.style.display = 'none'; // Esconde os detalhes
});

// Inicializa a exibição dos cards
exibirCards();


// 2.1 - a base dos meus dados (JSON)

const data = {
  produtos: [
    {
      id: 1,
      nome: "Vulpix",
      preco: 75.00,
      categoria: "Fogo",
      imagem: "imagens/vulpix_basic_Fogo_secreto.png",
      descricao: "Pokémon Basic do tipo Fogo. Ataques Stampede (10) e Combustion (20). 70 HP.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Alcremie",
      preco: 8.00,
      categoria: "Fada",
      imagem: "imagens/alcremie_stage1_Fada_incomum.png",
      descricao: "Pokémon Stage 1 do tipo Fada. Evolui de Milcery. 110 HP.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Alolan Vulpix",
      preco: 8.00,
      categoria: "Gelo",
      imagem: "imagens/alolan_vulpix_basic_Gelo_incomum.png",
      descricao: "Pokémon Basic do tipo Gelo. Habilidade Call Forth Cold. 60 HP.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Clefairy",
      preco: 75.00,
      categoria: "Fada",
      imagem: "imagens/clefairy_basic_Fada_secreto.png",
      descricao: "Pokémon Basic do tipo Fada. Ataques Follow Me e Flop (30). 70 HP.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Fidough",
      preco: 75.00,
      categoria: "Fada",
      imagem: "imagens/fidough_basic_Fada_secreto.png",
      descricao: "Pokémon Basic do tipo Fada. Ataques Springy e Flop (30). 60 HP.",
      emEstoque: false
    },
    {
      id: 6,
      nome: "Gastly",
      preco: 75.00,
      categoria: "Fantasma",
      imagem: "imagens/gastly_basic_Fantasma_secreto.png",
      descricao: "Pokémon Basic do tipo Fantasma. Ataques Mysterious Beam e Suffocating Gas (30). 60 HP.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Hop's Wooloo",
      preco: 25.00,
      categoria: "Normal",
      imagem: "imagens/hops_wooloo_basic_Normal_raro.png",
      descricao: "Pokémon Basic do tipo Normal. Ataque Tackle (20). 70 HP.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Jirachi ex",
      preco: 150.00,
      categoria: "Psíquico",
      imagem: "imagens/jirachi_ex_basic_Psiquico_ultrararo.png",
      descricao: "Pokémon EX Basic do tipo Psíquico. Habilidade Dernier Souhaits. Ataque Choc Sommeil (80). 160 HP.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Kirlia",
      preco: 75.00,
      categoria: "Psíquico",
      imagem: "imagens/kirlia_stage1_Psiquico_secreto.png",
      descricao: "Pokémon Stage 1 do tipo Psíquico. Evolui de Ralts. Ataques Magical Shot (30) e Psychic (60+). 90 HP.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Litten",
      preco: 75.00,
      categoria: "Fogo",
      imagem: "imagens/litten_basic_Fogo_secreto.png",
      descricao: "Pokémon Basic do tipo Fogo. Ataque Fake Out (10). 70 HP.",
      emEstoque: true
    },
    {
      id: 11,
      nome: "Marill",
      preco: 75.00,
      categoria: "Água",
      imagem: "imagens/marill_basic_Agua_secreto.png",
      descricao: "Pokémon Basic do tipo Água. Ataques Hide e Flop (20). 70 HP.",
      emEstoque: false
    },
    {
      id: 12,
      nome: "Mew",
      preco: 25.00,
      categoria: "Psíquico",
      imagem: "imagens/mew_basic_Psiquico_raro.png",
      descricao: "Pokémon Místico Basic do tipo Psíquico. Habilidade Mythical Shield. Ataque Psywave (30). 50 HP.",
      emEstoque: true
    },
    {
      id: 13,
      nome: "Mienfoo",
      preco: 75.00,
      categoria: "Lutador",
      imagem: "imagens/mienfoo_basic_Lutador_secreto.png",
      descricao: "Pokémon Basic do tipo Lutador. Ataque Kick (20). 60 HP.",
      emEstoque: true
    },
    {
      id: 14,
      nome: "Mienshao",
      preco: 75.00,
      categoria: "Lutador",
      imagem: "imagens/mienshao_stage1_Lutador_secreto.png",
      descricao: "Pokémon Stage 1 do tipo Lutador. Evolui de Mienfoo. Ataques Three-Step Strike (20×) e Whip Expert (50+). 100 HP.",
      emEstoque: true
    },
    {
      id: 15,
      nome: "Milobellus",
      preco: 8.00,
      categoria: "Água",
      imagem: "imagens/Milobellus.webp",
      descricao: "Pokémon Stage 1 do tipo Água. Evolui de Barpau. Ataques Flèche d'Eau e Vague Douce (60). 130 HP.",
      emEstoque: true
    },
    {
      id: 16,
      nome: "Minun",
      preco: 75.00,
      categoria: "Elétrico",
      imagem: "imagens/minun_basic_Eletrico_secreto.png",
      descricao: "Pokémon Basic do tipo Elétrico. Habilidade Buddy Pulse. Ataque Speed Ball (20). 70 HP.",
      emEstoque: true
    },
    {
      id: 17,
      nome: "Moni's Gyarados ex",
      preco: 150.00,
      categoria: "Água",
      imagem: "imagens/monis_gyarados_ex_stage2_Agua_ultrararo.png",
      descricao: "Pokémon EX Stage 2 do tipo Água. Evolui de Magikarp. Ataques Wirlwind (90) e Deep Trench (130). 150 HP.",
      emEstoque: true
    },
    {
      id: 18,
      nome: "Munna",
      preco: 75.00,
      categoria: "Psíquico",
      imagem: "imagens/munna_basic_Psiquico_secreto.png",
      descricao: "Pokémon Basic do tipo Psíquico. Ataques Rest e Mumble (10). 70 HP.",
      emEstoque: false
    },
    {
      id: 19,
      nome: "Ralts",
      preco: 75.00,
      categoria: "Psíquico",
      imagem: "imagens/ralts_basic_Psiquico_secreto.png",
      descricao: "Pokémon Basic do tipo Psíquico. Ataque Psyshot (30). 70 HP.",
      emEstoque: true
    },
    {
      id: 20,
      nome: "Reuniclus",
      preco: 75.00,
      categoria: "Psíquico",
      imagem: "imagens/reuniclus_stage2_Psiquico_secreto.png",
      descricao: "Pokémon Stage 2 do tipo Psíquico. Evolui de Duosion. Ataques Summoning Gate e Brain Shake (100). 120 HP.",
      emEstoque: true
    },
    {
      id: 21,
      nome: "Rowlet",
      preco: 2.00,
      categoria: "Planta",
      imagem: "imagens/rowlet_basic_Planta_comum.png",
      descricao: "Pokémon Basic do tipo Planta. Ataque Peck (30). 50 HP.",
      emEstoque: true
    },
    {
      id: 22,
      nome: "Team Rocket's Meowth",
      preco: 75.00,
      categoria: "Sombrio",
      imagem: "imagens/team_rockets_meowth_basic_Sombrio_secreto.png",
      descricao: "Pokémon Basic do tipo Sombrio. Ataques Paw-cket Pilfer e Fury Swipes (20×). 70 HP.",
      emEstoque: true
    },
    {
      id: 23,
      nome: "Umbreon ex",
      preco: 150.00,
      categoria: "Sombrio",
      imagem: "imagens/umbreon_ex_stage1_Sombrio_ultrararo.png",
      descricao: "Pokémon EX Stage 1 Tera do tipo Sombrio. Evolui de Eevee. Ataques Moon Mirage (160) e Onyx. 280 HP.",
      emEstoque: true
    }
  ]
};


// 2.2 - SELEÇÃO DE ELEMENTOS (DOM)

const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");

// querySelector
const searchInput    = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender      = document.querySelector("#btnRender");

// 2.3 - FUNÇÕES OBRIGATÓRIAS

function formatPrice(preco) {
  return "R$ " + preco.toFixed(2).replace(".", ",");
}

// Cria e retorna um card de produto
function createProductCard(produto) {
  // createElement
  const card = document.createElement("div");

  card.setAttribute("data-id", produto.id);
  card.setAttribute("data-nome", produto.nome);

  card.classList.add("card");

  card.style.padding = "10px";

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  // Título
  const titulo = document.createElement("p");
  titulo.classList.add("card-titulo");
  titulo.innerText = produto.nome;

  // Categoria
  const categoria = document.createElement("p");
  categoria.classList.add("card-categoria");
  categoria.innerText = "Tipo: " + produto.categoria;

  // Preço
  const preco = document.createElement("p");
  preco.classList.add("card-preco");
  preco.innerText = formatPrice(produto.preco);

  // Estoque
  const estoque = document.createElement("p");
  estoque.classList.add("card-estoque");
  if (produto.emEstoque) {
    estoque.classList.add("em-estoque");
    estoque.innerText = "✅ Em estoque";
  } else {
    estoque.classList.add("fora-estoque");
    estoque.innerText = "❌ Fora de estoque";
  }

  // Área de botões
  const btnArea = document.createElement("div");
  btnArea.classList.add("card-botoes");

  // Botão "Ver detalhes" com addEventListener
  const btnDetalhes = document.createElement("button");
  btnDetalhes.classList.add("btn-detalhes");
  btnDetalhes.innerText = "Ver detalhes";
  btnDetalhes.addEventListener("click", function () {
    showProductDetails(produto);
  });

  // Botão "Destacar" 
  const btnDestacar = document.createElement("button");
  btnDestacar.classList.add("btn-destacar");
  btnDestacar.innerText = "⭐ Destacar";
  btnDestacar.addEventListener("click", function () {
    card.classList.add("highlight");
    console.log("Card destacado! ID:", card.getAttribute("data-id"), "| Nome:", produto.nome);
  });

  btnArea.appendChild(btnDetalhes);
  btnArea.appendChild(btnDestacar);

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(categoria);
  card.appendChild(preco);
  card.appendChild(estoque);
  card.appendChild(btnArea);

  return card;
}

// Renderiza todos os cards na lista
function renderProducts(produtos) {
  // Limpa a lista com innerHTML
  productList.innerHTML = "";

  if (produtos.length === 0) {
    productList.innerHTML = '<p class="sem-resultado">Nenhuma carta encontrada. 😕</p>';
    return;
  }

  // appendChild para adicionar cada card
  produtos.forEach(function (produto) {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  const todosOsCards = document.querySelectorAll(".card");
  console.log("--- Cards renderizados: " + todosOsCards.length + " no total ---");
  todosOsCards.forEach(function (card) {
    console.log("ID:", card.getAttribute("data-id"), "| Nome:", card.getAttribute("data-nome"));
  });
}
//dinamico 
function renderCategories() {
  categorySelect.innerHTML = '<option value="">Todas as categorias</option>';

  const categorias = [];
  data.produtos.forEach(function (produto) {
    if (!categorias.includes(produto.categoria)) {
      categorias.push(produto.categoria);
    }
  });

  categorias.sort();

  categorias.forEach(function (cat) {
    const option = document.createElement("option");
    option.value = cat;
    option.innerText = cat;
    categorySelect.appendChild(option);
  });
}

// Exibe os detalhes de um produto usando innerHTML
function showProductDetails(produto) {
  const estoqueTexto = produto.emEstoque
    ? '<span class="destaque-texto">✅ Em estoque</span>'
    : '<span style="color:#e74c3c">❌ Fora de estoque</span>';

  productDetails.innerHTML = `
    <div class="detalhes-conteudo">
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <div class="detalhes-info">
        <h2>${produto.nome}</h2>
        <p>💰 Preço: <span class="destaque-texto">${formatPrice(produto.preco)}</span></p>
        <p>🔥 Tipo: <span class="destaque-texto">${produto.categoria}</span></p>
        <p>📦 Estoque: ${estoqueTexto}</p>
        <p>📋 ${produto.descricao}</p>
      </div>
    </div>
  `;
}

// Filtra os produtos com base na busca e na categoria selecionada
function filterProducts() {
  const textoBusca = searchInput.value.toLowerCase();
  const categoriaSelecionada = categorySelect.value;

  const filtrado = data.produtos.filter(function (produto) {
    const nomeOk      = produto.nome.toLowerCase().includes(textoBusca);
    const categoriaOk = categoriaSelecionada === "" || produto.categoria === categoriaSelecionada;
    return nomeOk && categoriaOk;
  });

  renderProducts(filtrado);
}

// 2.4 - EVENTOS

// Evento de digitação no campo de busca
searchInput.addEventListener("input", filterProducts);

// Evento de mudança no select de categoria
categorySelect.addEventListener("change", filterProducts);

// Evento de clique no botão Renderizar
btnRender.addEventListener("click", filterProducts);

// INICIALIZAÇÃO DA PÁGINA
renderCategories();
renderProducts(data.produtos);
//Dados dos filmes com imagens armazenadas loacalmente na pasra 'imagens'
const filmes = {
    acao:[
        {
            titulo: "Velozes e Furiosos 10",
            diretor:"Louis Leterrier",
            elenco: "Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, Jordana Brewster, Nathalie Emmanuel, Sung Kang, Charlize Theron, Jason Momoa, Daniela Melchior, Brie Larson, Alan Ritchson, Michael Rooker, Jason Statham, Cardi B, Rita Moreno.",
            sinopse:"No décimo filme da série Velozes & Furiosos e último da nova trilogia (Velozes 8, 9 e 10), ao longo de muitas missões e contra probabilidades que pareciam impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas.",
            imagem:"imagens/0156803.jpg"    
      },

      {
        titulo:"Jumanji",
        diretor:"Jake Kasdan e Joe Johnston",
        elenco:"Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Nick Jonas, Bobby Cannavale, Ser'Darius Blain, Madison Iseman, Morgan Turner, com a participação de Tim Matheson e Frank Welker.",
        sinopse:"Alan Parrish desapareceu quando era menino e ninguém acredita na história de seu amigo de que ele foi sugado por um jogo de tabuleiro. Vinte e seis anos depois, duas crianças acham o jogo no sótão e, quando começam a jogar, Alan é libertado. Mas a disputa ainda não acabou e Alan precisa terminar antes de ser realmente solto.",
        imagem:"imagens/Jumanji.jpg"
      },

      {
       titulo:"Tropa de Elite",
       diretor: "José Padilha",
       elenco:"Wagner Moura, Caio Junqueira, André Ramiro, Fernanda Machado, Milhem Cortaz e Luana Piovani.",
       sinopse:"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
       imagem:"imagens/Tropa.jpg"
    }
    ],

    guerra:[
    {
        tiulo:"Ate o ultimo homem",
        diretor:"Mel Gibson",
        elenco:"Andrew Garfield, Vince Vaughn, Sam Worthington, Luke Bracey, Teresa Palmer e Hugo Weaving.",
        sinopse:"Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
        imagem:"imagens/UltimoH.jpg", 
    },

    {
        titulo:"Corações de Ferro",
        diretor:"David Ayer",
        elenco:"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña, Jon Bernthal e Jason Isaacs.",
        sinopse:"Durante o final da Segunda Guerra Mundial, o sargento Don Wardaddy lidera um grupo de apenas cinco soldados norte-americanos encarregado de aniquilar os nazistas. Em um tanque de guerra Sherman, os homens enfrentam uma missão mortal. Apesar da desvantagem numérica, falta de armas e um soldado inexperiente, Wardaddy e seus homens se movimentam em um ataque espetacular no coração da Alemanha nazista.",
        imagem:"imagens/Coração.jpg"
    },

    {
        titulo:"Rambo:Até o fim",
        diretor:"Adrian Grunberg",
        elenco:"Sylvester Stallone, Paz Vega, Sergio Peris-Mencheta, Yvette Monreal e Adrian Grenier.",
        sinopse:"O tempo passou para Rambo, que agora vive recluso em um rancho. Sua vida marcada por lutas violentas ficou para trás, mas deixou marcas inesquecíveis. No entanto, quando uma jovem de uma família amiga é sequestrada, Rambo precisa confrontar seu passado e resgatar suas habilidades de combate para enfrentar o mais perigoso cartel mexicano. A busca logo se transforma em uma caçada por justiça, na qual nenhum criminoso é perdoado.",
        imagem:"imagens/Rambo.jpg"
    }
    ],

    terror:[
    {
        titulo:"Invocação do Mal",
        diretor:"James Wan",
        elenco:"Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston e Mackenzie Foy.",
        sinopse:"Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.",
        imagem:"imagens/invocacao.jpg",
    },
    {
        titulo:"A freira",
        diretor:"Corin Hardy",
        elenco:"Taissa Farmiga, Demian Bichir, Jonas Bloquet, Charlotte Hope e Ingrid Bisu.",
        sinopse:"Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.",
        imagem:"imagens/Freira.jpg",
  },
  {
    titulo:"Sobrenatural",
    diretor:"James Wan",
    elenco:"Patrick Wilson, Rose Byrne, Ty Simpkins, Barbara Hershey e Lin Shaye.",
    sinopse:"Josh e Renai se mudam com a família para uma casa maior. Lá, o filho Dalton sofre um estranho acidente e entra em coma. Enquanto eles tentam salvar o menino, entidades malignas atormentam a família.",
    imagem:"imagens/natural.jpg"

  }
    ]
}

//Funcao para criar os filmes e exibi-los no HTML 
function exibirFilmes(){
    //Obter os conteineres de cada categoria
    const acaoContainer = document.getElementById("acao")
    const guerraContainer = document.getElementById("guerra")
    const terrorContainer = document.getElementById("terror")

    //Funcao para exibir filmes e exibi-los no HTML 
    function exibirCategoria(filmes,container){
        filmes.forEach(filme => {
            const divFilme = document.createElement("div")
            divFilme.classList.add("filme")
            divFilme.innerHTML = `
            <img src = "${filme.imagem}" alt = "${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Diretor:</strong> ${filme.diretor} </p>
            <p><strong>Elenco:</strong> ${filme.elenco} </p>
            <p><strong>Sinopse:</strong> ${filme.sinopse} </p>
            `
            container.appendChild(divFilme)

        });
    }

    exibirCategoria(filmes.guerra,guerraContainer)
    exibirCategoria(filmes.terror,terrorContainer)
    exibirCategoria(filmes.acao,acaoContainer)
}

exibirFilmes()
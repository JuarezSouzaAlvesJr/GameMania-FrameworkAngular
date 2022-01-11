//lógica do carrossel
$(document).ready(function(){

    let slideAtual = 1;

    let listaSlides = ["class1", "class2", "class3"]

    setInterval(slide, 3000)

    function slide() {
        console.log("Slide Atual:", slideAtual)

        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1]) //remover o último item da lista
        }

        $("#carrossel").addClass(listaSlides[slideAtual])
        slideAtual ++

        if(slideAtual > (listaSlides.length) - 1) { //melhor substituir o 2 pelo comprimento da lista menos 1, que também se refere ao último item da lista 
            slideAtual = 0;
        }
    }

})

//lógica do menu sanduiche
$(document).ready(function(){

    $("#menuBarras").click(function(){

        $("#menuSanduiche").toggleClass("menu-ativo")

        //if( $("#menuSanduiche").hasClass("menu-ativo") ) {
        //    //esconder o menu
        //    $("#menuSanduiche").removeClass("menu-ativo")
        //} else {
        //    //mostrar o menu
        //    $("#menuSanduiche").addClass("menu-ativo")
        //}
    })

})
//Não deu certo. Por esse método do Jquery, o menu de barras não está aparecendo ao clicar. Então, mantive a forma anterior, usando a função pelo javaScript, que está abaixo. No HTML, deixei comentado a parte que seria para usar o id em vez do onclick.

function mostrarMenuSanduiche() {

    let menuSanduiche = document.getElementById("menuSanduiche");
    
    if (getComputedStyle(menuSanduiche).display != "none") {
        menuSanduiche.style.display = "none";
    } else {
        menuSanduiche.style.display = "flex";
    }
}

function cadastrarCliente() {
    let emailDigitado = document.getElementById("campo-email").value;
    let senhaDigitada = document.getElementById("password-example").value;
    let CPFouCNPJ = document.getElementById("number-CPFouCNPJ").value;
    let CEP = document.getElementById("number-CEP").value;

    console.log(emailDigitado, senhaDigitada, CPFouCNPJ, CEP);
}

function buscarProduto() {
    let produtoDigitado = document.getElementById("produto-buscado").value;

    console.log(produtoDigitado);
}

function renderizarProdutos(){
    let espaco = document.getElementById("espaco-produtos")

    let listaProdutos = [
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
        {
            imagem: "img/produto.png",
            descricao: "Computador T-Home Office TECNOART Intel i3 10100 / DDR4 8GB / SSD 240GB",
            preco: "R$ 3.561,00 à vista",
            parcela: "12x de R$ 296,75 sem juros"
        },
    ]

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
        
        console.log(produto)

        template = template + `<div class="produto">
                    <div class="prod-align">
                        <a href="pagProduto.html"><img src="${produto.imagem}" class="img-fluid" alt="imagem-produto"></a><a href="pagProduto.html">${produto.descricao}</a>
                        <div class="preco">${produto.preco}</div>
                        <div class="parcela">${produto.parcela}</div>
                        <div class="int"><a href="carrinho.html"><button class="comprar">Comprar</button></a><button class="carrinho"><img src="img/carrinho(40x40).png" class="img-car" alt="carrinho"></button></div>
                    </div>
                </div>`
    }


    espaco.innerHTML = template
}
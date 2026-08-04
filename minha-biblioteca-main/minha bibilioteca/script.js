const tema = document.getElementById("tema");
const pesquisa = document.getElementById("pesquisa");
const livros = document.querySelectorAll(".livro");
const contador = document.getElementById("contador");
const categorias = document.querySelectorAll(".categorias button");


tema.onclick = () => {

    document.body.classList.toggle("dark");

    tema.textContent = document.body.classList.contains("dark")
    ? "☀️ Tema Claro"
    : "🌙 Tema Escuro";

};


function atualizarContador(){

    let total = 0;

    livros.forEach(livro=>{

        if(livro.style.display !== "none"){
            total++;
        }

    });

    contador.textContent = "📚 Livros encontrados: " + total;

}


function mostrarLivros(filtro){

    livros.forEach(livro=>{

        let categoria = livro.dataset.categoria;

        if(filtro === "todas" || categoria === filtro){

            livro.style.display = "block";

        }else{

            livro.style.display = "none";

        }

    });

    atualizarContador();

}



pesquisa.onkeyup = () => {

    let texto = pesquisa.value.toLowerCase();

    livros.forEach(livro=>{

        let nome = livro.querySelector("h3")
        .textContent
        .toLowerCase();

        let categoria = livro.dataset.categoria;

        if(nome.includes(texto) || categoria.includes(texto)){

            livro.style.display="block";

        }else{

            livro.style.display="none";

        }

    });

    atualizarContador();

};



categorias.forEach(botao=>{

    botao.onclick = () => {


        categorias.forEach(btn=>{

            btn.classList.remove("ativo");

        });


        botao.classList.add("ativo");


        let filtro = botao.textContent
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"");


        if(filtro === "mangas"){
            filtro = "mangas";
        }

        if(filtro === "colecionaveis"){
            filtro = "colecionaveis";
        }


        mostrarLivros(filtro);


    };

});



document.querySelectorAll(".livro button")
.forEach(botao=>{


    botao.onclick = () => {


        let livro = botao.parentElement;


        let nome = livro.querySelector("h3").textContent;

        let categoria = livro.querySelector(".autor").textContent;

        let status = livro.querySelector(".status").textContent;


        alert(
            "📖 Livro: "+nome+
            "\n🏷 Categoria: "+categoria+
            "\n📌 Status: "+status
        );


    };


});



atualizarContador();
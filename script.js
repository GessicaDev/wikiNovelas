let usuarioInfo = {};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    document.getElementById('nav-menu').style.display = 'none';
}



function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function logout() {
    usuarioInfo = {};
    showSection('cadastro');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('cadastro');
});
function adicionarNovela(event) {
    event.preventDefault();

    const tituloNovela = document.getElementById('tituloNovela').value;
    const descricaoNovela = document.getElementById('descricaoNovela').value;

    const novaNovela = document.createElement('li');
    novaNovela.innerHTML = `<strong class="novela-rosa">${tituloNovela}:</strong> ${descricaoNovela}`;

    document.getElementById('listaNovelas').appendChild(novaNovela);

    document.getElementById('tituloNovela').value = '';
    document.getElementById('descricaoNovela').value = '';
}
function adicionarNovela(event) {
    event.preventDefault();

    const tituloNovela = document.getElementById('tituloNovela').value;
    const descricaoNovela = document.getElementById('descricaoNovela').value;

    if (tituloNovela.trim() === '' || descricaoNovela.trim() === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const novaNovela = document.createElement('li');
    novaNovela.innerHTML = `<strong class="novela-rosa">${tituloNovela}:</strong> ${descricaoNovela}`;

    document.getElementById('listaNovelas').appendChild(novaNovela);

    document.getElementById('tituloNovela').value = '';
    document.getElementById('descricaoNovela').value = '';

    showSection('sobreNovelas');
}
function pesquisarNovela() {
    const input = document.getElementById('pesquisa').value.toLowerCase();
    const novelas = document.querySelectorAll('#listaNovelas li');

    novelas.forEach(novela => {
        const textoNovela = novela.textContent.toLowerCase();
        if (textoNovela.includes(input)) {
            novela.style.display = 'list-item';
        } else {
            novela.style.display = 'none';
        }
    });
}
function submitCadastro(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const genero = document.getElementById('genero').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;
    document.getElementById('info').innerHTML = `Nome: ${nome} <br> Email: ${email} <br> Telefone: ${telefone} <br> Data de Nascimento: ${data_nascimento} <br> Gênero: ${genero} <br> Endereço: ${endereco} <br> Cidade: ${cidade} <br> Estado: ${estado} <br> CEP: ${cep}  `;
    document.getElementById('saudacao').innerText = `Olá, ${nome}!`;
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.home-container').style.display = 'block';
    showSection('sobreNovelas');
}

function goToCadastro() {
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
function pesquisarNovela() {
    const input = document.getElementById('pesquisa').value.toLowerCase();
    const novelas = document.querySelectorAll('#listaNovelas li');

    novelas.forEach(novela => {
        const titulo = novela.textContent.toLowerCase();
        if (titulo.includes(input)) {
            novela.style.display = 'list-item';
        } else {
            novela.style.display = 'none';
        }
    });
}
function adicionarNovela() {
    alert('Funcionalidade de adicionar novela ainda não implementada.');
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const titulo = urlParams.get('titulo');

    const detalhesNovela = {
        "Meu Coração é Teu": {
            imagem: "https://www.bastidoresdatv.com.br/wp-content/uploads/2019/10/Meu-Cora%C3%A7%C3%A3o-%C3%A9-Teu-SBT.jpeg",
            descricao: "Uma história de amor e intriga."
        },
        "Rebelde": {
            imagem: "https://img.portalt5.com/NP1AOzMhnpJL76oZyb89V5_5EbM=/516x350/smart/imagens%2Fcsm_rebelde_f57c0c2c69.jpg",
            descricao: "Amizades que superam desafios."
        },
        "Abismo de Paixão": {
            imagem: "https://static.wixstatic.com/media/b6f3bb_0e0edd8c10e346d2957ebf23405debba~mv2.jpeg/v1/fill/w_1024,h_576,al_c,q_85/resumo-abismo-de-paixao-1024x576.jpeg",
            descricao: "Conflitos familiares e segredos revelados."
        },
        "A Usurpadora": {
            imagem: "https://www.tvpop.com.br/wp-content/uploads/2022/09/a-usurpadora-logo-tvpop-exclusivo-1024x576.png",
            descricao: "Duas irmãs gêmeas separadas que trocam de lugar."
        },
        "Rubi": {
            imagem: "https://is1-ssl.mzstatic.com/image/thumb/jRqAOlImLif4UlwhtA5n8Q/1200x675.jpg",
            descricao: "Uma mulher ambiciosa que fará de tudo para conseguir riqueza."
        },
    };
});

function voltar() {
    window.history.back();
}


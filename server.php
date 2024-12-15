<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dados do Cadastro</title>
</head>
<body>
    <header>
        <h1>Dados do Cadastro</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="desenvolvedores.html">Desenvolvedores</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Formulário Recebido</h2>
        <p><strong>Nome:</strong> <?php echo htmlspecialchars($_POST['nome']); ?></p>
        <p><strong>Email:</strong> <?php echo htmlspecialchars($_POST['email']); ?></p>
        <p><strong>Telefone:</strong> <?php echo htmlspecialchars($_POST['telefone']); ?></p>
        <p><strong>Data de Nascimento:</strong> <?php echo htmlspecialchars($_POST['data_nascimento']); ?></p>
        <p><strong>Gênero:</strong> <?php echo htmlspecialchars($_POST['genero']); ?></p>
        <p><strong>Endereço:</strong> <?php echo htmlspecialchars($_POST['endereco']); ?></p>
        <p><strong>Cidade:</strong> <?php echo htmlspecialchars($_POST['cidade']); ?></p>
        <p><strong>Estado:</strong> <?php echo htmlspecialchars($_POST['estado']); ?></p>
        <p><strong>CEP:</strong> <?php echo htmlspecialchars($_POST['cep']); ?></p>
    </main>
    <footer>
        <p>IFRN campus Santa Cruz</p>
        <p>Trabalho de Autoria Web</p>
        <p>Prof. Marcelo Figueiredo Barbosa Júnior</p>
        <p>Nome do Aluno 1, Nome do Aluno 2, Nome do Aluno 3</p>
    </footer>
</body>
</html>

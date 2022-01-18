function validar() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var data = document.getElementById('data').value;
    var cpf = document.getElementById('cpf').value;
    var endereco = document.getElementById('endereco').value;
    var cep = document.getElementById('cep').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var repeteSenha = document.getElementById('repete-senha').value;

    if (nome == "") {
        document.getElementById('erro-nome').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-nome').innerHTML = "";
    }

    if (sobrenome == "") {
        document.getElementById('erro-sobrenome').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-sobrenome').innerHTML = '';
    }

    if (data == "") {
        document.getElementById('erro-data').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-data').innerHTML = '';
    }

    if (cpf == "") {
        document.getElementById('erro-cpf').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-cpf').innerHTML = '';
    }

    if (endereco == "") {
        document.getElementById('erro-endereco').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-endereco').innerHTML = '';
    }

    if (cep == "") {
        document.getElementById('erro-cep').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-cep').innerHTML = '';
    }

    if (usuario == "") {
        document.getElementById('erro-usuario').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-usuario').innerHTML = '';
    }

    if (senha == "") {
        document.getElementById('erro-senha').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-senha').innerHTML = '';
    }

    if (repeteSenha == "") {
        document.getElementById('erro-repete-senha').innerHTML = 'campo obrigatório';
    } else {
        document.getElementById('erro-repete-senha').innerHTML = '';
        if (senha != repeteSenha) {
            document.getElementById('senhas-diferentes').removeAttribute('hidden');
        } else {
            document.getElementById('senhas-diferentes').setAttribute('hidden', true)
        }
    }
}
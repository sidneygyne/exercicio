$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);

        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint)
            .done(function (resposta) {
                if (resposta.erro) {
                    alert("CEP não encontrado.");
                    $('#logradouro').val('');
                    return;
                }

                const logradouro = resposta.logradouro;
                const bairro = resposta.bairro;
                const cidade = resposta.localidade;
                const estado = resposta.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#logradouro').val(endereco).removeClass('is-invalid');
                $('#cep').val(cep).removeClass('is-invalid');
            })
            .fail(function () {
                alert("Ocorreu um erro na busca. Tente novamente mais tarde!");
            })
            .always(function () {
                setTimeout(function () {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 2000);
            });
    });

    $('#formulario-pedido').submit(function (evento) {
        evento.preventDefault();
        let formularioValido = true;

        const nome = $('#nome');
        const sobrenome = $('#sobrenome');
        const email = $('#email');
        const numero = $('#numero');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const logradouro = $('#logradouro');
        const cep = $('#cep');

        function validarCampoAoDigitar(campo, isEmail = false) {
            campo.on('input blur', function () {
                const valor = campo.val().trim();

                if (valor.length === 0) {
                    campo.removeClass('is-valid').addClass('is-invalid');
                } else if (isEmail) {
                    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!regexEmail.test(valor)) {
                        campo.removeClass('is-valid').addClass('is-invalid');
                    } else {
                        campo.removeClass('is-invalid').addClass('is-valid');
                    }
                } else {
                    campo.removeClass('is-invalid').addClass('is-valid');
                }
            });
        }

        // Ativando validação ao digitar
        validarCampoAoDigitar($('#nome'));
        validarCampoAoDigitar($('#sobrenome'));
        validarCampoAoDigitar($('#email'), true);
        validarCampoAoDigitar($('#cep'));
        validarCampoAoDigitar($('#logradouro'));
        validarCampoAoDigitar($('#numero'));



        function validarCampo(campo, tipo = 'texto') {
            const valor = campo.val().trim();

            if (tipo === 'email') {
                if (!regexEmail.test(valor)) {
                    campo.addClass('is-invalid').removeClass('is-valid');
                    return false;
                }
            } else {
                if (valor.length === 0) {
                    campo.addClass('is-invalid').removeClass('is-valid');
                    return false;
                }
            }

            campo.removeClass('is-invalid').addClass('is-valid');
            return true;
        }


        $('#nome, #sobrenome, #cep, #logradouro, #numero').on('input blur', function () {
            validarCampo($(this));
        });

        $('#email').on('input blur', function () {
            validarCampo($(this), 'email');
        });


        formularioValido = validarCampo(nome) && formularioValido;
        formularioValido = validarCampo(sobrenome) && formularioValido;
        formularioValido = validarCampo(email, 'email') && formularioValido;
        formularioValido = validarCampo(cep) && formularioValido;
        formularioValido = validarCampo(logradouro) && formularioValido;
        formularioValido = validarCampo(numero) && formularioValido;

        if (!formularioValido) {
            alert('Preencha todos os campos corretamente!');
            return;
        } else {
            alert('Formulário enviado com sucesso!')
            $('#formulario-pedido')[0].reset();
            $('.form-control').removeClass('is-valid is-invalid');
        }

    });

});


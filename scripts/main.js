$(document).ready(function () {
    const endpoint = `https://api.github.com/users/sidneygyne`;

    $.ajax(endpoint)
        .done(function (resposta) {
            $('#nome').text(resposta.name);
            $('#repositorios').text(resposta.public_repos);
            $('#seguidores').text(resposta.followers);
            $('#seguindo').text(resposta.following);
            $('#avatar').attr('src',resposta.avatar_url);
            
            const usuario = resposta.login;
            console.log(usuario)
            const url = `https://github.com/${usuario}`;
            $('#pagina').attr('href',url);

            $('#usuario').text(`@${usuario}`);
    
        })
        .fail(function (erro) {
            console.error("Erro na requisição:", erro);
        });
});




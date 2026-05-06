$(window).on('scroll', function() {
    // Checa as imagens e aplica o efeito de visibilidade
    $('.fade-in-image').each(function() {
        var imageTop = $(this).offset().top; // Posição da imagem
        var windowBottom = $(window).scrollTop() + $(window).height(); // Parte inferior da janela

        if (windowBottom > imageTop + 100) { // Se a imagem estiver visível, com margem de 100px
            $(this).addClass('visible'); // Aplica a classe 'visible' que vai mostrar a imagem
        }
    });
});

// Aciona o efeito ao carregar a página
$(window).trigger('scroll');

$(document).ready(function() {
    $('#image').hover(function() {
        $(this).css('opacity', '0.5');  // Diminui a opacidade
    }, function() {
        $(this).css('opacity', '1');  // Restaura a opacidade
    });
});
function copiar(idTexto) {
    var textoCop = document.getElementById(idTexto);
    var text = textoCop.value.replace(/^\s+/gm, ''); // Remove espaços no início de cada linha
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado!');
    }, function() {
        alert('Erro ao copiar texto.');
    });
}

// PROXIMO ID NO HTML 9




// function copiar1() {
//     var textoCop = document.getElementById('output-texto1');
//     textoCop.select();
//     textoCop.setSelectionRange(0, 99999);
//     document.execCommand('copy');
    
//     // alert("Texto Copiado");

// }

// function copiar2() {
//     var textoCop = document.getElementById('output-texto2');
//     var text = textoCop.value.replace(/^\s+/gm, ''); // Remove espaços no início de cada linha
//     navigator.clipboard.writeText(text).then(function() {
//         alert('Texto copiado!');
//     }, function() {
//         alert('Erro ao copiar texto.');
//     });
// }

// function copiar3() {
//     var textoCop = document.getElementById('output-texto3');
//     var text = textoCop.value.replace(/^\s+/gm, ''); // Remove espaços no início de cada linha
//     navigator.clipboard.writeText(text).then(function() {
//         alert('Texto copiado!');
//     }, function() {
//         alert('Erro ao copiar texto.');
//     });
// }

// function copiar4() {
//     var textoCop = document.getElementById('output-texto4');
//     textoCop.select();
//     textoCop.setSelectionRange(0, 99999);
//     document.execCommand('copy');
    
//     // alert("Texto Copiado");

// }

// function copiar5() {
//     var textoCop = document.getElementById('output-texto5');
//     textoCop.select();
//     textoCop.setSelectionRange(0, 99999);
//     document.execCommand('copy');
    
//     // alert("Texto Copiado");

// }


// function copiar6() {
//     var textoCop = document.getElementById('output-texto6');
//     textoCop.select();
//     textoCop.setSelectionRange(0, 99999);
//     document.execCommand('copy');
    
//     // alert("Texto Copiado");

// }




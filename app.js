function criptografar() {
  var original = document.getElementById('original').value;
  var resultado = '';

  for (var i = 0; i < original.length; i++) {
    switch (original[i]) {
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += original[i];
        break;
    }
  }

  document.getElementById('resultado').innerText =
    'Palavra criptografada: ' + resultado;
}

function descriptografar() {
  var criptografado = document.getElementById('criptografado').value;
  var resultado = '';

  var i = 0;
  while (i < criptografado.length) {
    if (criptografado.substring(i, i + 5) === 'enter') {
      resultado += 'e';
      i += 5;
    } else if (criptografado.substring(i, i + 4) === 'imes') {
      resultado += 'i';
      i += 4;
    } else if (criptografado.substring(i, i + 2) === 'ai') {
      resultado += 'a';
      i += 2;
    } else if (criptografado.substring(i, i + 4) === 'ober') {
      resultado += 'o';
      i += 4;
    } else if (criptografado.substring(i, i + 4) === 'ufat') {
      resultado += 'u';
      i += 4;
    } else {
      resultado += criptografado[i];
      i++;
    }
  }

  document.getElementById('resultadoDescriptografado').innerText =
    'Palavra descriptografada: ' + resultado;
}

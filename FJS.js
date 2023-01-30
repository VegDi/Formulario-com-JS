const form = document.getElementById('form-comparacao');
let A = parseFloat(document.getElementById('campo-A').value);
let B = parseFloat(document.getElementById('campo-B').value);

formEvalido = false;

function compare (A,B){
    return A > B;
}

form.addEventListener('submit', function (e) {

    e.preventDefault();
    const mensagemSucesso = `Formulário enviado com sucesso! Verificado: <b> Valor A menor que o Valor B!</b>`;


    formEvalido = compare(A,B);
    if (formEvalido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.getElementsByClassName.display = 'block';

        A.value = '';
        B.value = '';
    }
    else{
        document.querySelector('.error-message').style.display = 'block';
    }
});

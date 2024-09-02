let form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let dados = document.querySelectorAll('#dado');
    let validacao = document.querySelectorAll('#campoVazio')
    for (let i = 0; i < dados.length; i++){
        if (dados[i].value === ""){
            console.log('Valor inválido no campo:', dados[i].placeholder);
            validacao[i].innerHTML = 'Campo Obrigatório'
            dados[i].style.borderColor = 'red';
            break
        } else {
            console.log('O campo foi preenchido:', dados[i].placeholder);
            validacao[i].innerHTML = ''
            dados[i].style.borderColor = '';
        }
    }
});

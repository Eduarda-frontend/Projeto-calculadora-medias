const form = document.querySelector('#form-atividade');
const imgAprovado = `<img src='./images/aprovado.png' alt='Emoji celebrando' />`
const imgReprovado = `<img src='./images/reprovado.png' alt='Emoji decepcionado' />`
const notaMinima = parseFloat(prompt('Digite a nota miníma')); 

const atividades = [];
const notas = [];

const spanAprovado = `<span class='resultado aprovado'>Aprovado</span>`
const spanReprovado = `<span class='resultado reprovado'> Reprovado </span>`
let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    calculaMedia();
    
})

function adicionaLinha(){
    const inputNomeAtividade = document.querySelector('#nome-atividade');
    const inputNotaAtividade = document.querySelector('#nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = `<tr>`;
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value} </td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function calculaMedia(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){

    let somaDasNotas = 0;
    
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return  somaDasNotas/notas.length;

}
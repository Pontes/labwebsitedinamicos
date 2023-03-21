const botao = document.querySelector('#calcular');

botao.addEventListener('click',tabuada);

function tabuada(){
    console.log("teste");
    let numero = document.querySelector('#numero');
    let resultado = document.querySelector('#resultado');
    resultado.innerText="Resultado";
    for(let i = 1; i<= numero.value; i++){
        let div = document.createElement("div");
        div.innerText = `${i} x ${numero.value} =${numero.value*i}`;
        resultado.appendChild(div);
    }
}

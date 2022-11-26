var celulas = document.querySelectorAll(".celulas");
checarTurno = true;
const JOGADOR_X = "X";
const JOGADOR_O = "O";
const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

    document.addEventListener('click',function(event){
        if(event.target.matches(".celulas")){
            const celula = document.getElementById(event.target.id);
            const turno = checarTurno ? JOGADOR_X : JOGADOR_O;
            celula.textContent = turno;
            celula.classList.add(turno);
            checarVencedor(turno);
         }
    });


function checarVencedor(turno){
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index)=>{
            return celulas[index].classList.contains(turno);
        });
    });
    
    if(vencedor){
        encerraJogo(turno);
    }else if(checarEmpate()){
        encerraJogo();
    }else
    {
        checarTurno = !checarTurno;
    }
}

function checarEmpate(){
    let X = 0;
    let O = 0;
    for(let i  in celulas){
        if(!isNaN(i)){
           
            if(celulas[i].classList.contains(JOGADOR_X)){
                X++;
                
            }
            if(celulas[i].classList.contains(JOGADOR_O)){
                O++;
                
            }}
       console.log(i)
    }
    
    return X + O === 9?true:false; 

};

function encerraJogo(vencedor = null){
    const fim  = document.getElementById("fim");
    const h5 = document.createElement("h1");
    const h3 = document.createElement("h1")

    fim.style.display = "block";
    fim.appendChild(h5);
    fim.appendChild(h3);
    fim.style.display = "flex";
    fim.style.flexDirection = "column"
    fim.style.justifyContent = "center";
    fim.style.alignItems = "center";


    if(vencedor){
         h5.innerText = `O vencedor é ${vencedor}`
        
    }else{
        h5.innerText = "Empatou"
    }

    let contador = 3;
    setInterval(() =>{
        h3.innerHTML = `Reiniciando em ${contador--}`; 
    },1000);
    setTimeout(()=>{
        location.reload();
    },4000);

}
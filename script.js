/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){
let pedra = "Pedra";
let papel = "Papel";
let tesoura = "Tesoura";
let resultPlay1 = "Jogador 1 venceu!"
let resultPlay2 = "Jogador 2 venceu!" 
let resultEmpate = "Empate!"

    //resultado Player 1 WIN
    if ((player1 == papel && player2 == pedra) || (player1 == pedra && player2 == tesoura) || (player1 == tesoura && player2 == papel)){
        return resultPlay1
    }
   
    //resultado Player 2 WIN
    if((player1 == pedra && player2 == papel) || (player1 == tesoura && player2 == pedra) || (player1 == papel && player2 == tesoura)){
        return resultPlay2
    }

    // resultado EMPATE
    if((player1 == pedra && player2 == pedra) || (player1 == papel && player2 == papel) || (player1 == tesoura && player2 == tesoura)){
        return resultEmpate
    } 
    
}
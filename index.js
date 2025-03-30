function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value ;
    const diceResult = document.getElementById("diceResult") ;
    const diceImages = document.getElementById("diceImages") ;
    const values = [] ;
    const images = [] ;

    for (let i = 0 ; i< numOfDice ; i++){
        const value = Math.floor(Math.random() * 6 ) + 1 ;
        // console.log(value) ;
        values.push(value) ;
        images.push(`<img src="dice_images/${value}.jpg" alt="Dice ${value}">`) ;
        // console.log(`dice_images/${value}.jpg `) ;
    }
    diceResult.textContent = `dice : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('') ;
    // diceImages.textContent = ``;
    // console.log(values) ;

} ;



function square(num){
    return num * num ;
}
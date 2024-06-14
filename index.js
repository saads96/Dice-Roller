// Dice Roller Program

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;    // We de
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; // this is empty array
    const images = [];

   for(let i =0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src = "dice_images/${value}.png">`);



}
  diceResult.textContent = `dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
    
}
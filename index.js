// Code your solutions in this file
function writeCards(nameArray, type) {
    let cards = [];
    for (const name of nameArray) {
        cards.push(`Thank you, ${name}, for the wonderful ${type} gift!`);
    }
    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
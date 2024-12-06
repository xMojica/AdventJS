let regalos = [2, 5, 2, 8, 43, 3, 5, 7, 8];

function prepareGifts(gifts) {
    gifts.sort((a, b) => a - b);
    gifts = gifts.filter((item, index) => gifts.indexOf(item) === index);
    return gifts;
}

console.log(prepareGifts(regalos));

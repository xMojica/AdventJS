type Shoe = {
    type: "I" | "R";
    size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
    const myArray: number[] = [];
    shoes.map((i, indexY) => {
        shoes.map((k, indexX) => {
            if (k.type !== i.type && k.size === i.size) {
                myArray.push(i.size);
                shoes.splice(indexX, 1);
                shoes.splice(indexY, 1);
            }
        });
    });

    return myArray;
}

const shoes: Shoe[] = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 }
];

console.log(organizeShoes(shoes));

const inventario = [
    // { name: "doll", quantity: 5, category: "toys" },
    // { name: "car", quantity: 3, category: "toys" },
    // { name: "ball", quantity: 2, category: "sports" },
    // { name: "car", quantity: 2, category: "toys" },
    // { name: "car", quantity: 2, category: "toys" },
    // { name: "racket", quantity: 4, category: "sports" }
];
function organizeInventory(inventory) {
    const objetoRegalo = inventory.reduce((prev, regalo) => {
        return {
            ...prev,
            [regalo.category]: {
                ...prev[regalo.category],
                [regalo.name]:
                    (prev[regalo.category]?.[regalo.name] || 0) +
                    regalo.quantity
            }
        };
    }, {});
    return objetoRegalo;
}

console.log(organizeInventory(inventario));

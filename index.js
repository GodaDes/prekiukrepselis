function shoppingList(krepselis) {
    let output = ''
    if(krepselis.length !== 0) {
        output +=`Jūsų prekių krepšelyje yra ${krepselis.length} prekės:\n`;
        output += '-----------------------------------------------------------\n';
        output += 'Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti\n';
        output += '-----------------------------------------------------------\n';
        krepselis.forEach((item, index) => {
            const name = item.name;
            const amount = item.amount;
            const unitPrice = item.unitPrice / 100;
            const price = amount * unitPrice;
            output += `${index + 1}. ${name.padEnd(10)}| ${JSON.stringify(amount).padEnd(12)}| ${JSON.stringify(unitPrice).padEnd(14)}| ${price} Eur \n`;
        })
        output += '-----------------------------------------------------------\n';
        
    }
    else {
        output +='Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
    }
    return output
}




function productDetails(krepselis, id) {
    let item = findItemById(krepselis, id);
    let output = '';
    if(item !== -1) {
        const name = item.name;
        const amount = item.amount;
        const unitPrice = item.unitPrice / 100;
        const price = amount * unitPrice;
        
        output += '------------------------\n';
        output += 'Prekės informacija\n';
        output += '------------------------\n';
        output += 'ID'.padEnd(14) + '| ' + id + '\n';
        output += 'Pavadinimas'.padEnd(14) + '| ' + name  + '\n';
        output += 'Kiekis'.padEnd(14) + '| ' + amount  + ' vnt' + '\n';
        output += 'Vieneto kaina'.padEnd(14) + '| ' + unitPrice  + ' Eur' + '\n';
        output += 'Viso mokėti'.padEnd(14) + '| ' + price + ' Eur' + '\n';
        
    }
    else{
        output = `Prekė su ID: ${id} neegzistuoja`;
    }
    return output

}

function findItemById(krepselis, nr) {
    for (let i = 0; i < krepselis.length; i++) {
        if (krepselis[i].id === nr) {
            return krepselis[i];
        }
    }
    return -1;
}

const emptyList = [];

console.log(shoppingList(emptyList));
/*
Šiuo metu, jūsų prekių krepšelis yra tuščias.
*/

console.log(productDetails(emptyList, 42069));
/*
Prekė, su ID: 42069 neegzistuoja.
*/

const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];

console.log(shoppingList(firstShoppingList));
/*
Jūsų prekių krepšelyje yra 3 prekės:
-----------------------------------------------------------
Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
-----------------------------------------------------------
1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur
2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur
3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur
-----------------------------------------------------------
*/

console.log(productDetails(firstShoppingList, 42069));
/*
Prekė, su ID: 42069 neegzistuoja.
*/

console.log(productDetails(firstShoppingList, 1));
/*
------------------------------
Prekės informacija
------------------------------
ID            | 1
Pavadinimas   | Pomidoras
Kiekis        | 1000000 vnt
Vieneto kaina | 1.99 Eur
Viso mokėti   | 1990000.00 Eur
------------------------------
*/

console.log(productDetails(firstShoppingList, 3));
/*
------------------------
Prekės informacija
------------------------
ID            | 3
Pavadinimas   | Agurkas
Kiekis        | 2 vnt
Vieneto kaina | 0.50 Eur
Viso mokėti   | 1.00 Eur
------------------------
*/

console.log(productDetails(firstShoppingList, 7));
/*
------------------------
Prekės informacija
------------------------
ID            | 7
Pavadinimas   | Svogūnas
Kiekis        | 1 vnt
Vieneto kaina | 0.45 Eur
Viso mokėti   | 0.45 Eur
------------------------
*/

const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];

console.log(shoppingList(singleProductShoppingList));
/*
Jūsų prekių krepšelyje yra 1 prekė:
--------------------------------------------------
Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti
--------------------------------------------------
1. Kivi     | 23 vnt | 0.14 Eur      | 3.22 Eur
--------------------------------------------------
*/

console.log(productDetails(singleProductShoppingList, 42069));
/*
Prekė, su ID: 42069 neegzistuoja.
*/

console.log(productDetails(singleProductShoppingList, 2));
/*
------------------------
Prekės informacija
------------------------
ID            | 2
Pavadinimas   | Kivi
Kiekis        | 23 vnt
Vieneto kaina | 0.14 Eur
Viso mokėti   | 3.22 Eur
------------------------
*/
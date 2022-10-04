function showFruits() {
    if (true) {
        var fruitA = "Apple"; //Function scope
        let fruitB = "Kiwi"; //Block scope
        var fruitC = "Banana"; //Block scope
        console.log(fruitB);
        console.log(fruitC);
    }
    console.log(fruitA);
}

showFruits();